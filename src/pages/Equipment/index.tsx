import React from 'react';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';
import NewFeatureUI from 'components/NewFeature';
import LayoutContainer from 'components/Layout';

const EquipmentPage = () => {
  const { t } = useTranslation();

  return (
    <LayoutContainer className="h-100">
      <Card.Header className="d-flex align-items-center font-weight-bold">{t('equipment')}</Card.Header>
      <Card.Body className="h-100 overflow-auto">
        <NewFeatureUI />
      </Card.Body>
    </LayoutContainer>
  );
};

export default EquipmentPage;
