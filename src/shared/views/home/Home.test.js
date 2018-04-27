import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';

Enzyme.configure({ adapter: new Adapter() });

it('It renders', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.length).toBe(1);
});
