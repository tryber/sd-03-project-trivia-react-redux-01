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
    };

    this.correctAnswer = this.correctAnswer.bind(this);
    this.renderQuestions = this.renderQuestions.bind(this);
    this.clicktNextQuestions = this.clicktNextQuestions.bind(this);
  }

  clicktNextQuestions() {
    return this.setState((state) => ({ questionIndex: state.questionIndex + 1 }));
  }

  correctAnswer() {
    const { dataQuestions } = this.props;
    const alternatives = dataQuestions[this.state.questionIndex];
    const { correct_answer: correct, incorrect_answers: incorrect } = alternatives;
    const incorrectBtn = incorrect.map((response, index) => (
      <div>
        <button

          data-testid={`wrong-answer-${index}`}
        >
          {response}
        </button>
      </div>
    ),
    );
    return [
      ...incorrectBtn, <button type="correct-answer" >{correct}</button>,
    ].sort(() => Math.floor(Math.random() * 3) - 1);
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
        <div className="boxQuestion">
          <img src={`https://www.gravatar.com/avatar/${hash}`} alt="ImgGravatar" />
          <div className="boxWithPlayerName">{name}</div>
          <p data-testid="question-category">{eachQuestions.category}</p>
          <p data-testid="question-text">{eachQuestions.question}</p>
          {this.correctAnswer()}
          <Timer status={dataQuestions.question} />
        </div>
        <button
          onClick={() => this.clicktNextQuestions()}
          data-testid="btn-next"
        >
          Próxima
        </button>
      </div>
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
  email: PropTypes.string,
};

export default connect(mapState, mapDispatch)(Game);
