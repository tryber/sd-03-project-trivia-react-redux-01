import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
      <div>
        <header>
          <label htmlFor="input-gravatar-email">Email Gravatar
            <input data-testid="input-gravatar-email" type="email" required />
          </label>
          <label htmlFor="input-player-name"> Nome do Jogador
            <input data-testid="input-player-name" type="text" required />
          </label>
          <Link>
            <button data-testid="btn-settings">Configurações</button>
          </Link>
          <Link to="/game">
            <button
              type="button"
              data-testid="btn-play"
              onClick={() => tokenPlayer()}
            >Jogar
             </button>
          </Link>
        </header>
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
  requestApiToken: PropTypes.func.isRequired,
  requestApiQuestions: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
