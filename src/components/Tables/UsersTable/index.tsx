import React, { SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { CircleFill } from '@styled-icons/bootstrap';
import { Edit } from '@styled-icons/fa-solid';
import Table from 'react-bootstrap/Table';

import LoadingView from 'components/Loading';
import EmptyDataView from 'components/EmptyDataView';
import FlatUser from 'types/FlatUser';
import { Link } from 'react-router-dom';

interface Props {
  loading: boolean;
  flatUsers: FlatUser[];
  setEditingFlatUser: React.Dispatch<SetStateAction<FlatUser | null>>;
}

const FlatUsersListTable = ({ loading, flatUsers, setEditingFlatUser }: Props) => {
  const { t } = useTranslation();

  if (loading) return <LoadingView />;

  if (flatUsers.length === 0 || (!flatUsers && !loading)) {
    return <EmptyDataView text={t('no_flat_users')} centered />;
  }

  return (
    <div className="overflow-auto">
      <Table borderless hover responsive="sm">
        <thead>
          <tr className="text-center">
            <th className="font-weight-normal">{t('is_active')}</th>
            <th className="font-weight-normal">{t('username')}</th>
            <th className="font-weight-normal">{t('role')}</th>
            <th className="font-weight-normal">{t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          {flatUsers.map((flatUser, index) => (
            <tr className="text-center" key={index}>
              <td className="d-flex justify-content-center">
                <CircleFill size={18} color={flatUser.is_active ? 'Green' : 'Red'} />
              </td>
              <td>
                <Link to={`/users/${flatUser.id}`} className="text-decoration-none">
                  {flatUser.login}
                </Link>
              </td>
              <td>{flatUser.role}</td>
              <td>
                <Edit size={20} className="text-primary cursor-pointer" onClick={() => setEditingFlatUser(flatUser)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FlatUsersListTable;
