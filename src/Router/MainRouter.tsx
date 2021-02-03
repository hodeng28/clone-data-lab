import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchPage from '../page/SearchPage';
import StatisticsPage from '../page/StatisticsPage';
import DataLabPage from '../page/DataLabPage';



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
