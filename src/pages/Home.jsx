import React from 'react';
import Search from "../component/search/Search"
import Banner from '../component/banner/Banner';
import { ContextProvider } from '../contexts/contextProvider';
import All from '../containers/allmovies/All';


const Home = () => {
  return (
    <div>
        <ContextProvider>
            <Banner></Banner>
            <Search></Search>
            <All></All>
        </ContextProvider>
    </div>
  )
}

export default Home
