import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CircleFill } from '@styled-icons/bootstrap';
import { Edit, Trash } from '@styled-icons/fa-solid';
import Table from 'react-bootstrap/Table';
import LoadingView from 'components/Loading';
import EmptyDataView from 'components/EmptyDataView';
import DeleteConfirmation from '../../Modals/Confirmation/Delete';

const fakeData = [
  { cardId: 112312, code: 333, status: true },
  { cardId: 241231, code: 432, status: true },
  { cardId: 312312, code: 666, status: true },
  { cardId: 441221, code: 999, status: false },
  { cardId: 441444, code: 999, status: false },
  { cardId: 445123, code: 999, status: false },
  { cardId: 441343, code: 999, status: false },
  { cardId: 441666, code: 999, status: true },
  { cardId: 441712, code: 999, status: false },
  { cardId: 441292, code: 999, status: false },
  { cardId: 441281, code: 999, status: true },
  { cardId: 441243, code: 999, status: false },
  { cardId: 441211, code: 999, status: false },
];

interface Props {
  loading: boolean;
}

const MembersListTable = ({ loading }: Props) => {
  const { t } = useTranslation();
  const [deletingCardId, setDeletingCardId] = useState<number | null>(null);

  if (loading) return <LoadingView />;

  if (fakeData.length === 0) {
    return <EmptyDataView text={t('no_members')} centered />;
  }

  return (
    <>
      {!!deletingCardId && (
        <DeleteConfirmation
          title={t('delete_card')}
          confirmText={t('delete')}
          handleClose={() => setDeletingCardId(null)}
        />
      )}
      <Table borderless hover responsive="sm">
        <thead>
          <tr className="text-center">
            <th className="font-weight-normal">{t('card_id')}</th>
            <th className="font-weight-normal">{t('code')}</th>
            <th className="font-weight-normal">{t('status')}</th>
            <th className="font-weight-normal">{t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          {fakeData.map((data) => (
            <tr key={data.cardId} className="text-center font-weight-light">
              <td>{data.cardId}</td>
              <td>{data.code}</td>
              <td>{<CircleFill color={data.status ? 'green' : 'red'} size={20} />}</td>
              <td className="d-flex align-items-center justify-content-center">
                <Edit size={22} className="text-primary cursor-pointer mr-2" />
                <Trash
                  size={20}
                  className="text-danger cursor-pointer"
                  onClick={() => setDeletingCardId(data.cardId)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default MembersListTable;
