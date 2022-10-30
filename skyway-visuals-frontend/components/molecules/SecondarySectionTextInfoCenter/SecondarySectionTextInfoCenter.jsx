import React from 'react';
import MainThemeLine from '../../atoms/MainThemeLine/MainThemeLine';
import styles from './SecondarySectionTextInfoCenter.module.css';
const SecondarySectionTextInfoCenter = () => {
  return (
    <div className={styles.secondary_section_text_parent}>
      <div className={styles.top_items}>
        <div className={styles.header_line} />
        <h1 className={styles.secondary_section_text_header}>
          Featured Template Categories
        </h1>
      </div>

      <MainThemeLine />
    </div>
  );
};

export default SecondarySectionTextInfoCenter;
