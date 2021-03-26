import React from 'react';
import { useTranslation } from 'react-i18next';
import { Location } from '@styled-icons/entypo/Location';
import Container from 'react-bootstrap/Container';

import { useAppState } from 'contexts';
import { routesData } from 'routes';
import { logout } from 'redux/actions/AuthorizationActions';
import SidebarItem from './SidebarItem';
import styles from './sidebar.module.scss';

const Sidebar = () => {
  const { setAccessToken } = useAppState();
  const { t } = useTranslation();

  return (
    <div className={`${styles.sidebar} border-right border-light-99 bg-light content d-none d-md-flex border`}>
      <Container className="d-flex flex-column align-items-center justify-content-center py-4 border-bottom">
        <Location size={24} className="text-primary" />
        <small className="mt-2 text-center font-weight-bold">Fake Address, 333-N</small>
      </Container>
      <div className="scroll overflow-auto">
        <ul className="list-group list-group-flush h-100">
          {routesData.map((route, index) => (
            <SidebarItem route={route} key={index} />
          ))}
          <SidebarItem route="error" />
          <li className="list-group-item p-0 border-bottom">
            <div className={`d-flex py-2 px-2 ${styles.link}`}>
              <div
                className="d-flex w-100  justify-content-center text-danger cursor-pointer"
                onClick={() => logout(setAccessToken)}
              >
                {t('logout')}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
