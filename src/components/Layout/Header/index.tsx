import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppState } from 'contexts/AppState';
import { useTranslation } from 'react-i18next';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Logout } from 'styled-icons/material-rounded';
import { AccountCircle } from 'styled-icons/material-rounded';
import LanguageSelect from 'components/Buttons/LanguagePicker';

const LayoutHeader = () => {
  const { t } = useTranslation();
  const { accessToken, setAccessToken } = useAppState();

  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to="/">
        <img alt="NTT" src="/images/logo.png" width="100" height="46" className="d-inline-block align-top" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end text-center">
        <Nav className="ml-md-auto">
          <Navbar.Text className="d-flex justify-content-center align-items-center ml-md-3">
            <LanguageSelect />
          </Navbar.Text>
          <Navbar.Text className="d-flex align-items-center justify-content-center ml-md-3">
            <NavLink to="/profile" className="d-flex align-items-center justify-content-center text-decoration-none">
              <AccountCircle size={30} className="mr-2" />
            </NavLink>
          </Navbar.Text>
          {!!accessToken && (
            <Navbar.Text className="d-flex align-items-center justify-content-center ml-md-3">
              <Logout
                onClick={() => setAccessToken(null)}
                size={30}
                className="text-decoration-none text-danger cursor-pointer"
              >
                {t('logout')}
              </Logout>
            </Navbar.Text>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default LayoutHeader;
