import "../styles/globals.css";
import Layout from "../components/layout";
// import loadable from 'react-loadable';
import dynamic from 'next/dynamic'
const ToastContainerWrapper = dynamic(() => import('../components/ToastContainerWrapper'))

import { Provider } from "react-redux";
import store from "../redux/store";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <Layout>
        <ToastContainerWrapper />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </div>
  );
}

export default MyApp;
