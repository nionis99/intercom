import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const ServerErrorPage = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <Container className="h-100 d-flex flex-column justify-content-center align-items-center text-center">
      <img src="/images/logo.png" className="mb-2" />
      <h1 className="text-primary text-center font-weight-normal display-4">{t('internal_server_error')}</h1>
      <Trans i18nKey="technical_problem_message">
        Our servers are facing a temporary technical problem.
        <p>We regret the inconvenience causes.</p>
        <p>Please try again after some time</p>
      </Trans>
      <Button onClick={() => history.push('/')} className="float-right mt-4">
        {t('homepage')}
      </Button>
    </Container>
  );
};

export default ServerErrorPage;
