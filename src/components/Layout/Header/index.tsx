import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useAppState } from 'contexts/AppState';
import { useTranslation } from 'react-i18next';
import { Container, Nav } from 'react-bootstrap';
import LanguageSelect from 'components/LanguagePicker';

const LayoutHeader = () => {
  const { t } = useTranslation();
  const { accessToken, setAccessToken } = useAppState();

  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          <img alt="NTT" src="/images/logo.png" width="100" height="46" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end text-center">
          <Nav className="ml-auto">
            <LanguageSelect />
            <Navbar.Text className="ml-md-4">
              {t('signed_in_as')} :
              <NavLink to="/profile" className="ml-2 text-decoration-none">
                {accessToken}
              </NavLink>
            </Navbar.Text>
            {!!accessToken && (
              <Navbar.Text
                onClick={() => setAccessToken(null)}
                className="ml-md-5 text-decoration-none text-danger cursor-pointer"
              >
                Logout
              </Navbar.Text>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LayoutHeader;
