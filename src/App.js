import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Auth from './components/pages/Auth/Auth';
import Home from './components/pages/home/Home';
import { createContext, useState } from 'react';
import PrivateRoute from './utils/PrivateRoute'
import Tours from './components/pages/tours/Tours';
import TourSingle from './components/pages/tours/tourSingle/TourSingle';
import ScrollToTop from './components/shared/scrolltotop/ScrollToTop';
import Admin from './components/pages/admin/Admin';
import Checkout from './components/pages/checkout/Checkout';

export const TravelersContext = createContext()
function App() {

  const options = {
    position: positions.TOP_CENTER,
    timeout: 10000,
    offset: '30px',
    transition: transitions.FADE,
  }

  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("user")))
  return (
    <TravelersContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <AlertProvider template={AlertTemplate} {...options} containerStyle={{
        zIndex: 999999
      }} >
        <Router>
          <ScrollToTop />
          <Switch>

            <Route exact path={["/", "/home"]} component={Home} />

            <Route exact path={["/auth", "/login", "/signup"]} component={Auth} />

            <PrivateRoute exact path="/tours">
              <Tours />
            </PrivateRoute>

            <PrivateRoute exact path="/tours/:id">
              <TourSingle />
            </PrivateRoute>

            <PrivateRoute exact path="/admin">
              {loggedInUser?.role !== "admin" ? <Redirect to="/" /> : <Admin />}
            </PrivateRoute>

            <PrivateRoute exact path="/checkout/:id">
              <Checkout />
            </PrivateRoute>

          </Switch>
        </Router>
      </AlertProvider>
    </TravelersContext.Provider>
  );
}

export default App;
