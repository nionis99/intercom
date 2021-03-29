import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Avatar from 'react-avatar';

import { useAppState } from 'contexts';
import LayoutContainer from 'components/Layout';
import UserInfo from 'components/UserInfo';

const ProfilePage = () => {
  const { user } = useAppState();

  return (
    <LayoutContainer className="justify-content-md-center overflow-auto position-relative">
      <div className="h-100 py-lg-4 w-100">
        <Container className="d-flex flex-column pt-lg-4 pt-4">
          <Col md={12} className="d-flex flex-column align-items-center pb-4">
            <Avatar src="/images/user.png" className="mb-2" round />
          </Col>
          <div className="d-flex w-100 justify-content-center align-items-center my-4 p-0">
            {user && <UserInfo user={user} />}
          </div>
        </Container>
      </div>
    </LayoutContainer>
  );
};

export default ProfilePage;
