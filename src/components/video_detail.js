import React from 'react';

const VideoDetail = (props) => {
    if(!props.video) {
      return <div>Loading ... </div>;
    }
    const videoId = props.video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${ videoId }`
    return (
      <div className='video-detail col-md-8'>
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe className='embed-responsive-item' src={videoUrl}></iframe>
        </div>
        <h3>{props.video.snippet.title}</h3>
        <div>{props.video.snippet.description}</div>
      </div>
    );
}

export default VideoDetail;
