import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link
          className={styles.logo}
          to={'/willmaziero'}
          aria-label="Will Maziero"
        >
          WILL MAZIERO
        </Link>
      </div>
      <div className={styles.info}>
        <Link to={'/about'}>About</Link>
        <Link to={'/portfolio'}>Portfolio</Link>
        <Link to={'/contact'}>Contact</Link>
      </div>
    </header>
  );
};

export default Header;
