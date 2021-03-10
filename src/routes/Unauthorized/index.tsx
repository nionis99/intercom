import { Redirect, RouteProps } from 'react-router-dom';
import { useAppState } from 'contexts/AppState';
import { SentryRoute } from 'App';

export default function UnauthorizedRoute({ children, ...rest }: RouteProps) {
  const { isAuthenticated } = useAppState();

  return (
    <SentryRoute
      {...rest}
      render={() =>
        isAuthenticated ? (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}
