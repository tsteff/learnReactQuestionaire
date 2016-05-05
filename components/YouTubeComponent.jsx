import React from 'react';
import ReactPlayer from 'react-player'

class YouTubeComponent extends React.Component {
  render() {
    var question = this.props.question;
    var youTubeUrl = question.yesYouTubeUrl;
    if (question.usersAnswer === 'no') {
      youTubeUrl = question.noYouTubeUrl;
    }
    return (
      <div className="row">
        <ReactPlayer
              url={youTubeUrl}
              playing={true}
              height={$(window).height()}
              width={$(window).width()}
              onEnded={this.props.onVideoEnded}
            />
      </div>
    )
  }
}
export default YouTubeComponent
