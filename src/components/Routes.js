import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Quiz from './Quiz';

const Routes = () => (
  <>
    <Switch>
      <Route path="/question/:questionNumber">
        <Quiz />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </>
);

export default Routes;
