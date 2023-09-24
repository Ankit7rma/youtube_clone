import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info)
    const snippet = info?.snippet;
    const statistics = info?.statistics;
    const channelTitle = snippet?.channelTitle;
    const thumbnails = snippet?.thumbnails;
    const title= snippet?.title;
  
  return (
    <div className='m-2 p-2 w-72 shadow-lg'>
    <img className="rounded-lg" alt='thumbnail' src={thumbnails?.medium.url}/>
    <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
    </ul>
    </div>
  )
}
export const AdVideoCard =({info})=>{
  return(
    <div className='p-1 m-1 border border-red-900'>
      <VideoCard info={info}/>
    </div>

  )
}
export default VideoCard