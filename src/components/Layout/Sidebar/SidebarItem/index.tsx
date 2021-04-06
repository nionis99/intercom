import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import styles from '../sidebar.module.scss';

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
        <div className="d-flex justify-content-center w-100">{t(route)}</div>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
