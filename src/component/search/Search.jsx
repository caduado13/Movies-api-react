import React from "react";
import "./search.css"
import {BsSearch} from "react-icons/bs"

export default function Search(){
    return (<div className="mdb_search">
        <div className="mdb_search-container" >
            <input type="text"placeholder="Search your movie here..." />
            <button><BsSearch size={23} color = "rgba(0,0,0,0.6)"/></button>
        </div>
    </div>)
}