import React from 'react';
import { useTranslation } from 'react-i18next';
import ModalContainer from 'components/Modals';
import ChangePasswordForm, { ChangePasswordInput } from 'components/Forms/ChangePasswordForm';

interface Props {
  show: boolean;
  handleClose: () => void;
}

const ChangePasswordModal = ({ show, handleClose }: Props) => {
  const { t } = useTranslation();
  const loading = false;

  const onSubmit = (data: ChangePasswordInput) => {
    console.log(data);
    handleClose();
  };

  if (!show) return null;

  return (
    <ModalContainer title={t('change_password')} isActive={show} centered handleClose={handleClose}>
      <div className="h-100 w-100 d-flex">
        <ChangePasswordForm onSubmit={onSubmit} loading={loading} handleClose={handleClose} />
      </div>
    </ModalContainer>
  );
};

export default ChangePasswordModal;
