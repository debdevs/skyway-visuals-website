import React from 'react';
import styles from './HomeAlternateSubheading.module.css';
import AlternateTextInfoBoxLeft from '../../molecules/AlternateTextInfoBoxLeft/AlternateTextInfoBoxLeft';
import ProductBoxArray from '../../organisms/ProductBoxArray/ProductBoxArray';
const HomeAlternateSubheading = ({ rotation }) => {
  return (
    <div className={styles.alternate_subheading_parent}>
      <div className={styles.alternate_subheading_background}>
        <div className={styles.alternate_subheading_rotate}>
          <ProductBoxArray />
        </div>
      </div>
      <div className={styles.alternate_subheading_content}>
        <AlternateTextInfoBoxLeft />
      </div>
    </div>
  );
};

export default HomeAlternateSubheading;
