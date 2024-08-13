import React from 'react';
import Searchbar from './Searchbar';  

const NewsHeader = () => {
  return (
    <header className="text-black ">
      <div className="container flex justify-between items-center flex-wrap max-sm:gap-4  ">
        <h1 className="text-2xl font-bold">Latest News</h1>

        <Searchbar/>
      </div>
    </header>
  );
};

export default NewsHeader;
