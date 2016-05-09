import React from 'react';

class QuestionSummary extends React.Component {
constructor(props) {
      super(props);
      document.body.style.backgroundColor = "black";
    }

  render() {
    var imgStyle = {
      height: '150px',
      width: '150px',
      padding: '10px'
    };
    const positiveAnswers = this.props.questionList.filter((question) => {
        return (question.usersAnswer === 'yes')})
    const negativeAnswers = this.props.questionList.filter((question) => {
        return (question.usersAnswer === 'no')})

    return (
      <div className="row">
        <div className="col-xs-1"></div>
        <div className="col-xs-5">
          <div className="row text-center"><img src="images/yes.png" alt="smiley" style={imgStyle} /></div>
          <div className={positiveAnswers.length > 0 ? 'text-center console' : null} >
          {
            positiveAnswers.map((question) => {
                return <div className="row">{question.id}. {question.questionText}</div>
            })
          }
          </div>
        </div>
        <div className="col-xs-5">
          <div className="row text-center"><img src="images/no.png" alt="smiley" style={imgStyle}/></div>
            <div className={negativeAnswers.length > 0 ? 'text-center console' : null} >
              {
                negativeAnswers.map((question) => {
                    return <div className="row">{question.id}. {question.questionText}</div>
                })
              }
            </div>
        </div>
        <div className="col-xs-1"></div>
      </div>
    );
  }
}
export default QuestionSummary
