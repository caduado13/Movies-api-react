import React, {useEffect, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import RollMovies from '../rollMovies/RollMovies';
import Search from '../search/Search';

const apiSearch = `https://api.themoviedb.org/3/search/movie`;
const key = "api_key=0b7cf8a9683ae029f8144e1ee14282a1"

const SearchResult = () => {
    const [searchParams] = useSearchParams()
    const [moviesSearch, setMoviesSearch] = useState([]);
    const query = searchParams.get("q")

    const getSearchedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMoviesSearch(data.results)
    }

    useEffect(()=>{
        const searchWithQueryURL = `${apiSearch}?${key}&query=${query}`
        getSearchedMovies(searchWithQueryURL)
    }, [query])

  return (
    <div>
        <Search></Search>
        <RollMovies movies={moviesSearch} mainH1 = {`Resultados para: ${query}`}></RollMovies>
    </div>
  )
}

export default SearchResult
