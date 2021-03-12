import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Avatar from 'react-avatar';

import LayoutContainer from 'components/Layout';
import CreateCardModal from 'components/Modals/CreateCard';
import ChangePinCodeModal from 'components/Modals/ChangePinCode';
import ChangeContactsModal from 'components/Modals/ChangeContacts';

const fakeInfo = {
  name: 'Ivan',
  email: 'fake@fake.com',
  phone: '+37066666666',
  pinCode: '333',
  familyMembers: 3,
  myCards: 2,
  myPrivileges: 4,
};

const ProfilePage = () => {
  const { t } = useTranslation();
  const contacts = { username: fakeInfo.name, email: fakeInfo.email, phoneNumber: fakeInfo.phone };
  const [showCreateCardModal, setShowCreateCardModal] = useState(false);
  const [showEditContactsModal, setShowEditContactsModal] = useState(false);
  const [showChangePinCodeModal, setShowChangePinCodeModal] = useState(false);

  return (
    <LayoutContainer className="justify-content-md-center">
      <CreateCardModal show={showCreateCardModal} handleClose={() => setShowCreateCardModal(false)} />
      <ChangePinCodeModal
        show={showChangePinCodeModal}
        pinCode={fakeInfo.pinCode}
        handleClose={() => setShowChangePinCodeModal(false)}
      />
      <ChangeContactsModal
        show={showEditContactsModal}
        contacts={contacts}
        handleClose={() => setShowEditContactsModal(false)}
      />
      <Container className="d-flex flex-column">
        <Col md={12} className="d-flex flex-column align-items-center my-2 p-0">
          <Avatar src="/images/user.png" className="mb-2" />
          <div>{fakeInfo.name}</div>
        </Col>
        <Row className="d-flex">
          <div className="d-flex justify-content-center col-lg-6 my-4 p-0">
            <Container className="d-flex flex-column  align-items-center text-center">
              <h6>
                {t('email')}: {fakeInfo.email}
              </h6>
              <h6>
                {t('telephone')}: {fakeInfo.phone}
              </h6>
              <h6>
                {t('pin')}: {fakeInfo.pinCode}
              </h6>
              <h6>
                {t('family_members')}: {fakeInfo.familyMembers}
              </h6>
              <h6>
                {t('my_cards')}: {fakeInfo.myCards}
              </h6>
              <h6>
                {t('my_privileges')}: {fakeInfo.myPrivileges}
              </h6>
            </Container>
          </div>
          <div className="d-flex justify-content-center align-items-center col-lg-6 my-4">
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
                  <Button variant="secondary" className="w-100">
                    {t('change_password')}
                  </Button>
                </div>
              </Row>
            </Container>
          </div>
        </Row>
      </Container>
    </LayoutContainer>
  );
};

export default ProfilePage;
