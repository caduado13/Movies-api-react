import React from "react";
import { useStateContext } from "../../contexts/contextProvider";
import RollMovies from "../../component/rollMovies/RollMovies";

export default function All(){
    const {trendingMovies, popularMovies, ratedMovies} = useStateContext()
    return(
        <div>
            <RollMovies movies={trendingMovies} mainH1 = "Trending"></RollMovies>
            <RollMovies movies={popularMovies} mainH1 = "Popular"></RollMovies>
            <RollMovies movies={ratedMovies} mainH1 = "Top rated movies"></RollMovies>
        </div>
    )
}