import Head from 'next/head';
import React from 'react';
import styles from './__index.module.scss';
import { Progress } from 'antd';

const MusicPlayer = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Music player</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.container}>
        <div className={styles.body}>
          <div className={styles.song_cover}></div>
          <div className={styles.song_name}>
            <div className={styles.name}>
              <h5>Yummy</h5>
              <span>Justin Bieber</span>
            </div>
            <div className={styles.icon_like}>
              <i className="fa-regular fa-heart"></i>
            </div>
          </div>
          <div className={styles.duration_bar}>
            <Progress
              percent={50}
              showInfo={false}
              className="custom-progress"
            />
            <div className={styles.time}>
              <span>0:00</span>
              <span>05:49</span>
            </div>
          </div>
          <div className={styles.play_control}>
            <div className={styles.control}>
              <i
                className="fa-solid fa-sliders"
                style={{ color: 'rgba(255, 255, 255, 0.38)' }}
              ></i>
              <i className="fa-solid fa-backward"></i>
              <i className="fa-solid fa-grip-lines-vertical"></i>
              <i className="fa-solid fa-forward"></i>
              <i
                className="fa-solid fa-icons"
                style={{ color: 'rgba(255, 255, 255, 0.38)' }}
              ></i>
            </div>
            <div className={styles.volume_bar}></div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default MusicPlayer;
