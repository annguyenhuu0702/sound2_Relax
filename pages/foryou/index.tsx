import { Select } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import NavigationBottom from '../../components/NavigationBottom';
import styles from './__index.module.scss';

const Foryou = () => {
  const [isTab, setIsTab] = useState<boolean>(true);

  const sortby = ['Recently played', '1', '2', '3'];
  const [initSort, setInitSort] = useState('Recently played');

  const handleSort = (value: any) => {
    setInitSort(value);
  };

  return (
    <React.Fragment>
      <Head>
        <title>For you</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.container}>
        <div className={styles.body}>
          <div className={styles.header}>
            <h4>For you</h4>
            <span>All you favorite songs</span>
          </div>
          <div className={styles.tab_control}>
            <div
              className={
                isTab
                  ? `${styles.tabitem} ${styles.active}`
                  : `${styles.tabitem}`
              }
            >
              <span
                onClick={() => {
                  setIsTab(true);
                }}
              >
                Song
              </span>
            </div>
            <div
              className={
                !isTab
                  ? `${styles.tabitem} ${styles.active}`
                  : `${styles.tabitem}`
              }
            >
              <span
                onClick={() => {
                  setIsTab(false);
                }}
              >
                Playlist
              </span>
            </div>
          </div>
          {isTab && (
            <div className={styles.list_song}>
              <div className={styles.qtt_sort}>
                <span className={styles.qtt}>20 songs</span>
                <div className={styles.sort}>
                  <Select
                    className={styles.option}
                    value={initSort}
                    onChange={handleSort}
                  >
                    {sortby.map((item) => (
                      <Select.Option key={item}>{item}</Select.Option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className={styles.wrap_list}>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      loader={() => {
                        return 'https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
                      }}
                      src="https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                      alt=""
                      width={120}
                      height={120}
                      unoptimized
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      <span className={styles.title}>Forrest sound</span>
                      <span className={styles.des}>
                        Greyhound divisively hello
                      </span>
                    </div>
                    <div className={styles.duration}>
                      <span>30 min</span>
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      loader={() => {
                        return 'https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
                      }}
                      src="https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                      alt=""
                      width={120}
                      height={120}
                      unoptimized
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      <span className={styles.title}>Forrest sound</span>
                      <span className={styles.des}>
                        Greyhound divisively hello
                      </span>
                    </div>
                    <div className={styles.duration}>
                      <span>30 min</span>
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      loader={() => {
                        return 'https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
                      }}
                      src="https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                      alt=""
                      width={120}
                      height={120}
                      unoptimized
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      <span className={styles.title}>Forrest sound</span>
                      <span className={styles.des}>
                        Greyhound divisively hello
                      </span>
                    </div>
                    <div className={styles.duration}>
                      <span>30 min</span>
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      loader={() => {
                        return 'https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
                      }}
                      src="https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                      alt=""
                      width={120}
                      height={120}
                      unoptimized
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      <span className={styles.title}>Forrest sound</span>
                      <span className={styles.des}>
                        Greyhound divisively hello
                      </span>
                    </div>
                    <div className={styles.duration}>
                      <span>30 min</span>
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      loader={() => {
                        return 'https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
                      }}
                      src="https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                      alt=""
                      width={120}
                      height={120}
                      unoptimized
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      <span className={styles.title}>Forrest sound</span>
                      <span className={styles.des}>
                        Greyhound divisively hello
                      </span>
                    </div>
                    <div className={styles.duration}>
                      <span>30 min</span>
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      loader={() => {
                        return 'https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
                      }}
                      src="https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                      alt=""
                      width={120}
                      height={120}
                      unoptimized
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      <span className={styles.title}>Forrest sound</span>
                      <span className={styles.des}>
                        Greyhound divisively hello
                      </span>
                    </div>
                    <div className={styles.duration}>
                      <span>30 min</span>
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      loader={() => {
                        return 'https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
                      }}
                      src="https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                      alt=""
                      width={120}
                      height={120}
                      unoptimized
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      <span className={styles.title}>Forrest sound</span>
                      <span className={styles.des}>
                        Greyhound divisively hello
                      </span>
                    </div>
                    <div className={styles.duration}>
                      <span>30 min</span>
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      loader={() => {
                        return 'https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
                      }}
                      src="https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                      alt=""
                      width={120}
                      height={120}
                      unoptimized
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      <span className={styles.title}>Forrest sound</span>
                      <span className={styles.des}>
                        Greyhound divisively hello
                      </span>
                    </div>
                    <div className={styles.duration}>
                      <span>30 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!isTab && (
            <div className={styles.list_song}>
              <div className={styles.qtt_sort}>
                <span className={styles.qtt}>3 playlist</span>
                <div className={styles.sort}>
                  <Select
                    className={styles.option}
                    value={initSort}
                    onChange={handleSort}
                  >
                    {sortby.map((item) => (
                      <Select.Option key={item}>{item}</Select.Option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className={styles.wrap_list}>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      loader={() => {
                        return 'https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
                      }}
                      src="https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                      alt=""
                      width={120}
                      height={120}
                      unoptimized
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      <span className={styles.title}>Forrest sound</span>
                      <span className={styles.des}>
                        Greyhound divisively hello
                      </span>
                    </div>
                    <div className={styles.duration}>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      loader={() => {
                        return 'https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
                      }}
                      src="https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                      alt=""
                      width={120}
                      height={120}
                      unoptimized
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      <span className={styles.title}>Forrest sound</span>
                      <span className={styles.des}>
                        Greyhound divisively hello
                      </span>
                    </div>
                    <div className={styles.duration}>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      loader={() => {
                        return 'https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
                      }}
                      src="https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                      alt=""
                      width={120}
                      height={120}
                      unoptimized
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      <span className={styles.title}>Forrest sound</span>
                      <span className={styles.des}>
                        Greyhound divisively hello
                      </span>
                    </div>
                    <div className={styles.duration}>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      loader={() => {
                        return 'https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
                      }}
                      src="https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                      alt=""
                      width={120}
                      height={120}
                      unoptimized
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      <span className={styles.title}>Forrest sound</span>
                      <span className={styles.des}>
                        Greyhound divisively hello
                      </span>
                    </div>
                    <div className={styles.duration}>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      loader={() => {
                        return 'https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
                      }}
                      src="https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                      alt=""
                      width={120}
                      height={120}
                      unoptimized
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      <span className={styles.title}>Forrest sound</span>
                      <span className={styles.des}>
                        Greyhound divisively hello
                      </span>
                    </div>
                    <div className={styles.duration}>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      loader={() => {
                        return 'https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
                      }}
                      src="https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                      alt=""
                      width={120}
                      height={120}
                      unoptimized
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      <span className={styles.title}>Forrest sound</span>
                      <span className={styles.des}>
                        Greyhound divisively hello
                      </span>
                    </div>
                    <div className={styles.duration}>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      loader={() => {
                        return 'https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
                      }}
                      src="https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                      alt=""
                      width={120}
                      height={120}
                      unoptimized
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      <span className={styles.title}>Forrest sound</span>
                      <span className={styles.des}>
                        Greyhound divisively hello
                      </span>
                    </div>
                    <div className={styles.duration}>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      loader={() => {
                        return 'https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
                      }}
                      src="https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                      alt=""
                      width={120}
                      height={120}
                      unoptimized
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      <span className={styles.title}>Forrest sound</span>
                      <span className={styles.des}>
                        Greyhound divisively hello
                      </span>
                    </div>
                    <div className={styles.duration}>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.navigation}>
          <NavigationBottom />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Foryou;
