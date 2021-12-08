import React from 'react';
import '../styles/index.css';
import PropTypes from 'prop-types';

const MyApp = function ({ Component, pageProps }) {
  return <Component {...pageProps} />;
};

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
};

export default MyApp;
