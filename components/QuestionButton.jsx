import React from 'react';

class Question extends React.Component {
  render() {
    return (
      <button type="button" className="btn btn-success" onClick={this.props.onAnswerQuestion("Yes")}>{this.props.buttonText}</button>
    );
  }
}
export default Question;
