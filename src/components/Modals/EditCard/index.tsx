import React from 'react';
import { useTranslation } from 'react-i18next';
import CardForm, { CardFormInputs } from 'components/Forms/CardForm';
import ModalContainer from 'components/Modals';
import { Member } from 'types';

interface Props {
  show: boolean;
  editingCard: Member;
  handleClose: () => void;
}

const EditCardModal = ({ show, editingCard, handleClose }: Props) => {
  const { t } = useTranslation();
  const loading = false;

  const onSubmit = (data: CardFormInputs) => {
    console.log(data);
    handleClose();
  };

  return (
    <ModalContainer title={t('edit_card')} isActive={show} centered handleClose={handleClose}>
      <div className="h-100 w-100 d-flex">
        <CardForm editingCard={editingCard} onSubmit={onSubmit} loading={loading} handleClose={handleClose} />
      </div>
    </ModalContainer>
  );
};

export default EditCardModal;
