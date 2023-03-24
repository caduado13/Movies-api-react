import React from "react";
import "./sidebar.css";
import {BiCameraMovie} from "react-icons/bi"

export default function Sidebar(){
    return(<div className="mdb_sidebar">
        <div className="mdb_sidebar-container">
            <div className="mdb_sidebar_logo">
                <BiCameraMovie size={40}/>
            </div>
            <div className="mdb_sidebar_nav">
                <nav>
                    <p>Trending</p>
                    <p>Top rated</p>
                    <p>Upcomig</p>
                </nav>
            </div>
            <div className="mdb_sidebar_info">
                <p>ENTRAR</p>
            </div>
        </div>
    </div>)
}