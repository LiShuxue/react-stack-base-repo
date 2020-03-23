import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.less';

import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from 'src/pages/page3';
import Header from 'components/Header';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/page1">
            <Page1 />
          </Route>
          <Route exact path="/page2">
            <Page2 />
          </Route>
          <Route exact path="/page3">
            <Page3 />
          </Route>
          <Redirect to="/page1" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
