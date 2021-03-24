import React, { useState } from 'react'
import { Filter } from '../Filter'
import { Movie } from './Movie'

const movies = [
  {
    name: "Batman"
  },
  {
    name: "Superman"
  },
  {
    name: "Spiderman"
  },
  {
    name: "Ironman"
  }
]

export function MoviesList() {
  const [filter, setFilter] = useState();
  return (
    <div>
      <Filter filter={filter} setFilter={setFilter}/>
      <ul>
        { movies.filter((movie) => {
          return movie.name.toLowerCase().includes(filter.toLowerCase())
        }).map( (movie) => {
          return(
            <Movie key={movie.name} movie={movie}/>
          )
        }) }
      </ul>
    </div>
  )
}
