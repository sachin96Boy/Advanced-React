/* eslint-disable react/jsx-props-no-spreading */
import propType from 'prop-types';
import Page from '../components/Page';

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
