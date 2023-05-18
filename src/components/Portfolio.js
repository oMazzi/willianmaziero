import React from 'react';
import splashDogs from '../assets/splashDogs.png';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const projects = [
    {
      name: 'Dogs Social Media',
      splash: splashDogs,
    },
  ];

  return (
    <section className={styles.grid}>
      {projects.map((project) => (
        <div className={styles.container} key={project.name}>
          <img
            src={project.splash}
            className={styles.image}
            alt={project.name}
          />
          <h2 className={styles.title}>{project.name}</h2>
          <button className={styles.button}>Visit</button>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
