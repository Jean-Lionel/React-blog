import NavBar from './NavBar'
import Home from './Home'
import Ajouter from './Ajouter'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import BlogDetail from './BlogDetail';

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
              <Route path="/ajouter" exact>
                <Ajouter />
              </Route>
              <Route path='/blog/:lionel' exact={true} >
                <BlogDetail />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
