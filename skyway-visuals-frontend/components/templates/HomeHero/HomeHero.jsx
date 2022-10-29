import React from 'react';
import Image from 'next/future/image';
import styles from './HomeHero.module.css';
import home_hero_img from '../../../public/home_hero_image_1.png';
import TextInfoBoxLeft from '../../molecules/TextInfoBoxLeft/TextInfoBoxLeft';

const HomeHero = () => {
  return (
    <div className={styles.home_hero_parent}>
      <Image
        src={require('../../../public/home_hero_image_1.png')}
        className={styles.home_hero_image}
        alt="Picture of templates"
        layout="raw"
      />
      <div className={styles.home_hero_gradient_overlay} />
      <div className={styles.home_hero_content_container}>
        <TextInfoBoxLeft />
      </div>
    </div>
  );
};

export default HomeHero;
