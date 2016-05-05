import React from 'react';

class QuizButton extends React.Component {
  render() {
    return (
      <div className="row">
        <button type="button" className="btn btn-lg btn-primary btn-block" onClick={this.props.onSelectQuiz}>{this.props.buttonText}</button>
        <br/>
      </div>
    );
  }
}
export default QuizButton;
