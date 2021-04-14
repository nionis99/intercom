import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';

import { useUserState } from 'contexts/User';
import { useStateSelector } from 'hooks/useReduxStateSelector';
import { getFlatUsers } from 'redux/actions/FlatUsers';
import FlatUsersListTable from 'components/Tables/UsersTable';
import LayoutContainer from 'components/Layout';
import EditFlatUserModal from 'components/Modals/EditFlatUser';
import FlatUser from 'types/FlatUser';

const UsersPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { selectedFlatId } = useUserState();
  const { flatUsersData, flatUsersLoading } = useStateSelector((state) => state.flatUsers);
  const [editingFlatUser, setEditingFlatUser] = useState<FlatUser | null>(null);

  useEffect(() => {
    dispatch(getFlatUsers(selectedFlatId || ''));
  }, [dispatch, selectedFlatId]);

  return (
    <LayoutContainer>
      <Card.Header className="d-flex align-items-center font-weight-bold">
        <span className="mr-4">{t('users')}</span>
      </Card.Header>
      <Card.Body className="h-100 overflow-auto">
        <FlatUsersListTable
          loading={flatUsersLoading}
          flatUsers={flatUsersData}
          setEditingFlatUser={setEditingFlatUser}
        />
      </Card.Body>
      {editingFlatUser && (
        <EditFlatUserModal
          show={!!editingFlatUser}
          editingFlatUser={editingFlatUser}
          handleClose={() => setEditingFlatUser(null)}
        />
      )}
    </LayoutContainer>
  );
};

export default UsersPage;
