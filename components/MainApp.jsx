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
      quizzes: [
        {
          id: 1,
          name: "Comic Quiz",
          questions: [
            {
              id: 1,
              questionText: "Is batman better than superman",
              usersAnswer: "",
              yesYouTubeUrl: "https://www.youtube.com/watch?v=DsAn_n6O5Ns",
              noYouTubeUrl: "https://www.youtube.com/watch?v=sPmY9I-zWBk"
            },
            {
              id: 2,
              questionText: "Can wolverine beat ironman",
              usersAnswer: "",
              yesYouTubeUrl: "https://www.youtube.com/watch?v=xhfauq1llMc",
              noYouTubeUrl: "https://www.youtube.com/watch?v=zSQbUV-u5Xo"
            },
            {
              id: 3,
              questionText: "Is wonder woman more intelligent than cat women",
              usersAnswer: "",
              yesYouTubeUrl: "https://www.youtube.com/watch?v=ALf5wpTokKA",
              noYouTubeUrl: "https://www.youtube.com/watch?v=zSQbUV-u5Xo"
            }
          ]
        },
        {
          id: 2,
          name: "Movie Quiz",
          questions: [
            {
              id: 1,
              questionText: "Did titanic make more money than avatar",
              usersAnswer: "",
              yesYouTubeUrl: "https://www.youtube.com/watch?v=DsAn_n6O5Ns",
              noYouTubeUrl: "https://www.youtube.com/watch?v=sPmY9I-zWBk"
            },
            {
              id: 2,
              questionText: "Did the narrator die in Fight Club",
              usersAnswer: "",
              yesYouTubeUrl: "https://www.youtube.com/watch?v=xhfauq1llMc",
              noYouTubeUrl: "https://www.youtube.com/watch?v=zSQbUV-u5Xo"
            },
            {
              id: 3,
              questionText: "Pulp Fication was played at our wedding",
              usersAnswer: "",
              yesYouTubeUrl: "https://www.youtube.com/watch?v=ALf5wpTokKA",
              noYouTubeUrl: "https://www.youtube.com/watch?v=zSQbUV-u5Xo"
            }
          ]
        },
        {
          id: 3,
          name: "Small One Question Quiz",
          questions: [
            {
              id: 1,
              questionText: "Small Question",
              usersAnswer: "",
              yesYouTubeUrl: "https://www.youtube.com/watch?v=DsAn_n6O5Ns",
              noYouTubeUrl: "https://www.youtube.com/watch?v=sPmY9I-zWBk"
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
    return <YouTubeComponent question={question} onVideoEnded={() => this.videoEnded()}/>
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
