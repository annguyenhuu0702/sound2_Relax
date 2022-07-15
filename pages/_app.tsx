import type { AppProps } from 'next/app';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '../styles/style.scss';
import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default wrapper.withRedux(MyApp);
