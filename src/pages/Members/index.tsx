import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { PersonAdd } from 'styled-icons/material-rounded';
import { ChevronLeft } from 'styled-icons/boxicons-solid';
import Card from 'react-bootstrap/Card';

import { useUserState } from 'contexts/User';
import { useStateSelector } from 'hooks/useReduxStateSelector';
import { getMembers } from 'redux/actions/Members';
import MembersListTable from 'components/Tables/MembersTable';
import LayoutContainer from 'components/Layout';

interface Props {
  isAdminRoute: boolean;
}

const MembersPage = ({ isAdminRoute }: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { selectedFlatId } = useUserState();
  const [isOpenCreateMemberModal, setIsOpenCreateMemberModal] = useState(false);
  const { membersLoading, membersData } = useStateSelector((state) => state.members);

  useEffect(() => {
    dispatch(getMembers(selectedFlatId, isAdminRoute));
  }, [dispatch, selectedFlatId, isAdminRoute]);

  return (
    <LayoutContainer>
      <Card.Header className="d-flex align-items-center font-weight-bold">
        {isAdminRoute && (
          <Link to="/users">
            <ChevronLeft className="d-flex justify-content-start" size={24} />
          </Link>
        )}
        <span className={`${isAdminRoute ? 'ml-4' : ''} mr-4`}>{t(isAdminRoute ? 'users_members' : 'members')}</span>
        <span
          className="d-flex align-items-center ml-auto cursor-pointer font-weight-normal overflow-auto"
          onClick={() => setIsOpenCreateMemberModal(true)}
        >
          <PersonAdd size={22} className="text-primary mr-2" />
          <small className="text-truncate">{t('add_new_user')}</small>
        </span>
      </Card.Header>
      <Card.Body className="h-100 overflow-auto">
        <MembersListTable
          loading={membersLoading}
          membersData={membersData}
          setIsOpenCreateMemberModal={setIsOpenCreateMemberModal}
          isOpenCreateMemberModal={isOpenCreateMemberModal}
          isAdminRoute={isAdminRoute}
        />
      </Card.Body>
    </LayoutContainer>
  );
};

export default MembersPage;
