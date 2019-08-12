import React from 'react'
import Enzyme , { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import { findByTestAttr } from '../test/testUtils'
import Congrats from './Congrats'

Enzyme.configure({adapter: new EnzymeAdapter()})

const setup = (props = {}) => shallow(<Congrats {...props}/>)

it('renders without crashing', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.length).toBe(1)
})

it('renders no text when `success` if false', () => {
  const wrapper = setup({success: false})
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(wrapper.text()).toBe('')
})

it('renders renders non empty congrats message when `success` is true', () => {
  const wrapper = setup({success: true})
  const message = findByTestAttr(wrapper, 'component-message')
  expect(message.text().length).not.toBe(0)
})
