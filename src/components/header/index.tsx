import React from 'react';
import styles from './header.module.scss';
import { ExitIcon } from '../shared/icons/exitIcon';

import { useDispatch } from 'react-redux';
import { logout } from '../auth/auth-slice';

export const Header = () => {
  const dispatch = useDispatch();
  const hundleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logo}>Simple Hotel Check</div>
        <div className={styles.exit} onClick={hundleLogout}>
          <span className={styles.logoutDesc}>Выйти</span>
          <ExitIcon />
        </div>
      </div>
    </div>
  );
};
