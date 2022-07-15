import React from 'react';
import styles from './index.module.scss';
const NavigationBottom = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.item}>
        <div className={styles.icon}>
          <i className="fa-regular fa-circle-play"></i>
        </div>
        <span className={styles.title}>Listen music</span>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}>
          <i className="fa-brands fa-spotify"></i>
        </div>
        <span className={styles.title}>Genere</span>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}>
          <i className="fa-regular fa-heart"></i>
        </div>
        <span className={styles.title}>For you</span>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}>
          <i className="fa-regular fa-user"></i>
        </div>
        <span className={styles.title}>Account</span>
      </div>
    </div>
  );
};

export default NavigationBottom;
