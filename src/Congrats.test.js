import React from 'react';
import Enzyme, { shallow } from 'enzyme';
// Adapter that still doesn't exist with React 17
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { findByTestAttr } from '../test/testUtils'

import Congrats from './Congrats';

Enzyme.configure({ adapter: new Adapter() });

const setup = (props={}) => {
  return shallow(<Congrats {...props} />);
}

test('Renders without errors', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('Renders no text when success prop is false', () => {
  const wrapper = setup({success: false});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe("")
});

test('renders non-empty congrats message when success prop is true', () => { 
const wrapper = setup({success: true});
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe('')
});