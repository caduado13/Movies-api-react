import React, {useRef} from "react";
import "./rollMovies.css";
import Movie from "../movie/Movie";
import {CgChevronRight} from "react-icons/cg";
import {CgChevronLeft} from "react-icons/cg";


const imageURL = "https://image.tmdb.org/t/p/w500";

export default function RollMovies({movies, mainH1}){
    const carousel = useRef(null)

    if(!movies || !movies.length) return null

    function handleRight(e){movies
        e.preventDefault()   
        carousel.current.scrollLeft -= carousel.current.offsetWidth    
    }
    function handleLeft(e){
        e.preventDefault() 
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }
    
    return ( 
        <div className="mdb_roolMovies">
            <h1>{mainH1}</h1>
            <div className="movies" ref={carousel}>
                {!movies ? (<p>carregandp</p>): (movies.map((item) =>(
                    <Movie  
                        title={item.title ? item.title : item.name} 
                        image = {imageURL + item.poster_path} 
                        key ={item.id}
                        rated = {item.vote_average}
                    />
                )))}
 
            </div> 
            <div className="arrow" onClick={handleRight}>
                <p><CgChevronLeft/></p>
            </div>  
            <div className="arrow2" onClick={handleLeft}>
                <p><CgChevronRight/></p>
            </div>  
        </div>
        
    )
}