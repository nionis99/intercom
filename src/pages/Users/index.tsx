import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { PersonAdd } from 'styled-icons/material-rounded';
import Card from 'react-bootstrap/Card';

import { useUserState } from 'contexts/User';
import { useStateSelector } from 'hooks/useReduxStateSelector';
import { getMembers } from 'redux/actions/Members';
import LayoutContainer from 'components/Layout';

const UsersPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { selectedFlatId } = useUserState();
  const [isOpenCreateMemberModal, setIsOpenCreateMemberModal] = useState(false);

  return (
    <LayoutContainer>
      <Card.Header className="d-flex align-items-center font-weight-bold">
        <span className="mr-4">{t('users')}</span>
        <span
          className="d-flex align-items-center ml-auto cursor-pointer font-weight-normal overflow-auto"
          onClick={() => setIsOpenCreateMemberModal(true)}
        >
          <PersonAdd size={22} className="text-primary mr-2" />
          <small className="text-truncate">{t('add_new_user')}</small>
        </span>
      </Card.Header>
      <Card.Body className="h-100 overflow-auto"></Card.Body>
    </LayoutContainer>
  );
};

export default UsersPage;
