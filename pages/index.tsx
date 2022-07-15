import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/home.module.scss';
import globalStyles from '../styles/globalStyle.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sound Relax</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.main}>
        <div className={styles.home}>
          <div className={styles.logo}>
            <div className={styles.image}></div>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>Feel your soul</div>
            <div className={styles.subtitle}>
              Create an account to run wild through our curated experiences.
            </div>
          </div>
          <div className={styles.btnGroup}>
            <Link href="/signin">
              <a className={`${globalStyles.btnPrimary} ${styles.login}`}>
                <button type="button">LOGIN</button>
              </a>
            </Link>
            <div className={`${globalStyles.btnPrimary} ${styles.listenGuest}`}>
              <button type="button">LISTEN AS GUEST</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
