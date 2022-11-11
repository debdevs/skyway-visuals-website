import React from 'react';
import styles from './NavbarButton.module.css';
const NavbarButton = ({ click_function }) => {
  return (
    <button onClick={click_function} className={styles.navbar_button}>
      Home
    </button>
  );
};

export default NavbarButton;
