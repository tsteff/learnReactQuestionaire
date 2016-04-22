import React from 'react';
import Question from './Question';
import QuestionButton from './QuestionButton';

class MainApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 0,
      answers: [],
      questions: [
          {
            id: 1,
            question: "Do you like LL",
            answer: "",
            correctAnswer: "yes",
            correctYoutubeUrl: "http://www.google.com",
            incorrectYoutubeUrl: "http://www.yahoo.com"
          },
          {
            id: 2,
            question: "Do you like Tim",
            answer: "",
            correctAnswer: "no",
            correctYoutubeUrl: "http://www.google.com",
            incorrectYoutubeUrl: "http://www.yahoo.com"
          },
          {
            id: 3,
            question: "Do you like Oph",
            answer: "",
            correctAnswer: "yes",
            correctYoutubeUrl: "http://www.google.com",
            incorrectYoutubeUrl: "http://www.yahoo.com"
          }
      ]
    };
  }
  render() {
    if(this.state.currentQuestion < this.state.questions.length) {
      return this.renderQuestion();
    }
    return this.returnSummary();
  }
  renderQuestion() {
    return <div>
            <Question questionText={this.state.questions[this.state.currentQuestion].question} />
            <QuestionButton onAnswerQuestion={this.answerQuestion.bind(this, "yes")} buttonText="Yes" />
            <QuestionButton onAnswerQuestion={this.answerQuestion.bind(this, "no")} buttonText="No" />
          </div>;
  };
  returnSummary() {
    return (
        <ul>
            {this.state.questions.map(function(question, index){
                return <li key={ index }>{question.question + ":" + question.answer + ":" + question.correctAnswer}</li>;
              })}
        </ul>
    )
  };
  answerQuestion(answer) {
    const newQuestions = this.state.questions.map(question => {
      if(question.id === 2) {
        question.answer = answer;
      }

      return question;
    });

    // const newQuestions = this.state.questions.map(question => {
    //   debugger;
    //   if(question === index) {
    //     question.answer = answer;
    //   }
    //
    //   return question;
    // });
    this.setState(
      {
        questions: newQuestions,
        currentQuestion: this.state.currentQuestion + 1
      }
    );
  }
}
export default MainApp;
