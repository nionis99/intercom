import React from 'react';
import ModalOfConfirmation from 'components/Modals/Confirmation';

interface Props {
  title: string;
  deletingCardId: string | null;
  confirmText: string;
  handleClose: () => void;
}

const DeleteCardConfirmation = ({ title, deletingCardId, confirmText, handleClose }: Props) => {
  if (!deletingCardId) return null;

  const onSubmitClick = () => {
    console.log(deletingCardId);
    handleClose();
  };

  const onResetClick = () => handleClose();

  return (
    <ModalOfConfirmation
      title={title}
      confirmText={confirmText}
      onSubmitClick={onSubmitClick}
      onResetClick={onResetClick}
    />
  );
};

export default DeleteCardConfirmation;
