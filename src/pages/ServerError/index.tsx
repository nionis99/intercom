import React from 'react';
import Container from 'react-bootstrap/Container';
import { useTranslation } from 'react-i18next';

const ServerErrorPage = () => {
  const { t } = useTranslation();

  return (
    <Container className="h-100 d-flex flex-column justify-content-center align-items-center text-center">
      <img src="/images/logo.png" className="mb-2" />
      <h1 className="text-primary text-center font-weight-normal display-4">{t('server_error')}</h1>
      <h4 className="text-primary text-center font-weight-light">{t('server_error_message')}</h4>
    </Container>
  );
};

export default ServerErrorPage;
