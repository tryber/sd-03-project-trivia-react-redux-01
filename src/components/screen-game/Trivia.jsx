import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../screen-game/cardgame.css';
import { timerCourse } from '../../reducers/r_timer';
import Timer from '../screen-game/Timer';

const borderColor = (type) => {
  if (type === 'correct-answer') return 'rgb(6, 240, 15)';
  return 'rgb(255, 0, 0)';
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
      timer: 0,
    }
  
    this.correctAnswer = this.correctAnswer.bind(this);
    this.renderQuestions = this.renderQuestions.bind(this);
    this.clicktNextQuestions = this.clicktNextQuestions.bind(this);
  }

  clicktNextQuestions() {
    const { questionIndex } = this.state;
    return this.setState((state) => ({ questionIndex: state.questionIndex + 1 }));
  }

  correctAnswer() {
    const { dataQuestions } = this.props;
    const alternatives = dataQuestions[this.state.questionIndex]
    const { correct_answer: correct, incorrect_answers: incorrect } = alternatives;
    const incorrectBtn = incorrect.map((response, index) => {
      return (
        <div>
          <button
            style={true ? { border: `3px solid ${borderColor('type')}` } : {}}
            data-testid={`${index !== null ? `-${index}` : ''}`}
          >
            {response}
          </button>
        </div>
      )
    });
    return [
      ...incorrectBtn, <button type="correct-answer" >{correct}</button>
    ]
  }

  renderQuestions() {
    const { dataQuestions } = this.props;
    console.log(dataQuestions)
    const eachQuestions = dataQuestions[this.state.questionIndex];
    if (dataQuestions.length === 0) return <div>loading...</div>
    return (
      <div>
        <div className="boxQuestion">
          <div className="boxWithPlayerName">Nome do jogador</div>
          <p className="categoryBar" ></p>
          <p data-testid="question-category">{eachQuestions.category}</p>
          <p data-testid="question-text">{eachQuestions.question}</p>
          {this.correctAnswer()}
          <Timer />
        </div>
        <button
          onClick={() => this.clicktNextQuestions()}
          data-testid="btn-next"
        >
          Proxima
      </button>
      </div>
    )
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

Game.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string,
    difficulty: PropTypes.string,
    question: PropTypes.string,
  }).isRequired,
};

export default connect(mapState)(Game);
