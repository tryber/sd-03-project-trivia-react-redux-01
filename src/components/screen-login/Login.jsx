import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './layout/Login.css';
import { getTokenUser, getResultsQuestions } from '../../actions/a-token';


class Login extends Component {
  render() {
    const tokenPlayer = async () => {
      const token = await this.props.requestApiToken();
      const questions = await this.props.requestApiQuestions();
      localStorage.setItem('token', token.token);
      console.log(questions);
    };

    return (
      <div className="cardText">
        <div className="boxDirection">
          <label htmlFor="input-gravatar-email">Email Gravatar
            <input data-testid="input-gravatar-email" className="boxN" type="email" required />
          </label>
          <label htmlFor="input-player-name"> Nome do Jogador
            <input data-testid="input-player-name" className="boxN" type="text" required />
          </label>
          <Link to="/game">
            <button
              className="buttonPlay"
              type="button"
              data-testid="btn-play"
              onClick={() => tokenPlayer()}
            >Jogar
             </button>
          </Link>
          <Link>
            <button data-testid="btn-settings" className="config">Configurações</button>
          </Link>
        </div>
      </div >
    );
  }
}

// const mapState = (state) => ({
//   data: state.tokenAndQuestions.data,
// });

const mapDispatchToProps = (dispatch) => ({
  requestApiToken: () => dispatch(getTokenUser()),
  requestApiQuestions: () => dispatch(getResultsQuestions()),
});

Login.propTypes = {
  // requestApiToken: PropTypes.func.isRequired,
  requestApiQuestions: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
