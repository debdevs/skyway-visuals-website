import React from 'react';
import styles from './TextInfoBoxLeft.module.css';
import MainThemeButton from '../../atoms/MainThemeButton/MainThemeButton';
import AlternateThemeButton from '../../atoms/AlternateThemeButton/AlternateThemeButton';
const TextInfoBoxLeft = () => {
  return (
    <div className={styles.text_box}>
      <h1 className={styles.text_box_header}>Make your passion Move</h1>
      <p className={styles.text_box_description}>
        Using the first and only marketplace of advanced Blender Motion Graphics
        tools
      </p>
      <ul className={styles.text_box_list}>
        <li>Templates •</li>
        <li>Tutorials •</li>
        <li>Tools</li>
      </ul>
      <div className={styles.button_row}>
        <MainThemeButton button_text="Explore" />
        <AlternateThemeButton button_text="Demo" />
      </div>
    </div>
  );
};

export default TextInfoBoxLeft;
