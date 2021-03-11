import React from 'react';
import Container from 'react-bootstrap/Container';
import { Location } from '@styled-icons/entypo/Location';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './sidebar.module.scss';

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <div className={`border-right border-light-99 bg-light content`}>
      <Container className="d-flex flex-column align-items-center justify-content-center py-4 border-bottom">
        <Location size={24} className="text-primary" />
        <h6 className="mt-2">Fake Address, 333-N</h6>
        <h6>Ivan</h6>
      </Container>
      <div className="scroll">
        <ul className="list-group list-group-flush h-100">
          <li className="list-group-item p-0 border-bottom">
            <NavLink
              className={`d-flex align-items-center py-2 px-2 ${styles.link}`}
              to="/profile"
              activeClassName={styles.selected}
            >
              <div className="d-flex w-100 align-items-center justify-content-center">{t('profile')}</div>
            </NavLink>
          </li>
          <li className="list-group-item p-0 border-bottom">
            <NavLink
              className={`d-flex align-items-center py-2 px-2 ${styles.link}`}
              to="/members"
              activeClassName={styles.selected}
            >
              <div className="d-flex w-100 align-items-center justify-content-center">{t('members')}</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
