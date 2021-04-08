import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useStateSelector } from 'hooks/useReduxStateSelector';
import { updateMemberContacts } from 'redux/actions/Member';
import ChangeContactsForm, { ChangeContactsInputs } from 'components/Forms/ContactsForm';
import ModalContainer from 'components/Modals';

interface Props {
  show: boolean;
  memberId: number;
  name: string;
  email: string;
  phone: string;
  handleClose: () => void;
}

const ChangeContactsModal = ({ show, memberId, name, email, phone, handleClose }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { memberContactsLoading } = useStateSelector((state) => state.member);

  const responseText = t('updated_contacts');

  const onSubmit = async (data: ChangeContactsInputs) => {
    await dispatch(updateMemberContacts(data, memberId, responseText));
    handleClose();
  };

  if (!show) return null;

  return (
    <ModalContainer title={t('change_contacts')} isActive={show} centered handleClose={handleClose}>
      <div className="h-100 w-100 d-flex">
        <ChangeContactsForm
          name={name}
          email={email}
          phone={phone}
          onSubmit={onSubmit}
          loading={memberContactsLoading}
          handleClose={handleClose}
        />
      </div>
    </ModalContainer>
  );
};

export default ChangeContactsModal;
