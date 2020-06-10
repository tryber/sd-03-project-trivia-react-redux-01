import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const timer = () => {
  setInterval(() => {
    "tempo"
    console.log("tempo")
  },1000)
}

class Game extends Component {

  render() {
    const { data } = this.props;
    console.log('perguntas', data);
    return (
      <div>
        <button onClick={() => timer()}>Testar timer</button>
        <div>
          {data.map((e, i) => (
            <div>
              <p key={i} data-testid="question-category">{e.category}</p>
              <p data-testid="question-text">{e.question}</p>

              <Link to={`game/questions/${e}`}>
                <button data-testid="btn-next">Proxima</button>
              </Link>
              <button
                onClick={() => this.correctAnswer(e) }
                data-testid="correct-answer"
              >
                Alternativa Correta
              </button>
            </div>
          ))}
        </div>
        <div>
          <button data-testid="wrong-answer">Alternativa incorretas</button>
        </div>
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

// Game.propTypes = {
//   data: PropTypes.shape({
//     category: PropTypes.string,
//     difficulty: PropTypes.string,
//     question: PropTypes.string,
//   }).isRequired,
// };

export default connect(mapState)(Game);
