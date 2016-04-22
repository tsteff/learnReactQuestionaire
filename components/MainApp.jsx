import React from 'react';
import Question from './Question';
import QuestionButton from './QuestionButton';
import ReactPlayer from 'react-player'

class MainApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 0,
      inTransition: false,
      questions: [
          {
            id: 1,
            question: "Do you like LL",
            answer: "",
            yesYouTubeUrl: "https://www.youtube.com/watch?v=DsAn_n6O5Ns",
            noYouTubeUrl: "https://www.youtube.com/watch?v=sPmY9I-zWBk"
          },
          {
            id: 2,
            question: "Do you like Tim",
            answer: "",
            yesYouTubeUrl: "https://www.youtube.com/watch?v=xhfauq1llMc",
            noYouTubeUrl: "https://www.youtube.com/watch?v=zSQbUV-u5Xo"
          },
          {
            id: 3,
            question: "Do you like Oph",
            answer: "",
            yesYouTubeUrl: "https://www.youtube.com/watch?v=ALf5wpTokKA",
            noYouTubeUrl: "https://www.youtube.com/watch?v=zSQbUV-u5Xo"
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
    var question = this.state.questions[this.state.currentQuestion - 1];
    var youTubeUrl = question.yesYouTubeUrl;
    if (question.answer === 'no') {
      youTubeUrl = question.noYouTubeUrl;
    }
    return <ReactPlayer
          url={youTubeUrl}
          playing={true}
          height={$(window).height()}
          width={$(window).width()}
          onEnded={() => this.setState({ inTransition: false })}
        />
  };
  renderQuestion() {
    var question = this.state.questions[this.state.currentQuestion];
    return <div>
            <Question questionText={question.question} />
            <QuestionButton onAnswerQuestion={this.answerQuestion.bind(this, question.id, "yes")} buttonText="Yes" />
            <QuestionButton onAnswerQuestion={this.answerQuestion.bind(this, question.id, "no")} buttonText="No" />
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
