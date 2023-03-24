import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";



const StateContext = createContext()
const key = "0b7cf8a9683ae029f8144e1ee14282a1"
const url = {
   trending:`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
   popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
   rated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
   upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`
}


export const ContextProvider  = ({children}) =>{
    const [trendingMovies, setTrendingMovies] = useState()
    const [popularMovies, setPopularMovies] = useState()
    const [ratedMovies, setRatedMovies] = useState()
    const [upcomingMovies, setUpcomingMovies] = useState()
    const getTrending = async ()=>{
        try {
            const trending = await axios.get(url.trending);
            const popular = await axios.get(url.popular);
            const rated = await axios.get(url.rated);
            const upcoming = await axios.get(url.upcoming);
            setTrendingMovies(trending.data.results)
            setPopularMovies(popular.data.results)
            setRatedMovies(rated.data.results)
            setUpcomingMovies(upcoming.data.results)
        } catch (error) {
            console.log(error)
        }   
    }

    useEffect(()=>{
        getTrending()
    }, []);


    return(<StateContext.Provider
        value={{
            trendingMovies,
            popularMovies,
            ratedMovies,
            upcomingMovies
        }}    
    >
        {children}
    </StateContext.Provider>)
}

export const useStateContext = () => useContext(StateContext)