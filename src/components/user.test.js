import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import User from './user'

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

it('renders user data', async () => {
  const fakeUser = {
    name: 'John',
    age: '32'
  }
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    })
  )

  await act(async () => {
    render(<User id='123' />, container)
  })

  expect(container.querySelector('#name').textContent).toContain(fakeUser.name)

  // remove the mock to ensure tests
  global.fetch.mockRestore()
})
