import React from 'react';
import styles from '../../styles/Header.module.css';
import Username from '../molecules/Username';
import Pasword from '../molecules/Pasword';
import Button from '../atoms/Button';

const Audentification = () => {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authentication}>
        <h1>Login System</h1>
        <Username styles={styles} />
        <Pasword styles={styles} />
        <h1></h1>
        <Button label="  ENTER THE APPLICATION  " className="button register-button" />
        <h1></h1>
        <Button label="CLICK HERE FOR REGISTER" className="button register-button" />

      </div>
    </div>
  );
};

export default Audentification;
