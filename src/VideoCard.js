import React from 'react';
import Iframe from 'react-iframe';

const VideoCard =({video}) =>{
  
  return(
    <div className='bg-gray-300 md:w-min h-max m-auto my-10 p-5'>
      <div className='grid gap-3'>
        <div >
           <Iframe 
              src={`https://www.youtube.com/embed/${video.id.videoId}`} 
              title='Video' 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
              className='mx-auto md:w-96 md:h-72'
            ></Iframe>
        </div>
        <div className='flex flex-col flex-wrap my-1'>
          <p  className='text-center text-lg my-1'>{video.snippet.title}</p>
          <p className='text-sm my-1'>Channel : {video.snippet.channelTitle}</p>
          <p className='text-sm my-1'>Date Posted : {video.snippet.publishTime}</p>
          <p className='text-sm my-1'>Description : {video.snippet.description}</p>
        </div>
      </div>
  </div>
  )
}

export default VideoCard;