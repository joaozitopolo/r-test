import { shallow } from 'enzyme';
import React from 'react';
import Box from './Box';

test('box', () => {

  let box = shallow(<Box>abc</Box>)

  expect(box.text()).toEqual('abc')

});
