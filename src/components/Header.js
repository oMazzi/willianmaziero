import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to={'/willianmaziero'} aria-label="Will Maziero">
          <Logo />
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
