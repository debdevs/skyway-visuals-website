import React from 'react';
import MainThemeLine from '../../atoms/MainThemeLine/MainThemeLine';
import styles from './SecondarySectionTextInfoCenter.module.css';
const SecondarySectionTextInfoCenter = () => {
  return (
    <div className={styles.secondary_section_text_parent}>
      <div className={styles.top_items}>
        <div className={styles.header_line} />
        <h1 className={styles.secondary_section_text_header}>
          Video Template Freedom
        </h1>
      </div>

      <MainThemeLine />
      <div className={styles.descriptions_parent}>
        <p className={styles.secondary_section_text_first_description}>
          We create media templates with Open-Source software, and the tools to
          create them.
        </p>
        <p className={styles.secondary_section_text_second_description}>
          Welcome to the only source of Professionally Animated
          <span> Blender templates</span> on the web.
        </p>
      </div>
    </div>
  );
};

export default SecondarySectionTextInfoCenter;
