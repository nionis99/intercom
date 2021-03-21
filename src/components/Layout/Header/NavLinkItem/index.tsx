import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

interface Props {
  route: string;
}

const NavLinkItem = ({ route }: Props) => {
  const { t } = useTranslation();

  return (
    <Navbar.Text className="d-flex justify-content-center align-items-center">
      <NavLink
        to={`/${route}`}
        activeClassName="text-primary"
        className="d-flex d-md-none text-center justify-content-center text-decoration-none"
      >
        {t(route)}
      </NavLink>
    </Navbar.Text>
  );
};

export default NavLinkItem;
