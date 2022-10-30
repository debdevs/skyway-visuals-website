import React from 'react';
import styles from './ImageDisplayBase.module.css';
import Image from 'next/future/image';
import product_image from '../../../public/images/instagram_story.png';
const ImageDisplayBase = () => {
  return (
    <div className={styles.image_display_base_image_parent}>
      <div className={styles.image_display_base_imagefx_container}>
        <div className={styles.image_display_base_image_container}>
          <Image
            className={styles.image_display_base_image}
            src={product_image}
            alt=""
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className={styles.image_display_base_inset_shadow}></div>

        <div className={styles.image_display_base_outline}>
          {' '}
          <div className={styles.image_display_base_shine}></div>
        </div>
      </div>
    </div>
  );
};

export default ImageDisplayBase;
