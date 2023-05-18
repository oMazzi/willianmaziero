import React from 'react';
import splashDogs from '../assets/splashDogs.png';
import splashOrbiout from '../assets/splashOrbiout.png';
import styles from './Portfolio.module.css';
import { ReactComponent as Arrow } from '../assets/arrowCorner.svg';

const Portfolio = () => {
  const projects = [
    {
      name: 'Dogs Social Media',
      tech: 'React - Redux - APIs',
      splash: splashDogs,
      enabled: true,
    },
    {
      name: 'Orbiout',
      tech: 'React - Redux - APIs - CSS',
      splash: splashOrbiout,
      enabled: false,
    },
  ];

  function handleClick() {
    window.open('https://omazzi.github.io/dogs.socialmedia/', '_blank');
  }

  return (
    <section className={styles.grid}>
      {projects.map((project) => (
        <div className={styles.container} key={project.name}>
          <img
            src={project.splash}
            className={styles.image}
            alt={project.name}
          />
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>{project.name}</h2>
            <button className={styles.button} onClick={handleClick}>
              <span className={styles.titleButton}>VISIT</span>
              <span>
                <Arrow />
              </span>
            </button>
            <p>{project.tech}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
