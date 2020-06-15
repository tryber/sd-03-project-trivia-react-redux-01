import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
  }

  changeFunc(event, field) {
    this.setState({
      [field]: event.target.value,
    });
  }

  render() {
    const { name, email } = this.state;
    const tokenPlayer = async () => {
      const { name, email } = this.state;
      const token = await this.props.requestApiToken();
      localStorage.setItem('token', token.token);
      this.props.requestNameEmail(name, email);
    };
    return (
      <div className="cardText">
        <div className="boxDirection">
          <input
            data-testid="input-gravatar-email"
            className="boxN"
            type="email"
            onChange={(event) => this.changeFunc(event, 'email')}
            value={email}
            placeholder='Email'
          />
          <input
            data-testid="input-player-name"
            className="boxN" type="text"
            onChange={(event) => this.changeFunc(event, 'name')}
            value={name}
            placeholder='Nome Jogador'
          />
          {
            name === '' || email === '' ?
              <Link to="/game">
                <button
                  className="buttonPlay"
                  type="button"
                  data-testid="btn-play"
                  onClick={() => tokenPlayer()}
                  disabled
                >Jogar
             </button>
              </Link>
              :
              <Link to="/game">
                <button
                  className="buttonPlay"
                  type="button"
                  data-testid="btn-play"
                  onClick={() => tokenPlayer()}>
                  Jogar
             </button>
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

/* Login.propTypes = {
  requestApiToken: PropTypes.func.isRequired,
  requestApiQuestions: PropTypes.func.isRequired,
};
 */
export default connect(null, mapDispatchToProps)(Login);
