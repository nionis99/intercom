import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Avatar from 'react-avatar';

import LayoutContainer from 'components/Layout';
import CreateCardModal from 'components/Modals/CreateCard';
import ChangePinCodeModal from 'components/Modals/ChangePinCode';
import ChangeContactsModal from 'components/Modals/ChangeContacts';
import UserProfileButtons from 'components/Buttons/UserProfileButtons';
import ChangePasswordModal from 'components/Modals/ChangePassword';
import UserInfo from 'components/UserInfo';
import { User } from 'types';

const fakeInfo: User = {
  name: 'Ivan',
  email: 'fake@fake.com',
  phone: '+37066666666',
  pinCode: '333',
  familyMembers: 3,
  myCards: 2,
  myPrivileges: 4,
};

const ProfilePage = () => {
  const contacts = { username: fakeInfo.name, email: fakeInfo.email, phoneNumber: fakeInfo.phone };
  const [showCreateCardModal, setShowCreateCardModal] = useState(false);
  const [showEditContactsModal, setShowEditContactsModal] = useState(false);
  const [showChangePinCodeModal, setShowChangePinCodeModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  return (
    <LayoutContainer className="justify-content-md-center overflow-auto position-relative">
      <div className="h-100 py-lg-4 w-100">
        <Container className="d-flex flex-column pt-lg-4 pt-4">
          <Col md={12} className="d-flex flex-column align-items-center pb-4">
            <Avatar src="/images/user.png" className="mb-2" round />
            <div>{fakeInfo.name}</div>
          </Col>
          <Row className="d-flex">
            <div className="d-flex justify-content-center col-lg-6 my-4 p-0">
              <UserInfo user={fakeInfo} />
            </div>
            <div className="d-flex justify-content-center align-items-center col-lg-6 my-4">
              <UserProfileButtons
                setShowChangePinCodeModal={setShowChangePinCodeModal}
                setShowCreateCardModal={setShowCreateCardModal}
                setShowEditContactsModal={setShowEditContactsModal}
                setShowChangePasswordModal={setShowChangePasswordModal}
              />
            </div>
          </Row>
        </Container>
      </div>
      <ChangePinCodeModal
        show={showChangePinCodeModal}
        pinCode={fakeInfo.pinCode}
        handleClose={() => setShowChangePinCodeModal(false)}
      />
      <CreateCardModal show={showCreateCardModal} handleClose={() => setShowCreateCardModal(false)} />
      <ChangeContactsModal
        show={showEditContactsModal}
        contacts={contacts}
        handleClose={() => setShowEditContactsModal(false)}
      />
      <ChangePasswordModal show={showChangePasswordModal} handleClose={() => setShowChangePasswordModal(false)} />
    </LayoutContainer>
  );
};

export default ProfilePage;
