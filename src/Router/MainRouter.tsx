import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchPage from '../Page/SearchPage';
import StatisitcsPage from '../Page/StatisticsPage';
import DataLabPage from '../Page/DataLabPage';



function MainRouter() {
  return (
    <Switch>
      <Route exact path="/" component={DataLabPage}  />
      <Route path="/search" component={SearchPage} />
      <Route path="/statisitcs" component={StatisitcsPage} />
    </Switch>
  )
};

export default MainRouter;
