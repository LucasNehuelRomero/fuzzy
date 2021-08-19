import './App.css';
import Login from './componentes/Login';
import Inicio from './componentes/Inicio';
import Settings from './componentes/Settings';
import Notfound from './componentes/Notfound';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Notfound from './componentes/Notfound';

function App() {
  
  return (
    <Router>
      <div className="container">
        <div className="btn-group">
          <Link to="/login" className="btn-btn blue">
            Iniciar sesión
          </Link>
          <Link to="/signup" className="btn-btn black">
            Registrarse
          </Link>
        </div>
        <Switch>
          <Route path="/" exact>
          </Route>
        </Switch>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Switch>
          <Route path="/signup">
            <Inicio />
          </Route>
        </Switch>
        <Switch>
          <Route path="/premium">
            <Inicio />
          </Route>
        </Switch>
        <Switch>
          <Route path="/inicio">
            <Inicio />
          </Route>
        </Switch>
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
        <Switch>
           <Route path="*">    {/*Esta linea de código está destinada a una página de error si el usuario busca una página que no existe. */}
            <Notfound />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
