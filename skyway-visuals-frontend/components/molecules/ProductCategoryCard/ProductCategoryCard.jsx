import React from 'react';
import styles from './ProductCategoryCard.module.css';
import ImageDisplayBase from '../../atoms/ImageDisplayBase/ImageDisplayBase';
const ProductCategoryCard = () => {
  return (
    <div className={styles.category_card_parent}>
      <div className={styles.category_card_images}>
        <ImageDisplayBase />
        <div className={styles.category_card_front_image}>
          <ImageDisplayBase />
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryCard;
