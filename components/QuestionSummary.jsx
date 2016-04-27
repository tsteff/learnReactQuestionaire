import React from 'react';

class QuestionSummary extends React.Component {
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
            {
              this.props.questionList.map((question) => {
                return (
                <tr>
                  <td>{question.id}</td>
                  <td>{question.questionText}</td>
                  <td>{question.usersAnswer}</td>
                </tr>
              );
              })
            }
        </tbody>
      </table>
    );
  }
}
export default QuestionSummary
