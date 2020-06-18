import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { timerCourse } from '../../actions/a_timer';
import Timer from '../screen-game/Timer';
import '../screen-game/cardgame.css';
import Header from '../header/Header';
import { getTokenUser, getResultsQuestions } from '../../actions/a-token';

const CryptoJS = require('crypto-js');

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
      answers: false,
      counter: 0,
      turn: 0,
    };

    this.correctAnswer = this.correctAnswer.bind(this);
    this.renderQuestions = this.renderQuestions.bind(this);
    this.clicktNextQuestions = this.clicktNextQuestions.bind(this);
  }

  componentDidMount() {
    const { requestApiToken, requestApiQuestions } = this.props;
    requestApiToken()
      .then(({ token }) => { localStorage.setItem('token', token.token);
      requestApiQuestions(localStorage.getItem('token'));
    });

   // requestApiQuestions(localStorage.getItem('token')).then(console.log('xablau nesse cypress'));
    // .then(requestApiQuestions(localStorage.getItem('token')));
    // console.log(requestApiQuestions())
  }

  // countDownTimer() {
  //   const timer = () => setInterval(() => {
  //     const { counter, answered } = this.state;
  //     switch (true) {
  //       case counter > 0 && !answered:
  //         return this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  //       case !answered && counter === 0:
  //         this.setState({ answered: true });
  //         this.hitAnswer('wrong');
  //         return clearInterval(timer);
  //       default:
  //         return clearInterval(timer);
  //     }
  //   }, 1000);
  //   return timer;
  // }

  // hitAnswer(answer) {
  //   this.setState({ answered: true });
  //   if (answer !== 'correct') return false;
  //   const { state: { counter, turn }, props: { questions } } = this;
  //   const difficulty = (dif) => {
  //     switch (true) {
  //       case dif === 'hard':
  //         return 3;
  //       case dif === 'medium':
  //         return 2;
  //       case dif === 'easy':
  //         return 1;
  //       default:
  //         return -10;
  //     }
  //   };
  //   const questionLevel = questions[turn].difficulty;
  //   const points = 10 + (counter * difficulty(questionLevel));
  //   const { player } = JSON.parse(localStorage.getItem('state'));
  //   player.assertions = Number(player.assertions) + 1;
  //   player.score += points;
  //   return localStorage.setItem('state', JSON.stringify({ player }));
  // }


  clicktNextQuestions() {
    return this.setState((state) => ({ questionIndex: state.questionIndex + 1, answers: false }));
  }

  responseTrue(incorrectBtn, correct) {
    return [
      ...incorrectBtn,
      <button
        onClick={() => this.setState({ answers: true })}
        data-testid="correct-answer"
      >
        {correct}
      </button>,
    ].sort(() => Math.floor(Math.random() * 3) - 1);
  }

  responseFalse(incorrectBtn, correct) {
    console.log(this);
    return [
      ...incorrectBtn,
      <button
        style={{ border: '3px solid rgb(6, 240, 15)' }}
        disabled
        data-testid="correct-answer"
      >
        {correct}
      </button>,
    ].sort(() => Math.floor(Math.random() * 3) - 1);
  }

  correctAnswer() {
    const { dataQuestions } = this.props;
    const alternatives = dataQuestions[this.state.questionIndex];
    const { correct_answer: correct, incorrect_answers: incorrect } = alternatives;
    if (!this.state.answers) {
      const incorrectBtn = incorrect.map((response, index) => (
        <div>
          <button
            data-testid={`wrong-answer`}
            onClick={() => this.setState({ answers: true })}
          >
            {response}
          </button>
        </div>
      ));
      return this.responseTrue(incorrectBtn, correct);
    }
    const incorrectBtn = incorrect.map((response, index) => (
      <div>
        <button
          disabled
          style={{ border: '3px solid rgb(255, 0, 0)' }}
          data-testid={`wrong-answer}`}
        >
          {response}
        </button>
      </div>
    ));
    return this.responseFalse(incorrectBtn, correct);
  }

  renderQuestions(name) {
    const { dataQuestions } = this.props;
    const eachQuestions = dataQuestions[this.state.questionIndex];
    if (dataQuestions.length <= 0) return <div>Loading...</div>;
    if (eachQuestions == null) return <Redirect to="/feedback" />;
    console.log(dataQuestions);
    const hash = CryptoJS.MD5(this.props.email);
    return (
      <div>
        <p data-testid="question-category">engano</p>
        <div className="boxQuestion">
          <img src={`https://www.gravatar.com/avatar/${hash}`} alt="ImgGravatar" />
          <div className="boxWithPlayerName">{name}</div>
          <p data-testid="question-category">{eachQuestions.category}</p>
          <p data-testid="question-text">{eachQuestions.question}</p>
          {this.correctAnswer()}
          <Timer />
        </div>
        {this.renderNextButton()}
      </div>
    );
  }

  renderNextButton() {
    const { answers } = this.state;
    if (answers) {
      return (
        <button
          onClick={() => this.clicktNextQuestions()}
          data-testid="btn-next"
        >
          Próxima
        </button>
      );
    }
    return (
      <div>Responda</div>
    );
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderQuestions()}
      </div>
    );
  }
}

const mapState = (state) => ({
  dataQuestions: state.tokenAndQuestions.data,
  name: state.tokenAndQuestions.name,
  email: state.tokenAndQuestions.email,
});

const mapDispatch = (dispatch) => ({
  requestApiToken: () => dispatch(getTokenUser()),
  requestApiQuestions: (token) => dispatch(getResultsQuestions(token)),
  setTime: (timer) => dispatch(timerCourse(timer)),
});

Game.propTypes = {
  dataQuestions: PropTypes.shape({
    category: PropTypes.string,
    difficulty: PropTypes.string,
    question: PropTypes.string,
  }).isRequired,
  email: PropTypes.string.isRequired,
  requestApiQuestions: PropTypes.func.isRequired,
  requestApiToken: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(Game);
