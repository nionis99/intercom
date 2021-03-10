import React from 'react';
import { Switch } from 'react-router-dom';

import UnauthorizedRoute from 'routes/Unauthorized';
import AuthorizedRoute from './Authorized';
import LoginPage from 'pages/Login';
import Dashboard from 'pages/Dashboard';

const Routes = () => (
  <div className="d-flex flex-column flex-md-row full-height">
    <div className="order-md-2 order-1 w-100 h-100 overflow-auto">
      <Switch>
        <AuthorizedRoute exact path="/">
          <Dashboard />
        </AuthorizedRoute>
        <UnauthorizedRoute path="/login">
          <LoginPage />
        </UnauthorizedRoute>
      </Switch>
    </div>
  </div>
);

export default Routes;
