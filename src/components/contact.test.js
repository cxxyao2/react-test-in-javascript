import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Contact from './contact'
import MockMyMapWrapper from './my-map-wrapper'

// mock third party module
jest.mock('./my-map-wrapper', () => {
  return function DummyMapWrapper(props) {
    return <div data-lat='lat'>{props.center.lat}</div>
  }
})

let container = null
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('should render contact information', () => {
  const center = { lat: 11, long: 12 }
  act(() => {
    render(<Contact address='US' center={center} />, container)
  })

  expect(container.querySelector('#address').textContent).toBe('US')
  expect(container.querySelector('[data-lat]').textContent).toBe(
    center.lat.toString()
  )
})
