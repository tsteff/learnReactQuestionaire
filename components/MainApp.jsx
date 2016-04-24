import React from 'react';
import Question from './Question';
import QuestionButton from './QuestionButton';
import QuizButton from './QuizButton';
import ReactPlayer from 'react-player'

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 1,
      currentQuiz: 0,
      inTransition: false,
      questions: [],
      quizzes: [
        {
          id: 1,
          name: "Quiz One",
          questions: [
            {
              id: 1,
              questionText: "Do you like LL",
              usersAnswer: "",
              yesYouTubeUrl: "https://www.youtube.com/watch?v=DsAn_n6O5Ns",
              noYouTubeUrl: "https://www.youtube.com/watch?v=sPmY9I-zWBk"
            },
            {
              id: 2,
              questionText: "Do you like Tim",
              usersAnswer: "",
              yesYouTubeUrl: "https://www.youtube.com/watch?v=xhfauq1llMc",
              noYouTubeUrl: "https://www.youtube.com/watch?v=zSQbUV-u5Xo"
            },
            {
              id: 3,
              questionText: "Do you like Oph",
              usersAnswer: "",
              yesYouTubeUrl: "https://www.youtube.com/watch?v=ALf5wpTokKA",
              noYouTubeUrl: "https://www.youtube.com/watch?v=zSQbUV-u5Xo"
            }
          ]
        },
        {
          id: 2,
          name: "Quiz Two",
          questions: [
            {
              id: 1,
              questionText: "Do you like LL2",
              usersAnswer: "",
              yesYouTubeUrl: "https://www.youtube.com/watch?v=DsAn_n6O5Ns",
              noYouTubeUrl: "https://www.youtube.com/watch?v=sPmY9I-zWBk"
            },
            {
              id: 2,
              questionText: "Do you like Tim2",
              usersAnswer: "",
              yesYouTubeUrl: "https://www.youtube.com/watch?v=xhfauq1llMc",
              noYouTubeUrl: "https://www.youtube.com/watch?v=zSQbUV-u5Xo"
            },
            {
              id: 3,
              questionText: "Do you like Oph2",
              usersAnswer: "",
              yesYouTubeUrl: "https://www.youtube.com/watch?v=ALf5wpTokKA",
              noYouTubeUrl: "https://www.youtube.com/watch?v=zSQbUV-u5Xo"
            }
          ]
        }
      ]
    };
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
      <div>
        {
          this.state.quizzes.map((quiz) => {
            return <QuizButton onSelectQuiz={() => this.selectQuiz(quiz.id)} buttonText={quiz.name}/>
          })
        }
      </div>
      );
  };
  showYoutube() {
    var question = this.state.questions.find(question => question.id == this.state.currentQuestion - 1);
    var youTubeUrl = question.yesYouTubeUrl;
    if (question.usersAnswer === 'no') {
      youTubeUrl = question.noYouTubeUrl;
    }
    return <ReactPlayer
          url={youTubeUrl}
          playing={true}
          height={$(window).height()}
          width={$(window).width()}
          onEnded={() => this.setState({ inTransition: false })}
        />;
  };
  renderQuestion() {
    var question = this.state.questions.find(question => question.id == this.state.currentQuestion);
    return (
          <div>
            <Question questionText={question.questionText} />
            <QuestionButton onAnswerQuestion={() => this.answerQuestion(question.id, "yes")} buttonText="Yes" />
            <QuestionButton onAnswerQuestion={() => this.answerQuestion(question.id, "no")} buttonText="No" />
          </div>
        );
  };
  returnSummary() {
    return (
        <ul>
            {
              this.state.questions.map((question) => {
                return <li>{question.questionText + ":" + question.usersAnswer}</li>;
              })
            }
        </ul>
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
}
export default MainApp;
