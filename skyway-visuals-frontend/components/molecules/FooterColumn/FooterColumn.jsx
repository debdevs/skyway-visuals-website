import React from 'react';
import styles from './FooterColumn.module.css';
import FooterButton from '../../atoms/FooterButton/FooterButton';

const FooterColumn = () => {
  return (
    <div className={styles.footer_column_parent}>
      <FooterButton button_text={'Discover'} />
      <ul className={styles.footer_column_list}>
        <li>About Us</li>
        <li>Licensing</li>
        <li>User Guide</li>
      </ul>
    </div>
  );
};

export default FooterColumn;
