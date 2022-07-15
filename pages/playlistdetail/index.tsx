import Head from 'next/head';
import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import NavigationBottom from '../../components/NavigationBottom';
import styles from './__index.module.scss';
import { Progress } from 'antd';

const PlayListDetail = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <Fragment>
      <Head>
        <title>Play list detail</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.container}>
        <div className={styles.body}>
          <div
            className={styles.standard}
            onClick={() => {
              setIsPlaying(!isPlaying);
            }}
          >
            {isPlaying ? (
              <i className="fa-solid fa-grip-lines-vertical"></i>
            ) : (
              <i className="fa-solid fa-play"></i>
            )}
          </div>
          <div className={styles.album_cover}>
            <Image
              loader={() => {
                return 'https://s3-alpha-sig.figma.com/img/9efe/1f63/b5afcfcf4e52302086f4704da79ca0d3?Expires=1658102400&Signature=djlBR4h1Gl7HtzNAp4UtqwY0l55hFvanb5Bh9VxiPO9Q1MbCZyTAE0TXPbO0BVx2QKhEVcm9R2zDjtqVF2GXZZt4Rnr7VPm8wapXg3vGPqdWhX1Zs~JIyADEI5WuhHQfbCH7yFRk92Ut~0q757ZesVZjKXqoFM1iSfIcVp8EqA16Jb4RDeAl0~X4e135-dHgdePrjqbsgd4vCbr-ZeQX6BROr1WUDef2XI~NtrvVVnYEeUm5KWQz0cSsKzXsOXwYrikIowLucqHJL0nn9kyul0E15YcE7iFpA0SObTmZEWVdTKwkyKpP-V~er8Thv3KNQdQccuITAl8euBLfThwVbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
              }}
              src="https://s3-alpha-sig.figma.com/img/9efe/1f63/b5afcfcf4e52302086f4704da79ca0d3?Expires=1658102400&Signature=djlBR4h1Gl7HtzNAp4UtqwY0l55hFvanb5Bh9VxiPO9Q1MbCZyTAE0TXPbO0BVx2QKhEVcm9R2zDjtqVF2GXZZt4Rnr7VPm8wapXg3vGPqdWhX1Zs~JIyADEI5WuhHQfbCH7yFRk92Ut~0q757ZesVZjKXqoFM1iSfIcVp8EqA16Jb4RDeAl0~X4e135-dHgdePrjqbsgd4vCbr-ZeQX6BROr1WUDef2XI~NtrvVVnYEeUm5KWQz0cSsKzXsOXwYrikIowLucqHJL0nn9kyul0E15YcE7iFpA0SObTmZEWVdTKwkyKpP-V~er8Thv3KNQdQccuITAl8euBLfThwVbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
              width={360}
              height={368}
              unoptimized
            />
          </div>
          <div className={styles.album_name}>
            <h4 className={styles.pure_workout}>Pure Workout</h4>
            <span className={styles.loud_music}>Loud Music</span>
          </div>
          <div className={styles.list}>
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
                  <span className={styles.des}>Greyhound divisively</span>
                </div>
                <div className={styles.duration}>
                  <span>2:36</span>
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
                  <span className={styles.des}>Greyhound divisively</span>
                </div>
                <div className={styles.duration}>
                  <span>2:36</span>
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
                  <span className={styles.des}>Greyhound divisively</span>
                </div>
                <div className={styles.duration}>
                  <span>2:36</span>
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
                  <span className={styles.des}>Greyhound divisively</span>
                </div>
                <div className={styles.duration}>
                  <span>2:36</span>
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
                  <span className={styles.des}>Greyhound divisively</span>
                </div>
                <div className={styles.duration}>
                  <span>2:36</span>
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
                  <span className={styles.des}>Greyhound divisively</span>
                </div>
                <div className={styles.duration}>
                  <span>2:36</span>
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
                  <span className={styles.des}>Greyhound divisively</span>
                </div>
                <div className={styles.duration}>
                  <span>2:36</span>
                </div>
              </div>
            </div>
          </div>
          {isPlaying && (
            <div className={styles.mini_player}>
              <div className={styles.item}>
                <div className={styles.image}>
                  <Image
                    loader={() => {
                      return 'https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
                    }}
                    src="https://s3-alpha-sig.figma.com/img/99cc/d462/1755f31ab6c8c5071329beebaaa9c981?Expires=1657497600&Signature=EjCWozHQyVEKRBRodgqtamSA6~gZCxY~4I9JHp~opfM~wb6rEittJQIDeuGy2vn6tCqzBJ3h87APh0pp2HdxWf0GYk-cVzGEbeNc5G6FY32D8~pLsbu6obm9ZW7n7Zyxg7HJZJYhr92ArVrAnCk1273IOU-jkPGros4aI7uDMsFLcIApzofvRzE1mWnCxuprXPunhF2iCLAFRqKfahlsZmGykgh7--rv-MjJ~DaJL35mKdcQXlD86Of-N4wqDYzScoSHbOQhyB49g1uPav0Huvkg7l5NyPTxGbsnKCGQbHLPCzTU6ee6QE9NSONJCkHTENvlS1OI-i1OQS~8jiqCVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt=""
                    width={50}
                    height={50}
                    unoptimized
                  />
                </div>
                <div className={styles.info}>
                  <div className={styles.name}>
                    <Progress
                      percent={100}
                      showInfo={false}
                      className={styles.progressbar}
                    />
                    <span className={styles.title}>Forrest sound</span>
                    <span className={styles.des}>Greyhound divisively</span>
                  </div>
                  <div className={styles.duration}>
                    <span>
                      <i className="fa-solid fa-grip-lines-vertical"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-forward"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className={styles.navigation}>
            <NavigationBottom />
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default PlayListDetail;
