import React, { Component } from 'react'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'
import { Poster } from './Movie'

const API_KEY = '887cffaee5e3334740dd2d4520389025'
const POSTER_PATH = 'https://image.tmdb.org/t/p/w154'
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280'

export default class MovieDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {}
    }
  }

  async componentDidMount() {
    const { params } = this.props.match
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}`)
      const movie = await res.json()
      this.setState({ movie })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { movie } = this.state
    const { id, title, release_date, overview, poster_path, backdrop_path } = movie
    return (
      <>
        {title && (
          <MovieWrapper backdrop={`${BACKDROP_PATH}${backdrop_path}`}>
            <MovieInfo>
              <Overdrive id={id}>
                <Poster src={`${POSTER_PATH}${poster_path}`} alt={title} />
              </Overdrive>
              <div>
                <h1>{title}</h1>
                <h3>{release_date}</h3>
                <p>{overview}</p>
              </div>
            </MovieInfo>
          </MovieWrapper>
        )}
      </>
    )
  }
}

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`

const MovieInfo = styled.div`
  background-color: #fff;
  text-align: left;
  padding: 2rem 10%;
  display: flex;

  > div {
    margin-left: 20px;
  }

  img {
    position: relative;
    top: -5rem;
  }
`
