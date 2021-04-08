import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useStateSelector } from 'hooks/useReduxStateSelector';
import ModalContainer from 'components/Modals';
import CardForm, { CardFormInputs } from 'components/Forms/CardForm';
import { updateCard } from 'redux/actions/Cards';
import Card from 'types/Card';

interface Props {
  show: boolean;
  editingCard: Card;
  handleClose: () => void;
}

const EditCardModal = ({ show, editingCard, handleClose }: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { updateLoading } = useStateSelector((state) => state.cards);

  const responseText = t('card_updated');

  const onSubmit = async (data: CardFormInputs) => {
    await dispatch(updateCard(data, editingCard.id, responseText));
    handleClose();
  };

  return (
    <ModalContainer title={t('edit_card')} isActive={show} centered handleClose={handleClose}>
      <div className="h-100 w-100 d-flex">
        <CardForm onSubmit={onSubmit} editingCard={editingCard} loading={updateLoading} handleClose={handleClose} />
      </div>
    </ModalContainer>
  );
};

export default EditCardModal;
