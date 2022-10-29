import React from 'react';
import styles from './HomeSubheading.module.css';
import SectionTextInfoCenter from '../../molecules/SectionTextInfoCenter/SectionTextInfoCenter';

import MinimalProductBox from '../../molecules/MinimalProductBox/MinimalProductBox';
const HomeSubheading = () => {
  return (
    <div className={styles.subheading_parent}>
      <SectionTextInfoCenter />
      <MinimalProductBox />
    </div>
  );
};

export default HomeSubheading;
