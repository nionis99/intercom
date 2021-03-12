import React, { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

interface Props {
  setShowChangePinCodeModal: Dispatch<SetStateAction<boolean>>;
  setShowCreateCardModal: Dispatch<SetStateAction<boolean>>;
  setShowEditContactsModal: Dispatch<SetStateAction<boolean>>;
  setShowChangePasswordModal: Dispatch<SetStateAction<boolean>>;
}

const UserProfileButtons = ({
  setShowChangePinCodeModal,
  setShowCreateCardModal,
  setShowEditContactsModal,
  setShowChangePasswordModal,
}: Props) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <div className="col-lg-6 mb-2 mb-lg-0">
          <Button variant="primary" className="w-100" onClick={() => setShowChangePinCodeModal(true)}>
            {t('change_pin_code')}
          </Button>
        </div>
        <div className="col-lg-6 mb-2">
          <Button variant="primary" className="w-100" onClick={() => setShowCreateCardModal(true)}>
            {t('add_cards')}
          </Button>
        </div>
        <div className="col-lg-12 mb-2">
          <Button variant="primary" className="w-100" onClick={() => setShowEditContactsModal(true)}>
            {t('change_contacts')}
          </Button>
        </div>
        <div className="col-lg-12">
          <Button variant="secondary" className="w-100" onClick={() => setShowChangePasswordModal(true)}>
            {t('change_password')}
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default UserProfileButtons;
