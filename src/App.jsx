import React from 'react';
import './App.css';
import Sidebar from './component/sidebar/Sidebar.jsx';
import Home from './pages/Home';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import MoviePage from './pages/MoviePage'; 
import SearchResult from './component/result/SearchResult';




function App() {
  return (
    <div>
        <BrowserRouter>
          <Sidebar></Sidebar>
            <Routes>
              <Route path="movie/:id" element = {<MoviePage/>}/>
              <Route path="/" element = {<Home/>}/>
              <Route path="/search" element = {<SearchResult/>}/>
            </Routes>      
        </BrowserRouter>
    </div>
  )
}

export default App
