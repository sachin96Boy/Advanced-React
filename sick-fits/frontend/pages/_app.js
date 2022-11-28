/* eslint-disable react/jsx-props-no-spreading */
import propType from 'prop-types';
import Router from 'next/router';
import NProgress from 'nprogress';
import Page from '../components/Page';

import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

MyApp.propTypes = {
  Component: propType.any,
  pageProps: propType.any,
};

export default MyApp;
