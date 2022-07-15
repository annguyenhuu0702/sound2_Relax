/* eslint-disable react/no-unescaped-entities */
import { Button, Form, Input } from 'antd';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../redux/slice/authSlice';
import globalStyles from '../../styles/globalStyle.module.scss';
import styles from './__index.module.scss';

const FogotPassWord: NextPage = () => {
  const email = useSelector((state: any) => state.auth?.email);
  console.log(email);
  const dispatch = useDispatch();

  const router = useRouter();

  const onFinish = (values: any) => {
    dispatch(
      authActions.forgotPassword({
        ...values,
        os: 'IOS',
        ip: '192.168.1.1',
      })
    );
    // router.push('/otpconfirmation');
  };

  return (
    <>
      <Head>
        <title>Forgot Password</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.groupInput}>
            <div className={styles.header}>
              <h2>Forgot Password</h2>
            </div>
            <div className={styles.inputFiled}>
              <Form onFinish={onFinish} className={styles.form}>
                <div>
                  <Form.Item
                    name="name"
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
                    />
                  </Form.Item>
                  <span className={styles.helperText}>
                    Type your emaill address using sign up
                  </span>
                </div>
                <div className={styles.action}>
                  <Form.Item className={`${globalStyles.btnPrimary}`}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className={globalStyles.btn}
                    >
                      SEND REQUEST
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FogotPassWord;
