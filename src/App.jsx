import React from 'react';
import './App.css';
import Sidebar from './component/sidebar/Sidebar.jsx';
import Search  from './component/search/Search';
import Banner from './component/banner/Banner';
import { ContextProvider } from './contexts/contextProvider';
import All from './containers/allmovies/All';




function App() {
  return (
    <div>
      <ContextProvider>
        <Sidebar></Sidebar> 
        <Banner></Banner>
        <Search></Search>
        <All></All>
      </ContextProvider>
    </div>
  )
}

export default App
