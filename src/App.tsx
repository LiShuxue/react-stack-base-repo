import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./App.less";

import TradeQuery from "./pages/tradeQuery";
import Exceptions from "./pages/exceptions";
import Rules from "./pages/rules";
import Header from "./components/header";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          {/* This code styling is Router-v5 recommand.
              If want use such as location, history object, you can use Router-v5 hook api.
              It is helpful for reduce code and nesting route. 
          */}
          <Route exact path="/query">
            <TradeQuery />
          </Route>
          <Route exact path="/exceptions">
            <Exceptions />
          </Route>
          <Route exact path="/rules">
            <Rules />
          </Route>
          <Redirect to="/query" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
