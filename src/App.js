import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/home/Home';

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
      </Switch>

    </Router>
  );
}

export default App;
