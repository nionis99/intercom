import React from 'react';
import { useTranslation } from 'react-i18next';
import ChangeContactsForm, { ChangeContactsInputs } from 'components/Forms/ContactsForm';
import ModalContainer from 'components/Modals';
import { Contacts } from 'types';

interface Props {
  show: boolean;
  contacts: Contacts;
  handleClose: () => void;
}

const ChangeContactsModal = ({ show, contacts, handleClose }: Props) => {
  const { t } = useTranslation();
  const loading = false;

  const onSubmit = (data: ChangeContactsInputs) => {
    console.log(data);
    handleClose();
  };

  if (!show) return null;

  return (
    <ModalContainer title={t('change_contacts')} isActive={show} centered handleClose={handleClose}>
      <div className="h-100 w-100 d-flex">
        <ChangeContactsForm contacts={contacts} onSubmit={onSubmit} loading={loading} handleClose={handleClose} />
      </div>
    </ModalContainer>
  );
};

export default ChangeContactsModal;
