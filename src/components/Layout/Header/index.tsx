import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppState } from 'contexts';
import { useTranslation } from 'react-i18next';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { useUserState } from 'contexts/User';
import LanguageSelect from 'components/Buttons/LanguagePicker';
import NavLinkItem from './NavLinkItem';
import styles from './header.module.scss';

const LayoutHeader = () => {
  const { t } = useTranslation();
  const { routesData } = useAppState();
  const { onLogout } = useUserState();

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to="/" className={`${styles.navBrand} m-0`}>
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
          {routesData.map((route, index) => (
            <NavLinkItem key={index} route={route} />
          ))}
          <Navbar.Text className="d-flex justify-content-center align-items-center">
            <div
              className="d-flex d-md-none align-items-center justify-content-center cursor-pointer ml-md-3 text-danger"
              onClick={onLogout}
            >
              {t('logout')}
            </div>
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default LayoutHeader;
