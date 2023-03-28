import React, { useEffect, useState } from 'react'
import "./moviePage.css"
import Details from '../component/movieDetails/Details'
import MovieContent from '../component/movieContent/MovieContent'
import { useParams } from 'react-router-dom'


const URL = "https://api.themoviedb.org/3/movie/"
const key =  "api_key=0b7cf8a9683ae029f8144e1ee14282a1"
const imageURL = "https://image.tmdb.org/t/p/w500";

const MoviePage = () => {
  const {id} = useParams();
  const [moviePage, setMoviePage] = useState(null)

  const getMovie = async(url) =>{
    const res = await fetch(url)
    const data = await res.json()
    setMoviePage(data)
  }

  useEffect(()=>{
    const movieURL = `${URL}${id}?${key}`
    getMovie(movieURL)
    
  }, [])
  console.log(moviePage)
  return (
    <div className="page-container">
        <div className="page-content">
          {moviePage &&  <>          
            <Details 
              img={`${imageURL}${moviePage.poster_path}`}
              genres={
                moviePage.genres.map((item, index) => (
                  
                  <span style={{color: "black"}} key = {index} id = {index}>{ index + 1 === moviePage.genres.length ? `${item.name}.` : `${item.name}, `}</span>
                ))
              }
              popularity = {moviePage.popularity}
              average = {moviePage.vote_average}
              counts = {moviePage.vote_count}
            />
            <MovieContent 
              title={moviePage.title ? moviePage.title : moviePage.name} 
              desc = {moviePage.overview}
            />
          </>
            }
        </div>
    </div>
  )
}

export default MoviePage
