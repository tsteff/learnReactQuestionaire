import React from 'react';
import Question from './Question';
import QuestionButton from './QuestionButton';
import QuizButton from './QuizButton';
import QuestionSummary from './QuestionSummary'
import YouTubeComponent from './YouTubeComponent'

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 1,
      currentQuiz: 0,
      inTransition: false,
      questions: [],
      quizzes: []
    };
    this.searchForQuizzes();
  }
  searchForQuizzes() {
    // fetch('quizzes.json')
    //   .then((response) => {
    //     response.json().then((responseJson) => {
    //       this.setState({
    //         quizzes: responseJson,
    //       });
    //     })
    //     .catch((err) => {
    //       console.log("Error with json fetch. Check the network request in console");
    //       console.log(err)
    //     });
    //   });
      $.getJSON( "quizzes.json")
        .done((responseJson) => {
          this.setState({
            quizzes: responseJson,
          });
        })
        .fail((err) => {
          console.log("Error: " + err.responseText);
        })

  }
  render() {
    if (this.state.currentQuiz == 0) {
      return this.renderSelectQuizScreen();
    }
    if (this.state.inTransition) {
      return this.showYoutube();
    }
    if (this.state.currentQuestion <= this.state.questions.length) {
      return this.renderQuestion();
    }
    if (this.state.currentQuestion > this.state.questions.length) {
      return this.returnSummary();
    }
  }
  renderSelectQuizScreen() {
    return (
      <div className="row vertical-align">
        <div className="col-xs-3"></div>
        <div className="col-xs-6">
          <div className="text-center">
            <h1>Select Quiz</h1>
            <div>
              {
                  this.state.quizzes.map((quiz) => {
                  return <QuizButton onSelectQuiz={() => this.selectQuiz(quiz.id)} buttonText={quiz.name}/>
                })
              }
            </div>
          </div>
        </div>
        <div className="col-xs-3"></div>
      </div>

      );
  };
  showYoutube() {
    var question = this.state.questions.find(question => question.id == this.state.currentQuestion - 1);
    return <YouTubeComponent question={question} onVideoEnded={() => this.videoEnded()}/>
  };
  renderQuestion() {
    var question = this.state.questions.find(question => question.id == this.state.currentQuestion);
    Mousetrap.bind(['y', 'u','i', 'o','p', 'm', 'l', 'k',],  () => this.answerQuestion(question.id, "yes"));
    Mousetrap.bind(['y', 'p'],  () => this.answerQuestion(question.id, "no"));

    return (
      <div className="row vertical-align">
        <div className="col-xs-3"></div>
        <div className="col-xs-6">
          <div className="text-center console">
            <Question questionText={question.questionText} />
            <br/>
            <div className="row">
              <QuestionButton onAnswerQuestion={() => this.answerQuestion(question.id, "yes")} buttonText="Yes" buttonType="btn-default"/>
              <QuestionButton onAnswerQuestion={() => this.answerQuestion(question.id, "no")} buttonText="No" buttonType="btn-default"/>
            </div>
          </div>
        </div>
        <div className="col-xs-3"></div>
      </div>
      );
  };
  returnSummary() {
    return (
      <QuestionSummary questionList={this.state.questions}/>
    );
  };
  selectQuiz(quizId) {
    var quizQuestions = this.state.quizzes.find(quiz => quiz.id === quizId);
    this.setState(
      {
        questions: quizQuestions.questions,
        currentQuiz: quizId
      }
    );
  };
  answerQuestion(id, answer) {
    const newQuestions = this.state.questions.map(question => {
      if(question.id === id) {
        question.usersAnswer = answer;
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
  };
  videoEnded() {
    this.setState(
      {
        inTransition: false
      }
    );
  };
}
export default MainApp;
