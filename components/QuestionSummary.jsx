import React from 'react';
import QuestionButtons from './QuestionButtons';

class Question extends React.Component {
  render() {
    return (
      <div>
          {this.props.questionText}?
          <div className="">
            <button type="button" className="btn btn-success" onClick={this.props.onNextQuestion}>Yes</button>
            <button type="button" className="btn btn-danger">No</button>
          </div>
      </div>

    );
  }
}
export default Question;
