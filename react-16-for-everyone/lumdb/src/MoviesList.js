import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Movie from './Movie'

const API_KEY = '887cffaee5e3334740dd2d4520389025'

export default class MoviesList extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
      const movies = await res.json()
      this.setState({ movies: movies.results })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    )
  }
}

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 1rem;
`
