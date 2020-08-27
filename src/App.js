import React from "react";
import logo from "./logo.svg";
// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
import Home from "./pages/Home";
import Scholarship from "./pages/scholarship";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import NavbarHome from "./components/HomeNavBar";
import Programmes from "./pages/Programmes";
import Opjems from "./pages/OPJEMS";

function App() {
  return (
    <React.Fragment>

      <HashRouter>
        <NavbarHome />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/programmes">
            <Programmes />
          </Route>
          <Route path="/opjems">
            <Opjems />
          </Route>
          <Redirect to="/home"></Redirect>

        </Switch>
      </HashRouter>
    </React.Fragment>

  );
}

export default App;
