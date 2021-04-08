import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useStateSelector } from 'hooks/useReduxStateSelector';
import { deleteMember } from 'redux/actions/Members';
import ModalOfConfirmation from 'components/Modals/Confirmation';

interface Props {
  title: string;
  deletingMemberId: number | null;
  confirmText: string;
  handleClose: () => void;
}

const DeleteMemberConfirmation = ({ title, deletingMemberId, confirmText, handleClose }: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { deleteLoading } = useStateSelector((state) => state.members);
  const responseText = t('member_deleted');

  if (!deletingMemberId) return null;

  const onSubmitClick = async () => {
    await dispatch(deleteMember(deletingMemberId, responseText));
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

export default DeleteMemberConfirmation;
