import React, { Dispatch, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Table from 'react-bootstrap/Table';
import LoadingView from 'components/Loading';
import EmptyDataView from 'components/EmptyDataView';
import DeleteCardConfirmation from 'components/Modals/Confirmation/Delete';
import CreateCardModal from 'components/Modals/CreateCard';
import EditCardModal from 'components/Modals/EditCard';
import MemberItem from './MemberItem';
import { Member } from 'types';

const fakeData: Member[] = [
  { id: '1', name: 'Jonas', email: 'jonas@gmail.com', phone: '+37066666666', cards: 1 },
  { id: '2', name: 'Petras', email: 'petras@gmail.com', phone: '+37066666666', cards: 2 },
  { id: '3', name: 'Antanas', email: 'antanas@gmail.com', phone: '+37066666666', cards: 2 },
  { id: '4', name: 'Povilas', email: 'povilas@gmail.com', phone: '+37066666666', cards: 3 },
];

interface Props {
  loading: boolean;
  isOpenCreateCardModal: boolean;
  setIsOpenCreateCardModal: Dispatch<SetStateAction<boolean>>;
}

const FamilyMembersListTable = ({ loading, isOpenCreateCardModal, setIsOpenCreateCardModal }: Props) => {
  const { t } = useTranslation();
  const [deletingCardId, setDeletingCardId] = useState<string | null>(null);
  const [editingCard, setEditingCard] = useState<Member | null>(null);

  if (loading) return <LoadingView />;

  if (fakeData.length === 0) {
    return <EmptyDataView text={t('no_members')} centered />;
  }

  return (
    <div className="overflow-auto">
      {/*<CreateCardModal show={isOpenCreateCardModal} handleClose={() => setIsOpenCreateCardModal(false)} />*/}
      <Table borderless hover responsive="sm">
        <thead>
          <tr className="text-center">
            <th className="font-weight-normal">{t('name')}</th>
            <th className="font-weight-normal">{t('email')}</th>
            <th className="font-weight-normal">{t('phone')}</th>
            <th className="font-weight-normal">{t('cards')}</th>
            <th className="font-weight-normal">{t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          {fakeData.map((member) => (
            <MemberItem
              key={member.id}
              member={member}
              setDeletingCardId={setDeletingCardId}
              setEditingCard={setEditingCard}
            />
          ))}
        </tbody>
      </Table>
      {/*{!!editingCard && (*/}
      {/*  <EditCardModal show={!!editingCard} editingCard={editingCard} handleClose={() => setEditingCard(null)} />*/}
      {/*)}*/}
      <DeleteCardConfirmation
        title={t('delete_card')}
        deletingCardId={deletingCardId}
        confirmText={t('delete')}
        handleClose={() => setDeletingCardId(null)}
      />
    </div>
  );
};

export default FamilyMembersListTable;
