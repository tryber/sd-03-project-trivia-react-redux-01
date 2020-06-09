import React, { Component } from 'react';
import { connect } from 'react-redux';

class Game extends Component {
  render() {
    const { data } = this.props;
    console.log('perguntas', data);
    return (
      <div>
        <div>
          {data.map((e,i) => (
            <p key={i}>{e.category}</p>
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
}

const mapState = (state) => ({
  data: state.tokenAndQuestions.data,
});

// const mapDispatch = (dispatch) => ({
//  data: () => dispatch(getResultsQuestions()),
// });

export default connect(mapState)(Game);
