import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppState } from 'contexts/AppState';
import { useTranslation } from 'react-i18next';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LanguageSelect from 'components/Buttons/LanguagePicker';
import { logout } from 'redux/actions/AuthorizationActions';

const LayoutHeader = () => {
  const { t } = useTranslation();
  const { accessToken, setAccessToken } = useAppState();

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to="/">
        <img alt="NTT" src="/images/logo.png" width="100" height="46" className="d-inline-block align-top" />
      </Navbar.Brand>
      <Navbar.Text className="d-flex d-md-none  justify-content-center align-items-center ml-auto">
        <LanguageSelect />
      </Navbar.Text>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end text-center">
        <Nav>
          <Navbar.Text className="d-none d-md-flex justify-content-center align-items-center ml-auto">
            <LanguageSelect />
          </Navbar.Text>
          <Navbar.Text className="d-flex justify-content-center align-items-center">
            <NavLink to="/profile" className="d-flex d-md-none text-center justify-content-center text-decoration-none">
              {t('profile')}
            </NavLink>
          </Navbar.Text>
          <Navbar.Text className="d-flex justify-content-center align-items-center">
            <NavLink to="/members" className="d-flex d-md-none text-center justify-content-center text-decoration-none">
              {t('members')}
            </NavLink>
          </Navbar.Text>
          <Navbar.Text className="d-flex justify-content-center align-items-center">
            <NavLink
              to="/equipment"
              className="d-flex d-md-none text-center justify-content-center text-decoration-none"
            >
              {t('equipment')}
            </NavLink>
          </Navbar.Text>
          <Navbar.Text className="d-flex justify-content-center align-items-center">
            <NavLink to="/access" className="d-flex d-md-none text-center justify-content-center text-decoration-none">
              {t('access')}
            </NavLink>
          </Navbar.Text>
          {!!accessToken && (
            <Navbar.Text className="d-flex justify-content-center align-items-center">
              <div
                className="d-flex d-md-none align-items-center justify-content-center cursor-pointer ml-md-3 text-danger"
                onClick={() => logout(setAccessToken)}
              >
                {t('logout')}
              </div>
            </Navbar.Text>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default LayoutHeader;
