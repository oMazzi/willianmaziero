import React from 'react';
import styles from './Portfolio.module.css';
import { ReactComponent as Arrow } from '../assets/arrowCorner.svg';

const Portfolio = () => {
  const projects = [
    {
      name: 'DOGS SOCIAL MEDIA',
      tech: 'React - Redux - APIs - CSS',
      link: 'https://omazzi.github.io/dogs.socialmedia/',
      active: true,
      color: { 'background-color': '#FFBB11' },
    },
    {
      name: 'ORBIOUT',
      tech: 'React - Redux - APIs - CSS',
      link: null,
      active: false,
      color: { 'background-color': '#353538' },
    },
  ];

  console.log(projects.link);

  return (
    <section className={styles.grid}>
      {projects.map((project) => (
        <div
          className={styles.container}
          key={project.name}
          style={project.color}
        >
          <div>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>{project.name}</h2>
              <p>{project.tech}</p>
              <button
                disabled={!project.active}
                className={`${styles.button} ${
                  !project.active ? styles.disabled : ''
                }`}
                onClick={() => {
                  window.open(project.link, '_blank');
                }}
              >
                {project.active ? (
                  <span className={styles.titleButton}>VISIT</span>
                ) : (
                  <span className={styles.titleButton}>IN PROGRESS..</span>
                )}
                <span>
                  <Arrow />
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
