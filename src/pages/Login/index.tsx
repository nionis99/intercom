import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SocialLoginButtons from 'components/SocialLoginButtons';
import LoginForm, { LoginFormInputs } from 'components/LoginForm';

const LoginPage = () => {
  const handleLoginSubmit = (data: LoginFormInputs) => console.log(data);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100 w-100">
      <Row className="w-100 h-100 justify-content-center">
        <Col
          xs={12}
          sm={12}
          md={6}
          className={`d-flex flex-column align-items-center justify-content-center w-100 py-4`}
        >
          <LoginForm handleLoginSubmit={handleLoginSubmit} />
          <SocialLoginButtons />
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
