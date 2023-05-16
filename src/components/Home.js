import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(1);
  const [currentPhrase, setCurrentPhrase] = useState(
    'I am a Front End Developer',
  );

  useEffect(() => {
    const typePhrase = () => {
      const phrases = [
        'I am a Front End Developer',
        'React.Js lover',
        'Your ideas deserve to live.',
      ];
      setCurrentPhrase(phrases[currentPhraseIndex]);
      if (currentPhraseIndex < phrases.length - 1)
        setCurrentPhraseIndex(currentPhraseIndex + 1);
    };

    const typeInterval = setInterval(typePhrase, 3500);

    return () => {
      clearInterval(typeInterval);
    };
  }, [currentPhraseIndex]);

  return (
    <section className={styles.container}>
      <p className={styles.title}>WILLIAN MAZIERO</p>
      <p className={`${styles.phrase} ${styles.animeShowUp}`}>
        {currentPhrase}
      </p>
    </section>
  );
};

export default Home;
