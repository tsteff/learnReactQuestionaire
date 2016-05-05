import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
    document.body.style.backgroundColor = "black";
  }
  render() {
    return (
      <div>
        <h2>
          {this.props.questionText}?
        </h2>
      </div>
    );
  }
  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }
}
export default Question;
