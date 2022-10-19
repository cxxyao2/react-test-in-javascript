import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { createRoot } from 'react-dom/client'
import Hello from './hello'

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

it('renders with or without a name', () => {
  act(() => {
    render(<Hello />, container)
  })
  expect(container.textContent).toBe('hello, stranger')

  act(() => {
    render(<Hello name='Jane' />, container)
  })
  expect(container.textContent).toBe('hello, Jane')
})

act(() => {})
