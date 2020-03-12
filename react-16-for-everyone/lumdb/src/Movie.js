import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Overdrive from 'react-overdrive'

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w154'

const Movie = ({ movie }) => (
  <Link to={`/${movie.id}`}>
    <Overdrive id={movie.id}>
      <Poster src={`${IMAGE_PATH}${movie.poster_path}`} alt={movie.title} />
    </Overdrive>
  </Link>
)

export const Poster = styled.img`
  box-shadow: 0 0 35px #000;
`

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    id: PropTypes.number
  }).isRequired
}

export default Movie
