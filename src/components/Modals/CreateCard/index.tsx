import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { useStateSelector } from 'hooks/useReduxStateSelector';
import { createCard } from 'redux/actions/Cards';
import CardForm, { CardFormInputs } from 'components/Forms/CardForm';
import ModalContainer from 'components/Modals';

interface Props {
  show: boolean;
  handleClose: () => void;
}

const CreateCardModal = ({ show, handleClose }: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { createLoading } = useStateSelector((state) => state.cards);

  const responseText = t('card_created');

  const onSubmit = async (data: CardFormInputs) => {
    await dispatch(createCard(data, responseText));
    handleClose();
  };

  if (!show) return null;

  return (
    <ModalContainer title={t('create_card')} isActive={show} centered handleClose={handleClose}>
      <div className="h-100 w-100 d-flex">
        <CardForm onSubmit={onSubmit} loading={createLoading} handleClose={handleClose} />
      </div>
    </ModalContainer>
  );
};

export default CreateCardModal;
