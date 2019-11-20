import React, { useState, useEffect } from 'react'
import Movie from './components/Movie'

import axios from 'axios'

const App = () => {
  const [movieDetails, setMovieDetails] = useState([])

  const getMovieData = async () => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=a02ec72f928929771b3511a7ac7d8069'
    )
    setMovieDetails(response.data.results)
  }

  useEffect(() => {
    getMovieData()
  }, [])

  return (
    <>
      <main>
        <section className="made-in-the-80s"></section>
        <ul>
          {movieDetails.map(movie => {
            return (
              <Movie
                key={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                overview={movie.overview}
              />
            )
          })}
        </ul>
      </main>
    </>
  )
}
export default App
