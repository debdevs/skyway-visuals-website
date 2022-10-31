import React from 'react';
import styles from './Footer.module.css';
import FooterColumn from '../../molecules/FooterColumn/FooterColumn';
import Image from 'next/future/image';
import logo_image from '../../../public/images/desaturated_logo.png';
const Footer = () => {
  return (
    <div className={styles.footer_parent}>
      <div className={styles.footer_content_parent}>
        <div className={styles.left_items}>
          <Image
            className={styles.logo}
            src={logo_image}
            alt=""
            objectFit="cover"
            quality={100}
          />
          <p className={styles.left_description}>
            Your destination for Blender VIdeo templates, motion graphics & more
          </p>
        </div>

        <div className={styles.right_items}>
          <FooterColumn />
          <FooterColumn />
          <FooterColumn />
        </div>
      </div>
      <div className={styles.footer_line} />
    </div>
  );
};

export default Footer;
