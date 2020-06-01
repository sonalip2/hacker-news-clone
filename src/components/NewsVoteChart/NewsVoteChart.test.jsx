import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import NewsVoteChart from './index';

const initialState = {
  news: {
    newsDetails: {
      13857086: {
        hide: false,
        vote: 4,
      },
      22326339: {
        vote: 1,
      },
      790800: {
        hide: false,
        vote: 14,
      },
      4615854: {
        vote: 40,
      },
      607271: {
        hide: false,
        vote: 78,
      },
      1998376: {
        hide: false,
        vote: 32,
      },
    },
  },
};
const mockStore = configureStore();

describe('NewsVoteChart component', () => {
  it('Should render without crashing', () => {
    const store = mockStore(initialState);
    mount(
      <Provider store={store}>
        <NewsVoteChart />
      </Provider>,
    );
  });
});
