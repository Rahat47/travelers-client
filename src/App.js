import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Auth from './components/pages/Auth/Auth';
import Home from './components/pages/home/Home';
import { createContext, useState } from 'react';

export const TravelersContext = createContext()
function App() {
  const options = {
    position: positions.TOP_CENTER,
    timeout: 10000,
    offset: '30px',
    transition: transitions.FADE
  }

  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("user")))
  return (
    <TravelersContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <AlertProvider template={AlertTemplate} {...options} >
        <Router>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path={["/auth", "/login", "/signup"]} component={Auth} />
          </Switch>
        </Router>
      </AlertProvider>
    </TravelersContext.Provider>
  );
}

export default App;
