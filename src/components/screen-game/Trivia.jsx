import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { timerCourse } from '../../actions/a_timer';
import Timer from '../screen-game/Timer';
import '../screen-game/cardgame.css';

const CryptoJS = require('crypto-js');

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
      answers: false,
    };

    this.correctAnswer = this.correctAnswer.bind(this);
    this.renderQuestions = this.renderQuestions.bind(this);
    this.clicktNextQuestions = this.clicktNextQuestions.bind(this);
  }

  clicktNextQuestions() {
    return this.setState((state) => ({ questionIndex: state.questionIndex + 1, answers: false }));
  }

  responseTrue(incorrectBtn, correct) {
    return [
      ...incorrectBtn,
      <button
        className="buttonCs"
        onClick={() => this.setState({ answers: true })}
        type="correct-answer"
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
        className="buttonCs"
        style={{ borderColor: 'rgb(6, 240, 15)' }}
        disabled
        type="correct-answer"
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
            data-testid={`wrong-answer-${index}`}
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
          className="buttonCs"
          style={{ borderColor: 'rgb(255, 0, 0)' }}
          data-testid={`wrong-answer-${index}`}
          onClick={''}
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
    if (dataQuestions.length === 0) return <div>Loading...</div>;
    if (eachQuestions == null) return <Redirect to="/feedback" />;
    console.log(dataQuestions);
    const hash = CryptoJS.MD5(this.props.email);
    return (
      <div>
        <header className="boxQuestion">
          <img src={`https://www.gravatar.com/avatar/${hash}`}
            data-testid="profile-picture"
            alt="ImgG" className="Img" />
          <div className="boxWithPlayerName">{name}</div>
          <div>
            <p data-testid="question-category" className="categoryBar">{eachQuestions.category}</p>
            <p data-testid="question-text" className="textQuestion">{eachQuestions.question}</p>
          </div>
          {this.correctAnswer()}
          <Timer />
        </header>
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
  setTime: (timer) => dispatch(timerCourse(timer)),
});

Game.propTypes = {
  dataQuestions: PropTypes.shape({
    category: PropTypes.string,
    difficulty: PropTypes.string,
    question: PropTypes.string,
  }).isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapState, mapDispatch)(Game);
