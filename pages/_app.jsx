import React from 'react';
import PropTypes from 'prop-types';
import '../src/styles/global.css';

const propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

MyApp.propTypes = propTypes;
export default MyApp;
