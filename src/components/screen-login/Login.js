import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTokenUser } from '../../actions/a-token';


class Login extends Component {
  componentDidMount() {
    const { requestApiToken } = this.props;
    console.log(this.props)
    requestApiToken();
  }

  render() {
    return (
      <div>
        <header>
          <label htmlFor="input-gravatar-email">Email Gravatar
            <input data-testid="input-gravatar-email" type="email" />
          </label>
          <label htmlFor="input-player-name"> Nome do Jogador
            <input data-testid="input-player-name" type="text" />
          </label>
          <button data-testid="btn-play">Jogar</button>
        </header>
      </div>
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
