import React from 'react';
import styles from './MinimalProductBox.module.css';
import Image from 'next/future/image';
import product_image from '../../../public/images/instagram_story.png';
const MinimalProductBox = () => {
  return (
    <div className={styles.minimal_box_parent}>
      <div className={styles.minimal_box_content}>
        <div className={styles.minimal_box_image_parent}>
          <div className={styles.minimal_box_imagefx_container}>
            <div className={styles.minimal_box_image_container}>
              <Image
                className={styles.minimal_box_image}
                src={product_image}
                alt=""
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className={styles.minimal_box_inset_shadow}></div>

            <div className={styles.minimal_box_outline}>
              {' '}
              <div className={styles.minimal_box_shine}></div>
            </div>
          </div>
        </div>
        <h1 className={styles.minimal_box_header}>Instagram Story</h1>
      </div>
    </div>
  );
};

export default MinimalProductBox;
