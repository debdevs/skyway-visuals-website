import React from 'react';
import styles from './AlternateTextInfoBoxLeft.module.css';
import MainThemeButton from '../../atoms/MainThemeButton/MainThemeButton';
import AlternateThemeButton from '../../atoms/AlternateThemeButton/AlternateThemeButton';
const AlternateTextInfoBoxLeft = () => {
  return (
    <div className={styles.alternate_text_box}>
      <div className={styles.alternate_text_box_top_items}>
        <h1 className={styles.alternate_text_box_header}>Multimedia</h1>
        <h2 className={styles.alternate_text_box_subtext}>Excellence</h2>
        <p className={styles.alternate_text_box_description}>
          We create media templates with Open-Source software, and the tools to
          create them.
        </p>
      </div>
      <div className={styles.button_row}>
        <MainThemeButton />
      </div>
    </div>
  );
};

export default AlternateTextInfoBoxLeft;
