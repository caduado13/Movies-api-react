import React, {useState} from "react";
import "./search.css"
import {BsSearch} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Search(){
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSub = (e) => {
        e.preventDefault()
        if(!search) return
        navigate(`/search?q=${search}`)
    }

    return (<div className="mdb_search">
        <form action="" className="mdb_search-container">                
            <input type="text"
                placeholder="Search your movie here..." 
                onChange={(e) => setSearch(e.target.value)} 
                value={search}
            />
            <button onClick={handleSub}>
                <BsSearch size={23} color = "rgba(0,0,0,0.6)"/>
            </button>
        </form>
    </div>)
}