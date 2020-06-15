import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './layout/Login.css';
import { getTokenUser, getResultsQuestions, getNameEmail } from '../../actions/a-token';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
    this.changeFunc = this.changeFunc.bind(this);
    this.inputNameEmail = this.inputNameEmail.bind(this);
    this.buttonDisabled = this.buttonDisabled.bind(this);
    this.buttonPlay = this.buttonPlay.bind(this);
  }

  inputNameEmail(name, email) {
    return (
      <div>
        <input
          data-testid="input-gravatar-email"
          className="boxN"
          type="email"
          onChange={(event) => this.changeFunc(event, 'email')}
          value={email}
          placeholder="Email"
        />
        <input
          data-testid="input-player-name"
          className="boxN" type="text"
          onChange={(event) => this.changeFunc(event, 'name')}
          value={name}
          placeholder="Nome Jogador"
        />
      </div>
    );
  }

  buttonDisabled(tokenPlayer) {
    console.log(this);
    return (
      <button
        className="buttonPlay"
        type="button"
        data-testid="btn-play"
        onClick={() => tokenPlayer()}
        disabled
      >Jogar
      </button>
    );
  }

  buttonPlay(tokenPlayer) {
    console.log(this);
    return (
      <button
        className="buttonPlay"
        type="button"
        data-testid="btn-play"
        onClick={() => tokenPlayer()}
      >
        Jogar
      </button>
    );
  }

  changeFunc(event, field) {
    this.setState({
      [field]: event.target.value,
    });
  }

  render() {
    const { name, email } = this.state;
    const tokenPlayer = async () => {
      const token = await this.props.requestApiToken();
      localStorage.setItem('token', token.token);
      this.requestNameEmail(name, email);
    };
    return (
      <div className="cardText">
        <div className="boxDirection">
          {this.inputNameEmail()}
          {
            name === '' || email === '' ?
              <Link to="/game">
                {this.buttonDisabled(tokenPlayer)}
              </Link>
              :
              <Link to="/game">
                {this.buttonPlay(tokenPlayer)}
              </Link>
          }
          <Link>
            <button data-testid="btn-settings" className="config">Configurações</button>
          </Link>
        </div>
      </div >
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestApiToken: () => dispatch(getTokenUser()),
  requestApiQuestions: () => dispatch(getResultsQuestions()),
  requestNameEmail: (name, email) => dispatch(getNameEmail(name, email)),
});

Login.propTypes = {
  requestApiToken: PropTypes.func.isRequired,
  requestApiQuestions: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
