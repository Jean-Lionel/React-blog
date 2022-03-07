import NavBar from './NavBar'
import Home from './Home'
import Ajouter from './Ajouter'

import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className="App">
        <NavBar />
          <div className="contenu">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/ajouter">
                <Ajouter />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
