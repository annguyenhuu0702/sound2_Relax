/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from './__index.module.scss';
import globalStyles from '../../styles/globalStyle.module.scss';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { authActions } from '../../redux/slice/authSlice';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Signin: NextPage = () => {
  const [typePassword, setTypePassword] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const onFinish = (values: any) => {
    console.log(values);
    dispatch(
      authActions.login({
        ...values,
      })
    );
    router.push('/listsongs');
  };
  return (
    <>
      <Head>
        <title>Sign in</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.groupInput}>
            <div className={styles.header}>
              <h5>Welcome,</h5>
              <span>Sound to your soul</span>
            </div>
            <div className={styles.inputFiled}>
              <Form onFinish={onFinish}>
                <Form.Item
                  name="username"
                  className={globalStyles.inputPrimary}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    className={globalStyles.filed}
                    placeholder="Email"
                    prefix={<i className="fa-regular fa-envelope"></i>}
                    bordered={false}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  className={globalStyles.inputPrimary}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    type={typePassword ? 'text' : 'password'}
                    className={globalStyles.filed}
                    placeholder="Password"
                    prefix={
                      <i
                        className="fa-regular fa-eye"
                        onClick={() => {
                          setTypePassword(!typePassword);
                        }}
                      ></i>
                    }
                    bordered={false}
                  />
                </Form.Item>
                <Link href="/forgotpassword">
                  <a className={styles.helperText}>Forgot password</a>
                </Link>
                <div className={styles.action}>
                  <Form.Item className={`${globalStyles.btnPrimary}`}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className={globalStyles.btn}
                    >
                      LOGIN
                    </Button>
                  </Form.Item>
                  <div className={styles.question}>
                    <span>Havent's an account?</span>
                    <Link href="/signup">
                      <a>Sign Up</a>
                    </Link>
                  </div>
                </div>
              </Form>
            </div>
          </div>
          <div className={styles.optionGroup}>
            <span className={styles.text}>Other sign in options</span>
            <div className={styles.icon}>
              <i className="fa-brands fa-google google"></i>
              <i className="fa-brands fa-facebook facebook"></i>
              <i className="fa-brands fa-apple apple"></i>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signin;
