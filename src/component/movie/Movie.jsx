import React from "react";
import "./movie.css";
import {AiFillStar} from "react-icons/ai"
import { Link } from "react-router-dom";

export default function Movie ({title, image, rated, id}){
    return (
    
    <div className="movie">
        <img src={image} alt="" style={{pointerEvents: "none"}} />
        <p>{title}</p>
        <p><span><AiFillStar color="yellow"/>{rated}</span></p>
        <Link to = {`/movie/${id}`} className = "ref">
            <button className="details-btn">Detalhes</button>  
        </Link> 
    </div>
    
    )
}