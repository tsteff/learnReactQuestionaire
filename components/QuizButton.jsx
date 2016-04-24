import React from 'react';

class QuizButton extends React.Component {
  render() {
    return (
            <button type="button" className="btn btn-lg btn-primary" onClick={this.props.onSelectQuiz}>{this.props.buttonText}</button>
    );
  }
}
export default QuizButton;
