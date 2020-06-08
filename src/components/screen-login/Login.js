import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTokenUser } from '../../actions/a-token';

class Login extends Component {
  componentDidMount() {
    const { requestApiToken } = this.props;
    requestApiToken();
  }
  render() {
    return (
      <div>
        <header>
          <label>Email Gravatar
            <input data-testid="input-gravatar-email" type='email' />
          </label>
          <label> Nome do Jogador
            <input data-testid="input-player-name" type='Text' />
          </label>
          <button data-testid="btn-play">Jogar</button>
        </header>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestApiToken: () => dispatch(getTokenUser()),
});

export default connect(null, mapDispatchToProps)(Login)
