import React, { useState,
  useEffect
} from 'react'
import { useParams } from 'react-router-dom'

// const API_KEY = '398454c1b939ffc50f95cde5a263ee1f'; // TODO move API KEY to .env file
const BASE_URL = 'https://api.themoviedb.org/3/movie/';

const IMAGE_URL = 'https://image.tmdb.org/t/p/';
const BACKDROP_SIZE = 'original';
const POSTER_SIZE = 'w342';

export function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({})
  const getMovie = async () => {
    try {
      const res = await fetch(BASE_URL + id + '?api_key=' + process.env.REACT_APP_MOVIE_API)
      const newMovie = await res.json()
      console.log('newMovie', newMovie)
      setMovie(newMovie)
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    getMovie()
  }, [id])
  if (!movie.title) {
    return null
  }
  return (
    <div>
      <div>
        <img className="backdrop" src={ IMAGE_URL + BACKDROP_SIZE + movie.backdrop_path } alt={movie.title + ' Backdrop'}/>
      </div>
      <div className="detail-details">
        <img className="detail-poster" src={ IMAGE_URL + POSTER_SIZE + movie.poster_path } alt={movie.title + ' Poster'}/>
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.vote_average}</p>
          <p>{movie.overview}</p>
          {movie.genres &&
            <ul>
              {movie.genres.map((genre) => {
                return (
                  <li key={genre.id}>{genre.name}</li>
                )
              })}
            </ul>
          }
        </div>
      </div>
    </div>
  )
}
