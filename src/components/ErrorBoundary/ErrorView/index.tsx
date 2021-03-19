import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Error as ErrorIcon, Home } from '@styled-icons/material-rounded';
import { useTranslation, Trans } from 'react-i18next';

import ReportButton from 'components/ErrorBoundary/ReportButton';

interface Props {
  redirectToHome: () => void;
  eventId: string;
}

const UnexpectedError = ({ redirectToHome, eventId }: Props) => {
  const { t } = useTranslation();

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center align-content-center vh-100">
      <ErrorIcon size={70} className="text-secondary " />
      <h3 className="text-secondary m-4">
        <Trans i18nKey="something_went_wrong">
          <b>Oops!</b> Something went wrong.
        </Trans>
      </h3>
      <p className="text-center">
        <ReportButton redirectToHomepage={redirectToHome} eventId={eventId} />
        <Button variant="outline-primary" className="mx-2" onClick={redirectToHome}>
          <Home className="mr-1" size={20} />
          {t('homepage')}
        </Button>
      </p>
    </Container>
  );
};

export default UnexpectedError;
