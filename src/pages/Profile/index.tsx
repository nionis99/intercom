import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Avatar from 'react-avatar';

import LayoutContainer from 'components/Layout';
import CreateCardModal from 'components/Modals/CreateCard';
import ChangePasswordModal from 'components/Modals/ChangePassword';
import UserInfo from 'components/UserInfo';
import { User, UserRoleEnum } from 'types/User';

const fakeInfo: User = {
  id: 2,
  login: 'Ivan',
  password: '****',
  role_id: 2,
  role: UserRoleEnum.OWNER,
  create_time: '123123',
  update_time: '123123',
};

const ProfilePage = () => {
  const [showCreateCardModal, setShowCreateCardModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  return (
    <LayoutContainer className="justify-content-md-center overflow-auto position-relative">
      <div className="h-100 py-lg-4 w-100">
        <Container className="d-flex flex-column pt-lg-4 pt-4">
          <Col md={12} className="d-flex flex-column align-items-center pb-4">
            <Avatar src="/images/user.png" className="mb-2" round />
            <div>{fakeInfo.login}</div>
          </Col>
          <Row className="d-flex">
            <div className="d-flex justify-content-center col-lg-6 my-4 p-0">
              <UserInfo user={fakeInfo} />
            </div>
          </Row>
        </Container>
      </div>
      <CreateCardModal show={showCreateCardModal} handleClose={() => setShowCreateCardModal(false)} />
      <ChangePasswordModal show={showChangePasswordModal} handleClose={() => setShowChangePasswordModal(false)} />
    </LayoutContainer>
  );
};

export default ProfilePage;
