import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Game extends Component {
  componentDidMount() {
    const { data } = this.props;
    const inc = data[0].incorrect_answers;
    inc.splice(Math.floor((inc.length + 1) * Math.random()), 0, data[0].correct_answer);
  }
  render() {
    console.log('perguntas', this.props.data);
    return (
      <div>
        <div>
          <p data-testid="question-category">{this.data[0].category ? this.data[0].category : ''}</p>
          <p data-testid="question-text">{this.data[0].question ? this.data[0].question : ''}</p>
        </div>
        <div>
          {this.inc.map((e) => <button>{e}</button>)}
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
    category: PropTypes.string.isRequired,
    difficulty: PropTypes.string,
    question: PropTypes.string,
  }).isRequired,
};

export default connect(mapState)(Game);
