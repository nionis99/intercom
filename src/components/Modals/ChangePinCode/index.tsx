import React from 'react';
import { useTranslation } from 'react-i18next';
import ChangePinForm, { ChangePinInput } from 'components/Forms/ChangePinForm';
import ModalContainer from 'components/Modals';

interface Props {
  show: boolean;
  pinCode: string;
  handleClose: () => void;
}

const ChangePinCodeModal = ({ show, pinCode, handleClose }: Props) => {
  const { t } = useTranslation();
  const loading = false;

  const onSubmit = (data: ChangePinInput) => {
    console.log(data);
    handleClose();
  };

  if (!show) return null;

  return (
    <ModalContainer title={t('change_pin_code')} isActive={show} centered handleClose={handleClose}>
      <div className="h-100 w-100 d-flex">
        <ChangePinForm pinCode={pinCode} onSubmit={onSubmit} loading={loading} handleClose={handleClose} />
      </div>
    </ModalContainer>
  );
};

export default ChangePinCodeModal;
