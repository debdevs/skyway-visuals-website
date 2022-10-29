import React from 'react';
import Image from 'next/future/image';
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <div className={styles.navbar_parent}>
      <div className={styles.navbar_content}>
        <Image
          src={require('../../../public/logo.png')}
          className={styles.navbar_logo_image}
          alt="Logo"
          layout="raw"
        />
      </div>
    </div>
  );
};

export default Navbar;
