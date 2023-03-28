import React from 'react';
import "./movieContent.css"

const MovieContent = ({title, desc}) => {
  return (
    <div className="movie-content">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default MovieContent
