import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../screen-game/cardgame.css';

class Game extends Component {
  render() {
    const { data } = this.props;
    console.log('perguntas', data);
    return (
      <div>
        <div className='boxQuestion'>
          <div className='boxWithPlayerName'>nome do jogador</div>
          {data.map((e) => (
            <p className='categoryBar' key={e.category}>{e.category}</p>
          ))}
          <p data-testid="question-category">a</p>
          <p data-testid="question-text">a</p>
        </div>
        <div>
          <button data-testid="correct-answer">Alternativas</button>
          <button data-testid="wrong-answer">Alternativa incorretas</button>
        </div>
        <button data-testid="btn-next">Proxima</button>
      </div>
    );
  }
}

const mapState = (state) => ({
  data: state.tokenAndQuestions.data,
});

// const mapDispatch = (dispatch) => ({
//  data: () => dispatch(getResultsQuestions()),
// });

Game.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string,
    difficulty: PropTypes.string,
    question: PropTypes.string,
  }).isRequired,
};

export default connect(mapState)(Game);
