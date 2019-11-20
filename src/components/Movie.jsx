import React, { Component } from 'react'

const Movie = props => {
  return (
    <>
      <li className="movie-box">
        <span>{props.title}</span>
        <span>
          <img
            src={
              'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' +
              props.poster_path
            }
          />
        </span>
        <span>{props.overview}</span>
      </li>
    </>
  )
}

export default Movie
