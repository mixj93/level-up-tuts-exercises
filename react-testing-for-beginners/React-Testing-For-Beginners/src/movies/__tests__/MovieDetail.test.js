import React from 'react'
import { render, cleanup, waitForElement } from 'react-testing-library'
import MovieDetail from '../MovieDetail'

global.fetch = require('jest-fetch-mock')

afterEach(() => {
  cleanup()
  console.error.mockClear()
})

console.error = jest.fn()

const match = {
  params: {
    id: '001'
  }
}

const movie = {
  id: '001',
  title: 'Fake Movie'
}

test('<MovieDetail />', async () => {
  fetch.mockResponseOnce(JSON.stringify(movie))
  const { getByTestId } = render(<MovieDetail match={match} />)
  await waitForElement(() => getByTestId('movie-title'))

  expect(getByTestId('movie-title').textContent).toBe(movie.title)
})
