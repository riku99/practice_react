import React from "react";
//import ReactDOM from "react-dom"
import { Switch, Route } from "react-router-dom";

import Count from "./components/counter";
import Home from "./components/Home";

const App = () => {
  return (
    <Switch>
      <Route path="/counter">
        <Count count="5" />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
