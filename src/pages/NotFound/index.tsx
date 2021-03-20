import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Container className="h-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-primary display-1">404</h1>
      <h4 className="mb-3">{t('page_not_found')}</h4>
      <p className="text-center w-50">
        <p>{t('nothing_found_message')}</p>
        <Link to="/">{t('return_to_homepage')}</Link>
      </p>
    </Container>
  );
};

export default NotFoundPage;
