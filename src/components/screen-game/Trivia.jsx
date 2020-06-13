import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../screen-game/cardgame.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
    }
  }

  clicktNextQuestions = () => {
    const { questionIndex } = this.state;
    return this.setState((state) => ({ questionIndex: state.questionIndex + 1 }));
  }

  

  render() {
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
        </div>
        <button
          onClick={() => this.clicktNextQuestions()}
          data-testid="btn-next"
        >
        Proxima
        </button>
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
