import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Contacts from './Contacts';

configure({ adapter: new Adapter() });

test('Contact component renders the text of the h1 tag', () => {

  const wrapper = mount(
    <Contacts />
  );
  const h1 = wrapper.find('.h1');
  expect(h1.text()).toBe('To Contact Page');

});

