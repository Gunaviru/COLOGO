import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  ItemList as ItemListView,
  ItemReport as ItemReportView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/itemlist"
      />
      <RouteWithLayout
        component={ItemListView}
        exact
        layout={MainLayout}
        path="/itemlist"
      />
      <RouteWithLayout
        component={ItemReportView}
        exact
        layout={MainLayout}
        path="/itemreport"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />      
    </Switch>
  );
};

export default Routes;
