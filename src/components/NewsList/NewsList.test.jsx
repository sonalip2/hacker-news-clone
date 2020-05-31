import React from 'react';
import { mount } from 'enzyme';
import NewsList from './index';

describe('NewsList component', () => {
  it('Should render without crashing', () => {
    mount(<NewsList />);
  });
});
