import React from 'react';
import QuestionButtons from './QuestionButtons';

class Question extends React.Component {
  render() {
    return (
      <div>
          {this.props.questionText}?
      </div>

    );
  }
}
export default Question;
