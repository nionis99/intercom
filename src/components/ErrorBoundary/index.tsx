import React, { ReactNode } from 'react';
import { createBrowserHistory } from 'history';
import * as Sentry from '@sentry/react';
import UnexpectedError from 'components/ErrorBoundary/ErrorView';

const history = createBrowserHistory({ forceRefresh: true });

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  event_id: string;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, event_id: '' };
  }

  redirectToHome = () => history.push('/');

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    const eventId = Sentry.captureException(error);
    this.setState({ event_id: eventId });
  }

  render() {
    if (this.state.hasError) {
      return <UnexpectedError redirectToHome={this.redirectToHome} eventId={this.state.event_id} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
