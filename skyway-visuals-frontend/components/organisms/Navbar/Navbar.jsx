import React from 'react';
import Image from 'next/future/image';
import styles from './Navbar.module.css';
import NavbarButton from '../../atoms/NavbarButton/NavbarButton';
import ThemeToggleButton from '../../atoms/ThemeToggleButton/ThemeToggleButton';
const Navbar = () => {
  return (
    <div className={styles.navbar_parent}>
      <div className={styles.navbar_content}>
        <left-items>
          <Image
            src={require('../../../public/logo.png')}
            className={styles.navbar_logo_image}
            alt="Logo"
            layout="raw"
          />
        </left-items>
        <ThemeToggleButton />
        <right-items>
          <NavbarButton />
          <NavbarButton />
          <NavbarButton />
          <NavbarButton />
        </right-items>
      </div>
    </div>
  );
};

export default Navbar;
