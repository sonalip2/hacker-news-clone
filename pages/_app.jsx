import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import '../src/styles/global.css';
import store from '../src/redux/store';

const propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

MyApp.propTypes = propTypes;
export default MyApp;
