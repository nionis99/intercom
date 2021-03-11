import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useAppState } from 'contexts/AppState';
import LoginForm, { LoginFormInputs } from 'components/Forms/LoginForm';
import SocialLoginButtons from 'components/Buttons/SocialLoginButtons';
import LanguageSelect from 'components/Buttons/LanguagePicker';

const LoginPage = () => {
  const { setAccessToken } = useAppState();

  const handleLoginSubmit = (data: LoginFormInputs) => setAccessToken(data.username);

  return (
    <>
      <LanguageSelect floating />
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
    </>
  );
};

export default LoginPage;
