import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../header/Header';


class Feedback extends Component {
  render() {
    const num = this.props.correct;
    const score = this.props.score;
    return (
      <div>
        <Header />
        {num <= 3 ? <h1>Podia ser melhor...</h1> : <h1>Mandou bem!</h1>}
        {`Você acertou ${num} questões!
          Um total de ${score} pontos!`}
        <button><Link to="/hanking">VER RANKING</Link></button>
        <button><Link to="/">JOGAR NOVAMENTE</Link></button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  correct: state.correct,
  score: state.score,
});

Feedback.propTypes = {
  correct: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
