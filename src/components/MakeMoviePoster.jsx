import React, { useState, useEffect } from 'react'
import Movie from './'
import Axios from 'axios'

const MakeMoviePoster = () => {
  const [movies, setMovies] = useState([])

  const getMovieData = async () => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=a02ec72f928929771b3511a7ac7d8069'
    )
    setMovies(response.data.results)
  }

  useEffect(() => {
    getMovieData()
  }, [])

  return <div></div>
}

export default MakeMoviePoster
