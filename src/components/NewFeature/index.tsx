import React from 'react';
import Container from 'react-bootstrap/Container';
import { useTranslation } from 'react-i18next';

const NewFeatureUI = () => {
  const { t } = useTranslation();

  return (
    <Container className="h-100 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="text-primary text-center font-weight-normal display-4">{t('feature_is_in_development')}</h1>
      <img src="/images/logo.png" className="mt-2" />
    </Container>
  );
};

export default NewFeatureUI;
