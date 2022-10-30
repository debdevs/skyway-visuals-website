import React from 'react';
import styles from './HomeSecondarySubheading.module.css';
import SecondarySectionTextInfoCenter from '../../molecules/SecondarySectionTextInfoCenter/SecondarySectionTextInfoCenter';
import ProductCategoryCard from '../../molecules/ProductCategoryCard/ProductCategoryCard';
import MinimalProductBox from '../../molecules/MinimalProductBox/MinimalProductBox';
const HomeSecondarySubheading = () => {
  return (
    <div className={styles.secondary_subheading_parent}>
      <SecondarySectionTextInfoCenter />
      <div className={styles.secondary_subheading_cards}>
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
      </div>
    </div>
  );
};

export default HomeSecondarySubheading;
