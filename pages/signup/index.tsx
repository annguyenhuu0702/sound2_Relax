/* eslint-disable react/no-unescaped-entities */
import { Button, Checkbox, Form, Input } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../redux/slice/authSlice';
import globalStyles from '../../styles/globalStyle.module.scss';
import styles from './__index.module.scss';

const Signup: NextPage = () => {
  const [checked, setChecked] = useState<boolean>(true);
  const dispatch = useDispatch();
  const router = useRouter();
  const onChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };

  const onFinish = (values: any) => {
    console.log('helo:', values);
    dispatch(
      authActions.register({
        ...values,
      })
    );
    router.push('/signin');
  };

  return (
    <>
      <Head>
        <title>Sign up</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.groupInput}>
            <div className={styles.header}>
              <h2>Sign in</h2>
            </div>
            <div className={styles.inputFiled}>
              <span className={styles.title}>Let's Get Started!</span>
              <Form onFinish={onFinish}>
                <Form.Item
                  name="username"
                  className={globalStyles.inputPrimary}
                  rules={[
                    {
                      required: true,
                      type: 'email',
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
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input
                    type="password"
                    className={globalStyles.filed}
                    placeholder="Password"
                    prefix={<i className="fa-regular fa-eye"></i>}
                    bordered={false}
                  />
                </Form.Item>
                <Form.Item
                  name="confirmpass"
                  className={globalStyles.inputPrimary}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your confirm password!',
                    },
                  ]}
                >
                  <Input
                    type="password"
                    className={globalStyles.filed}
                    placeholder="Confirm Password"
                    prefix={<i className="fa-regular fa-eye"></i>}
                    bordered={false}
                  />
                </Form.Item>
                <span className={styles.helperText}>At least 8 characters</span>
                <div className={styles.check}>
                  <Checkbox onChange={onChange} checked={checked}>
                    By Signing up, you agree to the <b> Terms of Service </b>
                    and
                    <b> Privacy Policy </b>
                  </Checkbox>
                </div>
                <div className={styles.action}>
                  <Form.Item className={`${globalStyles.btnPrimary}`}>
                    <Button
                      disabled={checked ? false : true}
                      type="primary"
                      htmlType="submit"
                      className={globalStyles.btn}
                    >
                      SIGN UP
                    </Button>
                  </Form.Item>
                  <div className={styles.question}>
                    <span>Already have an account?</span>
                    <Link href="/signin">
                      <a>Sign In</a>
                    </Link>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;
