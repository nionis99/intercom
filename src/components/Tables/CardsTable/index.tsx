import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Table from 'react-bootstrap/Table';

import LoadingView from 'components/Loading';
import EmptyDataView from 'components/EmptyDataView';
import EditCardModal from 'components/Modals/EditingCard';
import DeleteCardConfirmation from 'components/Modals/Confirmation/Delete/Card';
import CardItem from './CardItem';
import Card from 'types/Card';

interface Props {
  cardsLoading: boolean;
  cardsData: Card[];
}

const CardsListTable = ({ cardsLoading, cardsData }: Props) => {
  const { t } = useTranslation();
  const [deletingCardId, setDeletingCardId] = useState<number | null>(null);
  const [editingCard, setEditingCard] = useState<Card | null>(null);

  if (cardsLoading) return <LoadingView className="m-4" />;

  if (cardsData.length === 0) {
    return <EmptyDataView text={t('no_cards')} centered />;
  }

  return (
    <div className="overflow-auto">
      <Table borderless hover responsive="sm">
        <thead>
          <tr className="text-center">
            <th className="font-weight-normal">{t('type')}</th>
            <th className="font-weight-normal">{t('card_no')}</th>
            <th className="font-weight-normal">{t('note')}</th>
            <th className="font-weight-normal">{t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          {cardsData.map((card) => (
            <CardItem key={card.id} card={card} setDeletingCardId={setDeletingCardId} setEditingCard={setEditingCard} />
          ))}
        </tbody>
      </Table>
      {!!editingCard && (
        <EditCardModal show={!!editingCard} editingCard={editingCard} handleClose={() => setEditingCard(null)} />
      )}
      <DeleteCardConfirmation
        title={t('delete_card')}
        deletingCardId={deletingCardId}
        confirmText={t('delete')}
        handleClose={() => setDeletingCardId(null)}
      />
    </div>
  );
};

export default CardsListTable;
