import React from 'react';
import { Redirect, RouteProps } from 'react-router-dom';
import { useAppState } from 'contexts/AppState';
import { SentryRoute } from 'App';

export default function AuthorizedRoute({ children, ...rest }: RouteProps) {
  const { isAuthenticated } = useAppState();

  return (
    <SentryRoute
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
