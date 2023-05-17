import React from 'react';
import styles from './About.module.css';
import { ReactComponent as Profile } from '../assets/profile.svg';

const About = () => {
  return (
    <section className={styles.container}>
      <section className={styles.avatar}>
        <Profile />
      </section>
      <section className={styles.about}>
        <div className={styles.mainContent}>
          <h1 className={styles.title}>About me</h1>
          <h2 className={styles.titleSecond}>
            Frontend Web Developer and future Full Stack Developer
          </h2>
          <p>
            Passionate about innovation, effective in planning and working for
            more than 10 years creating solutions. My ability to quickly
            understand what needs to be done and my strong background as a civil
            engineer help me on my journey as a developer.
          </p>
        </div>
        <section className={styles.info}>
          <div>
            <span>Name:</span>
            <p>Willian Maziero</p>
          </div>
          <div>
            <span>Email:</span>
            <p>willian.maziero@hotmail.com</p>
          </div>
          <div>
            <span>Location:</span>
            <p>London, Ontario</p>
          </div>
          <div>
            <span>Availability:</span>
            <p>Open to work</p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default About;
