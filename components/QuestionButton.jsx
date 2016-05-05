import React from 'react';

class QuestionButton extends React.Component {
  render() {
    var defaultClasses = "btn smallMargin ";
    return (
            <button type="button" className={defaultClasses + this.props.buttonType} onClick={this.props.onAnswerQuestion}>{this.props.buttonText}</button>
    );
  }
}
export default QuestionButton;
