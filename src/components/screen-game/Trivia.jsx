import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { timerCourse } from '../../actions/a_timer';
import Timer from '../screen-game/Timer';
import '../screen-game/cardgame.css';

/* const borderColor = (type) => {
  if (type === 'correct-answer') return 'rgb(6, 240, 15)';
  return 'rgb(255, 0, 0)';
};
 */

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
          /* style={true ? { border: `3px solid ${borderColor('type')}` } : {}} */
          data-testid={`wrong-answer-${index}`}
        >
          {response}
        </button>
      </div>
    ),
    );
    return [
      ...incorrectBtn, <button type="correct-answer" >{correct}</button>,
    ].sort(() => Math.floor(Math.random() * 3) - 1)
  }

  renderQuestions() {
    const { dataQuestions, } = this.props;
    const eachQuestions = dataQuestions[this.state.questionIndex];
    if (dataQuestions.length === 0) return <div>Loading...</div>;
    if (eachQuestions == null) return <Redirect to='/feedback' />
    return (
      <div>
        <div className="boxQuestion">
          <div className="boxWithPlayerName">Nome do jogador</div>
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
