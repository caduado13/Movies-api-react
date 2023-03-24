import React from "react";
import "./movie.css";
import {AiFillStar} from "react-icons/ai"

export default function Movie ({title, image, rated}){
    return (
    <div className="movie">
        <img src={image} alt="" />
        <p>{title}</p>
        <p><span><AiFillStar color="yellow"/>{rated}</span></p>
    </div>
    )
}