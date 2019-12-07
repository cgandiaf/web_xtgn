import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/nav_bar/NavBar";
import Contact from "./components/contact/Contact";
import Home from "./pages/home/Home";
import Companies from "./pages/companies/Companies";
import Private from "./pages/private/Private";
import Roscones from "./pages/roscones/Roscones";
import Wedings from "./pages/wedings/Wedings";

import menuRoutes from "./assets/menuRoutes.json";


function App() {
  return (
    <div className="App">
      <NavBar routes={menuRoutes}></NavBar>
      <Switch>
        <Route path="/empresas" component={Companies} />
        <Route path="/particulares" component={Private} />
        <Route path="/bodas" component={Wedings} />
        <Route path="/roscones" component={Roscones} />
        <Route path="/" component={Home} />
      </Switch>
      <Contact></Contact>
    </div>
  );
}

export default App;
