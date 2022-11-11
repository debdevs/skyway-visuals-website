import React from 'react';
import styles from './AlternateThemeButton.module.css';
const AlternateThemeButton = ({ button_text = 'Explore' }) => {
  return (
    <button className={styles.alternate_button}>
      <div className={styles.button_background} />
      <h1 className={styles.button_text}>{button_text}</h1>
    </button>
  );
};

export default AlternateThemeButton;
