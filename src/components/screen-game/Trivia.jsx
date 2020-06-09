import React, { Component } from 'react';
import { connect } from 'react-redux';

class Game extends Component {
  render() {
    const { data } = this.props;
    console.log('perguntas', data);
    return (
      <div>
        <div>
          {data.map((e) => (
            <p key={e.category}>{e.category}</p>
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
  data: PropTypes.arrayOf((PropTypes.object).isRequired)
};

export default connect(mapState)(Game);
