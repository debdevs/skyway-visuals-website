import React from 'react';
import styles from './ProductBoxArray.module.css';
import MinimalProductBox from '../../molecules/MinimalProductBox/MinimalProductBox';
const ProductBoxArray = () => {
  return (
    <div className={styles.product_box_array}>
      <MinimalProductBox />
      <MinimalProductBox />
      <MinimalProductBox />
      <MinimalProductBox />
      <MinimalProductBox />
      <MinimalProductBox />
      <MinimalProductBox />
    </div>
  );
};

export default ProductBoxArray;
