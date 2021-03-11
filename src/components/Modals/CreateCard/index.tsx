import React from 'react';
import { useTranslation } from 'react-i18next';
import ModalContainer from 'components/Modals';
import CardForm, { CardFormInputs } from 'components/Forms/CardForm';

interface Props {
  show: boolean;
  handleClose: () => void;
}

const CreateCardModal = ({ show, handleClose }: Props) => {
  const { t } = useTranslation();
  const loading = false;

  const onSubmit = (data: CardFormInputs) => {
    console.log(data);
    handleClose();
  };

  return (
    <ModalContainer title={t('create_card')} isActive={show} centered handleClose={handleClose}>
      <div className="h-100 w-100 d-flex">
        <CardForm onSubmit={onSubmit} loading={loading} handleClose={handleClose} />
      </div>
    </ModalContainer>
  );
};

export default CreateCardModal;
