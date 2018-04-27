//import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from './NotFound';

Enzyme.configure({ adapter: new Adapter() });

// import renderer from 'react-test-renderer';

it('It renders with context', () => {
  const context = { setStatus: jest.fn() };
  expect(NotFound({}, context));
});

it('It renders without context', () => {
  expect(NotFound({}));
});
