import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
/* import PropTypes from 'prop-types'; */

import './layout/Login.css';
import { getNameEmail } from '../../actions/a-token';

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
    this.saveInfo = this.saveInfo.bind(this);
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

  saveInfo() {
    const { email, name } = this.state;
    localStorage.setItem('state', JSON.stringify({
      player: {
        name, assertions: 0, score: 0, gravatarEmail: email,
      },
    }));
  }

  buttonDisabled() {
    console.log(this);
    return (
      <button
        className="buttonPlay"
        type="button"
        data-testid="btn-play"
        disabled
      >Jogar
      </button>
    );
  }

  buttonPlay() {
    console.log(this);
    return (
      <button
        className="buttonPlay"
        type="button"
        data-testid="btn-play"
        onClick={() => this.saveInfo()}
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
    // const tokenPlayer = async () => {
    //   const token = await this.props.requestApiToken();
    //   const questions = this.props.requestApiQuestions();
    //   console.log(questions);
    //   localStorage.setItem('token', token.token);
    //   this.props.requestNameEmail(name, email);
    // };
    const { name, email } = this.state;

    return (
      <div className="cardText">
        <div className="boxDirection">
          {this.inputNameEmail(name, email)}
          {
            name === '' || email === '' ?
              <Link to="/game">
                {this.buttonDisabled()}
              </Link>
              :
              <Link to="/game">
                {this.buttonPlay()}
              </Link>

                this.buttonDisabled(tokenPlayer)
              :
                <Link to="/game">{this.buttonPlay(tokenPlayer)}</Link>
          }
          <Link to="/config">
            <button data-testid="btn-settings" className="config">Configurações</button>
          </Link>
        </div>
      </div >
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // requestApiToken: () => dispatch(getTokenUser()),
  // requestApiQuestions: (token) => dispatch(getResultsQuestions(token)),
  requestNameEmail: (name, email) => dispatch(getNameEmail(name, email)),
});

Login.propTypes = {
  /* requestApiToken: PropTypes.func.isRequired, */
  requestNameEmail: PropTypes.func.isRequired,
  /* requestApiQuestions: PropTypes.func.isRequired, */
};

export default connect(null, mapDispatchToProps)(Login);
