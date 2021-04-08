import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import { SentryRoute } from 'App';
import AuthorizedRoute from 'routes/Authorized';
import UnauthorizedRoute from 'routes/Unauthorized';
import LoginPage from 'pages/Login';
import DashboardPage from 'pages/Dashboard';
import ProfilePage from 'pages/Profile';
import MembersPage from 'pages/Members';
import MemberPage from 'pages/Member';
import EquipmentPage from 'pages/Equipment';
import AccessScenariosPage from 'pages/Access';
import FakeError from 'pages/FakeError';
import NotFoundPage from 'pages/NotFound';
import ServerErrorPage from 'pages/ServerError';

export const routesData = ['profile', 'members', 'access', 'equipment'];

const Routes = () => (
  <div className="d-flex flex-column flex-md-row full-height">
    <div className="order-md-2 order-1 w-100 h-100 overflow-auto">
      <Switch>
        <AuthorizedRoute exact path="/">
          <DashboardPage />
        </AuthorizedRoute>
        <AuthorizedRoute exact path="/error">
          <FakeError />
        </AuthorizedRoute>
        <AuthorizedRoute exact path="/profile">
          <ProfilePage />
        </AuthorizedRoute>
        <AuthorizedRoute exact path="/members">
          <MembersPage />
        </AuthorizedRoute>
        <AuthorizedRoute exact path="/members/:memberId">
          <MemberPage />
        </AuthorizedRoute>
        <AuthorizedRoute exact path="/equipment">
          <EquipmentPage />
        </AuthorizedRoute>
        <UnauthorizedRoute path="/login">
          <LoginPage />
        </UnauthorizedRoute>
        <AuthorizedRoute exact path="/access">
          <AccessScenariosPage />
        </AuthorizedRoute>
        <SentryRoute path="/server">
          <ServerErrorPage />
        </SentryRoute>
        <SentryRoute exact path="/404">
          <NotFoundPage />
        </SentryRoute>
        <SentryRoute path="/*">
          <Redirect to="/404" />
        </SentryRoute>
      </Switch>
    </div>
  </div>
);

export default Routes;
