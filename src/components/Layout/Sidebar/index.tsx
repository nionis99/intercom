import React from 'react';
import { useTranslation } from 'react-i18next';
import { Location } from '@styled-icons/entypo/Location';
import Container from 'react-bootstrap/Container';
import SidebarItem from './SidebarItem';
import styles from './sidebar.module.scss';

const routes = ['profile', 'members', 'equipment', 'access'];

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <div className="border-right border-light-99 bg-light content">
      <Container className="d-flex flex-column align-items-center justify-content-center py-4 border-bottom">
        <Location size={24} className="text-primary" />
        <small className="mt-2 text-center">Fake Address, 333-N</small>
        <small className="font-weight-bold">Ivan</small>
      </Container>
      <div className="scroll">
        <ul className="list-group list-group-flush h-100">
          {routes.map((route, index) => (
            <SidebarItem route={route} key={index} />
          ))}
          <SidebarItem route="error" />
          <li className="list-group-item p-0 border-bottom">
            <div className={`d-flex py-2 px-2 ${styles.link}`}>
              <div className="d-flex w-100  justify-content-center text-danger cursor-pointer">{t('logout')}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
