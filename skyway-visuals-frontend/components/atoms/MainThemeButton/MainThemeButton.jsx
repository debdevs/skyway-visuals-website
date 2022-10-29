import React from 'react';
import styles from './MainThemeButton.module.css';
const MainThemeButton = () => {
  return (
    <button className={styles.main_button}>
      <div className={styles.button_background} />
      <h1 className={styles.button_text}>Explore</h1>
    </button>
  );
};

export default MainThemeButton;
