import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from '../sidebar.module.scss';
import React from 'react';

interface Props {
  route: string;
}

const SidebarItem = ({ route }: Props) => {
  const { t } = useTranslation();

  return (
    <li className="list-group-item p-0 border-bottom">
      <NavLink
        className={`d-flex align-items-center py-2 px-2 ${styles.link}`}
        to={`/${route}`}
        activeClassName={styles.selected}
      >
        <div className="d-flex w-100 justify-content-center">{t(route)}</div>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
