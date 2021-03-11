import React from 'react';
import ModalOfConfirmation from 'components/Modals/Confirmation';

interface Props {
  title: string;
  confirmText: string;
  handleClose: () => void;
}

const DeleteConfirmation = ({ title, confirmText, handleClose }: Props) => {
  const onSubmitClick = () => handleClose();
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

export default DeleteConfirmation;
