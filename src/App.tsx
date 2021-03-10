import React from 'react';
import Routes from 'routes';
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Integrations } from '@sentry/tracing';
import * as Sentry from '@sentry/react';
import 'utils/i18n';

import AppStateProvider from 'contexts/AppState';

const history = createBrowserHistory();

export const SentryRoute = Sentry.withSentryRouting(Route);

if (process.env.REACT_APP_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    release: process.env.REACT_APP_SENTRY_RELEASE,
    environment: process.env.REACT_APP_SENTRY_ENVIRONMENT,
    integrations: [
      new Integrations.BrowserTracing({
        routingInstrumentation: Sentry.reactRouterV5Instrumentation(history),
      }),
    ],
    tracesSampleRate: 1.0,
  });
}

const App = () => {
  return (
    <AppStateProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AppStateProvider>
  );
};

export default App;
