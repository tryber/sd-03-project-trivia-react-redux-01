import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTokenUser, getToken } from '../../actions/a-token';


class Login extends Component {
  componentDidMount() {
    const { requestApiToken } = this.props;
    requestApiToken();
  }

  render() {
    const { requestApiToken } =this.props;
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
              onClick={() => requestApiToken()}
            >Jogar
             </button>
          </Link>
        </header>
      </div >
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestApiToken: () => dispatch(getTokenUser()),
});

Login.propTypes = {
  requestApiToken: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
