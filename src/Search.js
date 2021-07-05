import React from 'react';
import './Search.css'

const Search =()=>{
  return(
    <div className='m-auto'>
      <form>
        <input 
          className='focus:outline-none focus:ring-2 focus:border-transparent focus:ring-red-400 border-2 rounded-lg md:w-80'
          placeholder='Looking for a video?'
        >
        </input>
        <button type='submit' className='hover:bg-red-400 border-2 rounded-lg md:w-20'>
          Search
        </button>

      </form>

    </div>
  );
}

export default Search;