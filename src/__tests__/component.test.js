import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import './setupTest'

import {act} from 'react-dom/test-utils'
import Component from '../Component'

test('tests with msw are working', async () => {
  render(<Component />)
  await act(async () => {
    await userEvent.click(screen.getByText(/click me/i))
  })
  await screen.findByText(/clicked/i)
})
