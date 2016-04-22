import React from 'react';

class QuestionButton extends React.Component {
  render() {
    return (
            <button type="button" className="btn btn-success" onClick={this.props.onAnswerQuestion}>{this.props.buttonText}</button>
    );
  }
}
export default QuestionButton;
