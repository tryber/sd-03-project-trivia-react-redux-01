import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { timerCourse } from '../../actions/a_timer';
import Timer from '../screen-game/Timer';
import '../screen-game/cardgame.css';

// switch(difficulty) {
//   case 'hard': return 3;
//   case 'medium': return 2;
//   case 'easy': return 1;
// }

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

  renderQuestions() {
    const { dataQuestions } = this.props;
    const eachQuestions = dataQuestions[this.state.questionIndex];
    if (dataQuestions.length === 0) return <div>Loading...</div>;
    if (eachQuestions == null) return <Redirect to="/feedback" />;
    return (
      <div>
        <div className="boxQuestion">
          <div className="boxWithPlayerName">Nome do jogador</div>
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
    if (!answers === false) return (
      <button
        onClick={() => this.clicktNextQuestions()}
        data-testid="btn-next"
      >
        Próxima
      </button>
    );
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
};

export default connect(mapState, mapDispatch)(Game);
