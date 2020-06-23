import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../header/Header';

class Feedback extends Component {
  render() {
    const {correct, score} = this.props;
    return (
      <div>
        <Header />
        {correct < 3 ?
          <h1><span data-testid="feedback-text">Podia ser melhor...</span></h1>
        :
          <h1><span data-testid="feedback-text">Mandou bem!</span></h1>}
        {`Você acertou `}<span data-testid="feedback-total-question">{correct}</span>{` questões!
          Um total de `}<span data-testid="feedback-total-score">{score}</span> {` pontos!`}
        <button data-testid="btn-ranking">
          <Link to="/hanking">VER RANKING</Link>
        </button>
        <Link to="/">
          <button
            data-testid="btn-play-again"
          >
          JOGAR NOVAMENTE
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  correct: JSON.parse(localStorage.getItem('state')).player.assertions,
  score: JSON.parse(localStorage.getItem('state')).player.score,
});

Feedback.propTypes = {
  correct: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
