import React from 'react';
import LayoutContainer from 'components/Layout';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import EquipmentsListTable from 'components/Tables/EquipmentsTable';

const EquipmentPage = () => {
  const { t } = useTranslation();

  return (
    <LayoutContainer>
      <Card.Header className="d-flex align-items-center font-weight-bold">{t('equipment')}</Card.Header>
      <Card.Body className="h-100 overflow-auto">
        <EquipmentsListTable loading={false} />
      </Card.Body>
    </LayoutContainer>
  );
};

export default EquipmentPage;
