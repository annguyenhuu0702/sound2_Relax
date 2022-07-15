/* eslint-disable react/no-unescaped-entities */
import { Button, Form, Input } from 'antd';
import { NextPage } from 'next';
import Head from 'next/head';
import globalStyles from '../../styles/globalStyle.module.scss';
import styles from './__index.module.scss';

const NewPassword: NextPage = () => {
  const onFinish = (values: any) => {
    console.log('helo:', values);
  };

  return (
    <>
      <Head>
        <title>New Password</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.groupInput}>
            <div className={styles.header}>
              <h2>New Password</h2>
            </div>
            <div className={styles.inputFiled}>
              <span className={styles.title}>Your new password</span>
              <Form onFinish={onFinish} className={styles.form}>
                <div>
                  <Form.Item
                    name="password"
                    className={globalStyles.inputPrimary}
                    rules={[
                      {
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
                </div>
                <div className={styles.action}>
                  <Form.Item className={`${globalStyles.btnPrimary}`}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className={globalStyles.btn}
                    >
                      CONFIRM
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

export default NewPassword;
