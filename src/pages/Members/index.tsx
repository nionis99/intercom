import React from 'react';
import { useTranslation } from 'react-i18next';
import { PersonAdd } from 'styled-icons/material-rounded';
import Card from 'react-bootstrap/Card';
import LayoutContainer from 'components/Layout';
import MembersListTable from 'components/Tables/MembersTable';

const MembersPage = () => {
  const { t } = useTranslation();

  return (
    <LayoutContainer>
      <Card.Header className="d-flex align-items-center font-weight-bold">
        {t('assigned_cards')}
        <span className="d-flex align-items-center ml-auto cursor-pointer font-weight-normal">
          <PersonAdd size={22} className="text-primary mr-2" />
          {t('add_new_card')}
        </span>
      </Card.Header>
      <Card.Body className="h-100 overflow-auto">
        <MembersListTable loading={false} />
      </Card.Body>
    </LayoutContainer>
  );
};

export default MembersPage;
