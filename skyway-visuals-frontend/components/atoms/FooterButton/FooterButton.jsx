import React from 'react';
import styles from './FooterButton.module.css';
const FooterButton = ({ button_text }) => {
  return <button className={styles.footer_button}>{button_text}</button>;
};

export default FooterButton;
