import React, { Dispatch, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Table from 'react-bootstrap/Table';
import LoadingView from 'components/Loading';
import EmptyDataView from 'components/EmptyDataView';
import DeleteConfirmation from 'components/Modals/Confirmation/Delete';
import CreateCardModal from 'components/Modals/CreateCard';
import EditCardModal from 'components/Modals/EditCard';
import MemberItem from './MemberItem';
import { Member } from 'types';

const fakeData: Member[] = [
  { cardId: '112312', code: '333', status: true },
  { cardId: '241231', code: '432', status: true },
  { cardId: '312312', code: '666', status: true },
  { cardId: '441221', code: '999', status: false },
  { cardId: '441444', code: '999', status: false },
  { cardId: '445123', code: '999', status: false },
  { cardId: '441343', code: '999', status: false },
  { cardId: '441666', code: '999', status: true },
  { cardId: '441712', code: '999', status: false },
  { cardId: '441292', code: '999', status: false },
  { cardId: '441281', code: '999', status: true },
  { cardId: '441243', code: '999', status: false },
  { cardId: '441211', code: '999', status: false },
];

interface Props {
  loading: boolean;
  isOpenCreateCardModal: boolean;
  setIsOpenCreateCardModal: Dispatch<SetStateAction<boolean>>;
}

const MembersListTable = ({ loading, isOpenCreateCardModal, setIsOpenCreateCardModal }: Props) => {
  const { t } = useTranslation();
  const [deletingCardId, setDeletingCardId] = useState<string | null>(null);
  const [editingCard, setEditingCard] = useState<Member | null>(null);

  if (loading) return <LoadingView />;

  if (fakeData.length === 0) {
    return <EmptyDataView text={t('no_members')} centered />;
  }

  return (
    <>
      <CreateCardModal show={isOpenCreateCardModal} handleClose={() => setIsOpenCreateCardModal(false)} />
      <Table borderless hover responsive="sm">
        <thead>
          <tr className="text-center">
            <th className="font-weight-normal">{t('card_id')}</th>
            <th className="font-weight-normal">{t('pin_code')}</th>
            <th className="font-weight-normal">{t('status')}</th>
            <th className="font-weight-normal">{t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          {fakeData.map((member) => (
            <MemberItem
              key={member.cardId}
              member={member}
              setDeletingCardId={setDeletingCardId}
              setEditingCard={setEditingCard}
            />
          ))}
        </tbody>
      </Table>
      {!!editingCard && (
        <EditCardModal show={!!editingCard} editingCard={editingCard} handleClose={() => setEditingCard(null)} />
      )}
      {!!deletingCardId && (
        <DeleteConfirmation
          title={t('delete_card')}
          confirmText={t('delete')}
          handleClose={() => setDeletingCardId(null)}
        />
      )}
    </>
  );
};

export default MembersListTable;
