import React from 'react';
import Button from '../atoms/Button';
import styles from '../../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.logo}>Logo</h2>
      <h1>Company Social Events</h1>
      <Button label=" ABOUT US " className="button" />
    </div>
  );
};

export default Header;
