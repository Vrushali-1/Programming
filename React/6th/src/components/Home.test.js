import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from "./Home";

configure({ adapter: new Adapter() });

test('Home component renders the text of the h1 tag', () => {

  const wrapper = mount(
    <Home />
  );
  const h1 = wrapper.find('.h1');
  expect(h1.text()).toBe('To Home Page');

});
