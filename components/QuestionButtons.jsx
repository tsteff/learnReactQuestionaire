import React from 'react';

class QuestionButtons extends React.Component {
   render() {
      return (
        <div className="">
          <button type="button" className="btn btn-success">Yes</button>
          <button type="button" className="btn btn-danger">No</button>
        </div>
      );
   }
}

export default QuestionButtons;
