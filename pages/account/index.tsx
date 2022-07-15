import Head from 'next/head';
import React from 'react';
import NavigationBottom from '../../components/NavigationBottom';
import styles from './__index.module.scss';

const Account = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Account</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.container}>
        <div className={styles.body}>
          <div className={styles.content}>
            <h6>Setting</h6>
            <div className={styles.list_option}>
              <div className={styles.option}>
                <div className={styles.icon}>
                  <i className="fa-solid fa-heart"></i>
                </div>
                <div className={styles.content}>
                  <span className={styles.name}>Personalie</span>
                  <span className={styles.des}>Customize your infomation</span>
                </div>
              </div>
              <div className={styles.option}>
                <div className={styles.icon}>
                  <i className="fa-solid fa-heart"></i>
                </div>
                <div className={styles.content}>
                  <span className={styles.name}>Change password</span>
                  <span className={styles.des}>
                    Manage your privacy account
                  </span>
                </div>
              </div>
              <div className={styles.option}>
                <div className={styles.icon}>
                  <i className="fa-solid fa-heart"></i>
                </div>
                <div className={styles.content}>
                  <span className={styles.name}>Audio</span>
                  <span className={styles.des}>
                    Change the sound setting and adjust the equalizer control
                  </span>
                </div>
              </div>
              <div className={styles.option}>
                <div className={styles.icon}>
                  <i className="fa-solid fa-heart"></i>
                </div>
                <div className={styles.content}>
                  <span className={styles.name}>About</span>
                  <span className={styles.des}>Team, social links</span>
                </div>
              </div>
            </div>
            <div className={styles.logout}>
              <button>Log out</button>
            </div>
          </div>
          <div className={styles.navigation}>
            <NavigationBottom />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Account;
