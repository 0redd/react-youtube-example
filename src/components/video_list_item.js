import React from 'react';

const VideoListItem = (props) => {
  const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;
  return <li className="list-group-item" onClick={() => props.onVideoSelect(video)}>
    <div className='video-list media'>
      <div className='media-left'>
        <div className='media-object'><img src={imageUrl} /></div>
      </div>
      <div className='media-body'>
        <div className='media-heading'>{video.snippet.title}</div>
      </div>
    </div>
  </li>;
}

export default VideoListItem;
