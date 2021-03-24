import React from 'react'

export function Filter ({ setFilter, filter }) {
  return (
    <label>
      Filter:
      <input onChange={(e) => setFilter(e.target.value)} value={filter}/>
    </label>
  )
}
