import React from 'react';

class QuestionButton extends React.Component {
  render() {
    var imgStyle = {
      height: '150px',
      width: '150px',
      padding: '10px'
    };
    return (
      <img className="" onClick={this.props.onAnswerQuestion} src={this.props.imageUrl} style={imgStyle} />
    );
  }
}
export default QuestionButton;
