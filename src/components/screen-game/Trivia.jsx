import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../screen-game/cardgame.css';

const CryptoJS = require('crypto-js');

function getgravatar(hash, data, name) {
  return (
    <div>
      <div className="boxQuestion">
        <header className="boxWithPlayerName">
          <img src={`https://www.gravatar.com/avatar/${hash}`} />
          <p data-testid="header-player-name" >{name}</p>
        </header>
        {data.map((e) => (
          <p className="categoryBar" key={e.category}>{e.category}</p>
        ))}
        <p data-testid="question-category"></p>
        <p data-testid="question-text"></p>
      </div>
      <div>
        <button data-testid="correct-answer">Alternativas</button>
        <button data-testid="wrong-answer">Alternativa incorretas</button>
      </div>
      <button data-testid="btn-next">Proxima</button>
    </div>
  );
}

class Game extends Component {
  render() {
    const { data, name, email } = this.props;
    const hash = CryptoJS.MD5(email);
    return (
      <>
        {getgravatar(hash, data, name)}
      </>
    );
  }
}

const mapState = (state) => ({
  data: state.tokenAndQuestions.data,
  name: state.tokenAndQuestions.name,
  email: state.tokenAndQuestions.email,
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
