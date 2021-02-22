import React from "react";
import { Route, Switch } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import StatisticsPage from "../pages/StatisticsPage";
import DataLabPage from "../pages/DataLabPage";
import AgeTrendPage from "../pages/AgeTrendPage";

function MainRouter() {
  return (
    <Switch>
      <Route exact path="/" component={DataLabPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/statistics" component={StatisticsPage} />
      <Route path="/ageTrend" component={AgeTrendPage} />
    </Switch>
  );
}

export default MainRouter;
