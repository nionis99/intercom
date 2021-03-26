import React from 'react';
import Routes from 'routes';
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Integrations } from '@sentry/tracing';
import * as Sentry from '@sentry/react';
import 'utils/i18n';

import AppStateProvider from 'contexts';
import ErrorBoundary from 'components/ErrorBoundary';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProvider from './contexts/User';

const history = createBrowserHistory();

export const SentryRoute = Sentry.withSentryRouting(Route);

if (process.env.REACT_APP_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    release: process.env.REACT_APP_VERSION,
    environment: process.env.REACT_APP_SENTRY_ENVIRONMENT,
    integrations: [
      new Integrations.BrowserTracing({
        routingInstrumentation: Sentry.reactRouterV5Instrumentation(history),
      }),
    ],
    tracesSampleRate: 0.5,
  });
}

const App = () => (
  <ErrorBoundary>
    <AppStateProvider>
      <UserProvider>
        <Router history={history}>
          <Routes />
          <ToastContainer autoClose={2000} />
        </Router>
      </UserProvider>
    </AppStateProvider>
  </ErrorBoundary>
);

export default App;
