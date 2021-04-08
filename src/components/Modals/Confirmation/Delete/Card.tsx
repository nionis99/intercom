import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useStateSelector } from 'hooks/useReduxStateSelector';
import { deleteCard } from 'redux/actions/Cards';
import ModalOfConfirmation from 'components/Modals/Confirmation';

interface Props {
  title: string;
  deletingCardId: number | null;
  confirmText: string;
  handleClose: () => void;
}

const DeleteCardConfirmation = ({ title, deletingCardId, confirmText, handleClose }: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { deleteLoading } = useStateSelector((state) => state.cards);
  const responseText = t('card_deleted');

  if (!deletingCardId) return null;

  const onSubmitClick = async () => {
    await dispatch(deleteCard(deletingCardId, responseText));
    handleClose();
  };

  const onResetClick = () => handleClose();

  return (
    <ModalOfConfirmation
      title={title}
      confirmText={confirmText}
      onSubmitClick={onSubmitClick}
      onResetClick={onResetClick}
      isLoading={deleteLoading}
    />
  );
};

export default DeleteCardConfirmation;
