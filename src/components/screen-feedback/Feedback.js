import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../header/c-header';


export class Feedback extends Component {
  render() {
    const num = this.props.correct;
    const score = this.props.score;
    return (
      <div>
        <Header />
        {num <= 3 ? <h1>Podia ser melhor...</h1> : <h1>Mandou bem!</h1>}
        {`Você acertou ${num} questões!
          Um total de ${score} pontos!`}
          <button>VER RANKING</button>
          <button>JOGAR NOVAMENTE</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  correct: state.correct,
  score: state.score,
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback)
