import {React, useState} from 'react';
import './Search.css'
import VideoCard from './VideoCard';

const Search = () => {
  const [query, setQuery] = useState('');

  const [videos, setVideos] = useState([]);


  const searchVideo = async (e) =>{
    e.preventDefault();
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=AIzaSyDKuMhhfJSuUW9P6_FvYaUFGVV12oKlOuk`
    
    try {
      const res = await fetch(url);
      const data = await res.json();
      setVideos(data.items);
    } catch (err) {
      console.log(err);
    }
  }

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
      <div>
        {videos.filter(video=> video.snippet.description).map(video=> (
          <VideoCard video={video}/>
        ))}
      </div>

    </div>
  );
}

export default Search;