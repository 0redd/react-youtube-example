import React from 'react';
import _ from 'lodash';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = _.map(props.videos, (video) => {
    return (
      <VideoListItem
        key={video.etag}
        video={video}
        onVideoSelect={props.onVideoSelect} />
  );
  });
  return <ul className="col-md-4 list-group">
    {videoItems}
  </ul>;
};

export default VideoList;
