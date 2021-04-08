import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useStateSelector } from 'hooks/useReduxStateSelector';
import { updateMemberPin } from 'redux/actions/Member';
import ChangePinForm, { ChangePinInput } from 'components/Forms/ChangePinForm';
import ModalContainer from 'components/Modals';

interface Props {
  show: boolean;
  memberId: number;
  pinCode: string;
  handleClose: () => void;
}

const ChangePinCodeModal = ({ show, memberId, pinCode, handleClose }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { memberPinLoading } = useStateSelector((state) => state.member);

  const responseText = t('updated_pin');

  const onSubmit = async (data: ChangePinInput) => {
    await dispatch(updateMemberPin(data, memberId, responseText));
    handleClose();
  };

  if (!show) return null;

  return (
    <ModalContainer title={t('change_pin_code')} isActive={show} centered handleClose={handleClose}>
      <div className="h-100 w-100 d-flex">
        <ChangePinForm pinCode={pinCode} onSubmit={onSubmit} loading={memberPinLoading} handleClose={handleClose} />
      </div>
    </ModalContainer>
  );
};

export default ChangePinCodeModal;
