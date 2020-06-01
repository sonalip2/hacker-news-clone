import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import NewsItem from './index';

const mockStore = configureStore();

const props = {
  created_at: '2017-03-13T12:18:31.000Z',
  title: 'Stories that Hacker News removes from the front page',
  url: 'http://sangaline.com/post/the-stories-that-hacker-news-removes-from-the-front-page/',
  author: 'foob',
  num_comments: 313,
  objectID: '13857086',
};
const initialState = {
  news: {
    newsDetails: {},
  },
};

describe('NewsItem component', () => {
  it('Should render without crashing', () => {
    const store = mockStore(initialState);
    mount(
      <Provider store={store}>
        <NewsItem {...props} />
      </Provider>,
    );
  });
  it('Should call SET_VOTE action on upvote button click', () => {
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <NewsItem {...props} />
      </Provider>,
    );
    wrapper.find('.upvote').simulate('click');
    expect(store.getActions()).toEqual([{ type: 'SET_VOTE', payload: '13857086' }]);
  });
  it('Should call SET_HIDE action on hide button click', () => {
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <NewsItem {...props} />
      </Provider>,
    );
    wrapper.find('.hideBtn').simulate('click');
    expect(store.getActions()).toEqual([{ type: 'SET_HIDE', payload: '13857086' }]);
  });
  it('Should return null component if hide is true', () => {
    const store = mockStore({
      news: {
        newsDetails: {
          13857086: {
            hide: true,
          },
        },
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <NewsItem {...props} />
      </Provider>,
    );
    expect(wrapper.find('tr').exists()).toBe(false);
  });
});
