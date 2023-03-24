import React, {useEffect, useState} from "react";
import { useStateContext } from "../../contexts/contextProvider";
import "./banner.css"

const imageURL = "https://image.tmdb.org/t/p/w500";

export default function Banner(){
    const {upcomingMovies} = useStateContext()
    const [slide, setSlide] = useState(0)
    
    if(!upcomingMovies || !upcomingMovies.length) return null
    let array = upcomingMovies.slice(0, 3) 
    const getImage = array.map((item) => imageURL + item.backdrop_path);
    const getTitle = array.map((item) =>item.title ? item.title: item.name);
    const getDesc = array.map((item) => item.overview);
    const getRelease = array.map((item) => item.release_date);

    function handleValue(){
        if(slide < getImage.length -1 ){
            setSlide(slide + 1);
        }else if(slide === getImage.length-1){
            setSlide(0)
        }
    }
    
    setTimeout(handleValue, 10000)

    
    

    return(
        <div className="mdb_banner" style={{backgroundImage:` linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${getImage[slide]})`}}>
            <div className="mdb_banner_movie-info">
                <h1>{getTitle[slide]}</h1>
                <p className="desc">{getDesc[slide]}</p>
                <p className="relase">Release Date: {getRelease[slide]}</p>
            </div>
        </div>
    )
}