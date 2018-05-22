import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cal from './Cal';

Enzyme.configure({ adapter: new Adapter() });

it('It renders', () => {
  const wrapper = shallow(<Cal />);
  expect(wrapper.length).toBe(1);
});
