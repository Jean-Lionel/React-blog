import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./Home"
import Admin from "./Pages/Admin";
import Bonjour from "./Pages/Bonjour";
import Login from "./Pages/Login";
import ProtectedRoute from "./utility/ProtectedRouter";


function App() {
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bonjour" component={Bonjour} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/admin" component={Admin} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
