import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';

import { useAppState } from 'contexts';
import { useStateSelector } from 'hooks/useReduxStateSelector';
import LoginForm, { LoginFormInputs } from 'components/Forms/LoginForm';
import SocialLoginButtons from 'components/Buttons/SocialLoginButtons';
import LanguageSelect from 'components/Buttons/LanguagePicker';
import { login } from 'redux/actions/AuthorizationActions';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { setAccessToken } = useAppState();
  const { loading } = useStateSelector((state) => state.auth);

  const handleLoginSubmit = (data: LoginFormInputs) => dispatch(login(data, setAccessToken));

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
            <LoginForm handleLoginSubmit={handleLoginSubmit} loading={loading} />
            <SocialLoginButtons />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LoginPage;
