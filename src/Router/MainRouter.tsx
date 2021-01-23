import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchPage from '../Page/SearchPage';
import StatisticsPage from '../Page/StatisticsPage';
import DataLabPage from '../Page/DataLabPage';



function MainRouter() {
  return (
    <Switch>
      <Route exact path="/" component={DataLabPage}  />
      <Route path="/search" component={SearchPage} />
      <Route path="/statistics" component={StatisticsPage} />
    </Switch>
  )
};

export default MainRouter;
