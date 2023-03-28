import React from 'react'
import "./details.css"

const Details = ({img, genres, popularity, average, counts}) => {
  return (
    <div className="movie-detail">
      <div className="movie-detail-image">
        <img className="image-detail" src={img} alt="" />
      </div>
      <div className="movie-detail-infos">
        <h2>Info</h2>
        <p><span>Genres:</span> {genres}</p>
        <p><span>Popularity:</span> {popularity}</p>
        <p><span>Vote Average:</span> {average}</p>
        <p><span>Vote counts:</span> {counts}</p>
      </div>
    </div>
  )
}

export default Details
