import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import preloadAll from 'jest-next-dynamic';
import NewsList from './index';
import hits from '../../../__mocks__/hits.json';

const mockStore = configureStore();

describe('NewsList component', () => {
  it('Should render without crashing', async () => {
    await preloadAll();
    const initialState = {
      news: {
        newsDetails: {},
      },
    };
    const store = mockStore(initialState);
    act(() => {
      mount(
        <Provider store={store}>
          <NewsList hits={hits.hits} currentPage={0} totalPage={hits.nbHits} />
        </Provider>,
      );
    });
  });
  it('Should render without crashing when page=1', async () => {
    await preloadAll();
    const initialState = {
      news: {
        newsDetails: {},
      },
    };
    const store = mockStore(initialState);
    act(() => {
      mount(
        <Provider store={store}>
          <NewsList hits={hits.hits} currentPage={1} totalPage={hits.nbHits} />
        </Provider>,
      );
    });
  });
});
