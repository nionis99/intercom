import React from 'react';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';
import NewFeatureUI from 'components/NewFeature';
import LayoutContainer from 'components/Layout';

const AccessScenariosPage = () => {
  const { t } = useTranslation();

  return (
    <LayoutContainer>
      <Card.Header className="d-flex align-items-center font-weight-bold">{t('access')}</Card.Header>
      <Card.Body className="h-100 overflow-auto">
        <NewFeatureUI />
      </Card.Body>
    </LayoutContainer>
  );
};

export default AccessScenariosPage;
