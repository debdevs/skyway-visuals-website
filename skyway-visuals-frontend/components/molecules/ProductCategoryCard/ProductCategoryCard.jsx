import React from 'react';
import styles from './ProductCategoryCard.module.css';
import ImageDisplayBase from '../../atoms/ImageDisplayBase/ImageDisplayBase';
const ProductCategoryCard = () => {
  return (
    <div className={styles.category_card_parent}>
      <div className={styles.category_card_content}>
        <div className={styles.category_card_images}>
          <ImageDisplayBase />
          <div className={styles.category_card_front_image}>
            <ImageDisplayBase />
          </div>
        </div>
        <div className={styles.category_card_text_content}>
          <h1 className={styles.category_card_text_header}>Weddings</h1>
          <div className={styles.category_main_theme_line}></div>
          <h2 className={styles.category_card_text_subtext}>
            Amazing templates for your special event
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryCard;
