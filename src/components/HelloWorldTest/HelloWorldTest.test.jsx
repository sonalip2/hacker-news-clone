import React from 'react';
import { mount } from 'enzyme';
import HelloWorldTest from './index';

describe('HelloWorldTest component', () => {
  it('Should render without crashing', () => {
    mount(<HelloWorldTest />);
  });
});
