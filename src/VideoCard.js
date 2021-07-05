import React from 'react';

const VideoCard =({video}) =>{
  
  return(
    <div className='bg-gray-300 md:w-96 h-max m-auto my-10 p-5'>
      <div className='grid gap-3'>
        <div>
          <img 
              src={`${video.snippet.thumbnails.high.url}`}
              alt='title'
              className=''
              />
        </div>
        <div className='flex flex-col flex-wrap my-1'>
          <a 
            className='text-center text-lg my-1'
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
          >{video.snippet.title}</a>
          <p className='text-sm my-1'>Channel : {video.snippet.channelTitle}</p>
          <p className='text-sm my-1'>Date Posted : {video.snippet.publishTime}</p>
          <p className='text-sm my-1'>Description : {video.snippet.description}</p>
        </div>
      </div>
  </div>
  )
}

export default VideoCard;