import {React, useState} from 'react';
import './Search.css'
import Api from './Api';

const Search = () => {
  const [query, setQuery] = useState('');

  const [videos, setVideos] = useState([]);

  const searchVideo = async (e) =>{
    e.preventDefault();
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=${Api.KEY}`
    
    try {
      const res = await fetch(url);
      const data = await res.json();
      setVideos(data.results)
    } catch (err) {
      console.log(err);
    }
  }

  console.log(Api.KEY);
  return (
    <div className='m-auto'>
      <form onSubmit={searchVideo}>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='p-1 hover:border-red-400 focus:outline-none focus:ring-2 focus:border-transparent focus:ring-red-400 border-2 rounded-lg md:w-80'
          placeholder='Looking for a video?'
        >
        </input>
        <button type='submit' className='p-1 hover:bg-red-400 border-2 rounded-lg md:w-20'>
          Search
        </button>

      </form>

    </div>
  );
}

export default Search;