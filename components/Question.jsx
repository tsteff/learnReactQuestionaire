import React from 'react';

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
