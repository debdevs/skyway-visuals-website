import React from 'react';
import styles from './ThemeToggleButton.module.css';
import { useState, useEffect } from 'react';
const ThemeToggleButton = ({ click_function }) => {
  const [activeTheme, setActiveTheme] = useState('light');
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';
  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);
  return (
    <button
      onClick={() => setActiveTheme(inactiveTheme)}
      className={styles.theme_button}
    >
      Home
    </button>
  );
};

export default ThemeToggleButton;
