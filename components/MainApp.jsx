import React from 'react';
import Question from './Question';
import QuestionButton from './QuestionButton';
import ReactPlayer from 'react-player'

class MainApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 0,
      answers: [],
      inTransition: false,
      questions: [
          {
            id: 1,
            question: "Do you like LL",
            answer: "",
            correctYoutubeUrl: "http://www.google.com",
            incorrectYoutubeUrl: "http://www.yahoo.com"
          },
          {
            id: 2,
            question: "Do you like Tim",
            answer: "",
            correctYoutubeUrl: "http://www.google.com",
            incorrectYoutubeUrl: "http://www.yahoo.com"
          },
          {
            id: 3,
            question: "Do you like Oph",
            answer: "",
            correctYoutubeUrl: "http://www.google.com",
            incorrectYoutubeUrl: "http://www.yahoo.com"
          }
      ]
    };
  }
  render() {
    if(this.state.inTransition) {
      return this.showYoutube();
    }
    if(this.state.currentQuestion < this.state.questions.length) {
      return this.renderQuestion();
    }
    return this.returnSummary();
  }
  showYoutube() {
    return <ReactPlayer
          url='https://www.youtube.com/watch?v=RQ0FzwaqLow'
          playing={true}
          height={$(window).height()}
          width={$(window).width()}
          onEnded={() => this.setState({ inTransition: false })}
        />
  };
  renderQuestion() {
    return <div>
            <Question questionText={this.state.questions[this.state.currentQuestion].question} />
            <QuestionButton onAnswerQuestion={this.answerQuestion.bind(this, this.state.questions[this.state.currentQuestion].id, "yes")} buttonText="Yes" />
            <QuestionButton onAnswerQuestion={this.answerQuestion.bind(this, this.state.questions[this.state.currentQuestion].id, "no")} buttonText="No" />
          </div>;
  };
  returnSummary() {
    return (
        <ul>
            {this.state.questions.map(function(question, index){
                return <li key={ index }>{question.question + ":" + question.answer}</li>;
              })}
        </ul>
    )
  };
  answerQuestion(id, answer) {
    const newQuestions = this.state.questions.map(question => {
      if(question.id === id) {
        question.answer = answer;
      }

      return question;
    });
    this.setState(
      {
        inTransition: true,
        questions: newQuestions,
        currentQuestion: this.state.currentQuestion + 1
      }
    );
  }
}
export default MainApp;
