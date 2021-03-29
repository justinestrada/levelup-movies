import React, { useState,
  // useRef
  useEffect
} from 'react'
import { Filter } from '../Filter'
import { Movie } from './Movie'

// const API_KEY = '398454c1b939ffc50f95cde5a263ee1f'; // TODO move API KEY to .env file
const CONFIG_URL = 'https://api.themoviedb.org/3/configuration?api_key=' + process.env.REACT_APP_MOVIE_API;
const MOVIES_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.REACT_APP_MOVIE_API + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

export function MoviesList() {
  const [filter = '', setFilter] = useState();
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState({});
  // const ulRef = useRef(null); // const varName = useRef(initialValue)
  // const ref = useRef(null);
  const getMovies = async () => {
    try {
      const res = await fetch(MOVIES_URL)
      const movies = await res.json()
      // console.log('movies', movies.results)
      setMovies(movies.results)
    } catch (e) {
      console.error(e)
    }
  }
  const getConfig = async () => {
    try {
      const res = await fetch(CONFIG_URL)
      const config = await res.json()
      setConfig(config)
    } catch (e) {

    }
  }
  useEffect(() => {
    console.log('on mount');
    getConfig(config)
    getMovies()
  }, [])
  return (
    <div
      // ref={ulRef}
      >
      {/* <form onSubmit={(e) => {
        e.preventDefault();
        console.log(ref.current.value);
      }}>
        <input ref={ref} />
        <button />
      </form> */}
      <Filter filter={filter} setFilter={setFilter}/>
      <ul className="movies-list">
        { filter ?
          movies.filter((movie) => {
            return movie.title.toLowerCase().includes(filter.toLowerCase())
          }).map( (movie) => {
            return(
              <Movie key={movie.title} config={config} movie={movie}/>
            )
          })
        :
          movies.map( (movie) => {
            return(
              <Movie key={movie.title} config={config} movie={movie}/>
            )
          })
        }
      </ul>
    </div>
  )
}
