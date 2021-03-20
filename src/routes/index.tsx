import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import UnauthorizedRoute from 'routes/Unauthorized';
import AuthorizedRoute from './Authorized';
import FamilyMembersPage from 'pages/FamilyMembers';
import LoginPage from 'pages/Login';
import DashboardPage from 'pages/Dashboard';
import ProfilePage from 'pages/Profile';
import EquipmentPage from 'pages/Equipment';
import FakeError from 'pages/FakeError';
import NotFoundPage from 'pages/NotFound';
import { SentryRoute } from 'App';

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
          <FamilyMembersPage />
        </AuthorizedRoute>
        <AuthorizedRoute exact path="/equipment">
          <EquipmentPage />
        </AuthorizedRoute>
        <UnauthorizedRoute path="/login">
          <LoginPage />
        </UnauthorizedRoute>
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
