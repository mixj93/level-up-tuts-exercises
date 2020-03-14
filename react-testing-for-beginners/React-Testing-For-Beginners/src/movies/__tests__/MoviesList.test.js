import React from 'react'
import { render, cleanup, waitForElement } from 'react-testing-library'
import { MemoryRouter } from 'react-router-dom'
import MoviesList from '../MoviesList'

global.fetch = require('jest-fetch-mock')

afterEach(() => {
  cleanup()
  console.error.mockClear()
})

console.error = jest.fn()

const movies = [{ id: '001', title: 'Fake Movie' }]

test('<MovieDetail />', async () => {
  fetch.mockResponseOnce(JSON.stringify({ results: movies }))
  const { getByTestId, queryByTestId, getAllByTestId } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  )

  expect(getByTestId('loading')).toBeTruthy()
  await waitForElement(() => getByTestId('movie-link'))
  expect(queryByTestId('loading')).toBeFalsy()
  expect(getByTestId('movie-link').getAttribute('href')).toBe(
    `/${movies[0].id}`
  )
  expect(getAllByTestId('movie-link').length).toBe(movies.length)
})
