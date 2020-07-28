import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('App component renders the text of the h1 tag', () => {

  const wrapper = mount(
    <App />
  );
  const h1 = wrapper.find('.h1');
  expect(h1.text()).toBe('Hello World!!');

});

