import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCjwNhtYjK61j8M094TodQWgoS3C0Ui47k';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos : [],
      selectedVideo : null,
      term : 'guitar'
    };

    this.onVideoSearch('guitar');
    this.onVideoSearchDebounced = _.debounce((term) => {this.onVideoSearch(term);}, 300);
  }

  onVideoSelect(video) {
    this.setState({
      selectedVideo : video
    });
  }

  onVideoSearch(term) {
    YTSearch({key:API_KEY, term: term}, (videos) => {
      this.setState({
        videos : videos,
        selectedVideo : videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onVideoSearch={term => this.onVideoSearchDebounced(term)} />

        <VideoDetail
          video={this.state.selectedVideo} />

        <VideoList
          videos={this.state.videos}
          onVideoSelect={video => this.onVideoSelect(video)} />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
