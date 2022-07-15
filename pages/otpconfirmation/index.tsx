/* eslint-disable react/no-unescaped-entities */
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { NextPage } from 'next';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../redux/slice/authSlice';
import styles from './__index.module.scss';

const OTPConfirmation: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const email = useSelector((state: any) => state.auth.email);
  const codeOtp = useSelector((state: any) => state.auth.code);

  const [otp, setOtp] = useState(new Array(6).fill(''));

  const handleChange = (e: any, index: number) => {
    const newArr: any = [...otp];

    newArr[index] = e.target.value;
    setOtp(newArr);
    if (index === newArr.length - 1) {
      console.log(newArr.join(''));

      dispatch(authActions.otpConfirm({ token: newArr.join('') }));
    }
    // if (codeOtp === 1) {
    //   router.push('/newpasssword');
    // }
  };

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <>
      <Head>
        <title>OTP Confimation</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.groupInput}>
            <div className={styles.header}>
              <h2></h2>
            </div>
            <div className={styles.content}>
              <div className={styles.groupTitle}>
                <span className={styles.verifiCode}>Verification Code</span>
                <span className={styles.subtitle}>
                  Please enter the 6 - digit code send to you at
                </span>
                <span className={styles.emailAddress}>{email}</span>
              </div>
              <div className={styles.codenumber}>
                {otp.map((item: any, index: number) => {
                  return (
                    <input
                      className={styles.code}
                      value={otp[index]}
                      key={index}
                      onChange={(e) => {
                        handleChange(e, index);
                      }}
                    />
                  );
                })}
              </div>
              <div className={styles.action}>
                <span className={styles.helper}>
                  Don't receive the code? <b>Resend code</b>
                </span>
                <span className={styles.timecountdown}>89s</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default OTPConfirmation;
