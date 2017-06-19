

import React from 'react';
import { shallow } from 'enzyme';
import WeeklyDialog from './';

it('Test example', () => {
  const wrapper = shallow(<WeeklyDialog />);
  expect(wrapper.is('p')).toBeTruthy();
});
