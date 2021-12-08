import React from 'react';
import '../styles/globals.css';
import PropTypes from 'prop-types';

const MyApp = function ({ Component, pageProps }) {
  return <Component {...pageProps} />;
};

MyApp.propTypes = {
  Component: PropTypes.array.isRequired,
  pageProps: PropTypes.array.isRequired,
};

export default MyApp;
