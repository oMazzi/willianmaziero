import React from 'react';
import { ReactComponent as Github } from '../assets/github-1.svg';
import { ReactComponent as Linkedin } from '../assets/linkedin-3.svg';
import { Link } from 'react-router-dom';
import styles from './Buttons.module.css';

const Buttons = () => {
  return (
    <nav className={styles.container}>
      <Link to="https://github.com/oMazzi" aria-label="Github Will">
        <Github />
      </Link>
      <Link
        to="https://www.linkedin.com/in/willianmaziero/"
        aria-label="Linkedin Will"
      >
        <Linkedin />
      </Link>
    </nav>
  );
};

export default Buttons;
