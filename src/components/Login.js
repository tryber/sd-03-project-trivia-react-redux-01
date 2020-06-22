import React from 'react';
import { Link } from 'react-router-dom';

class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
    };
    this.renderInput = this.renderInput.bind(this);
    this.saveState = this.saveState.bind(this);
    this.statePlayerLocal = this.statePlayerLocal.bind(this);
    this.buttonPlay = this.buttonPlay.bind(this);
  }

  saveState(event, field) {
    this.setState({
      [field]: event.target.value,
    });
  }

  statePlayerLocal() {
    const { email, name } = this.state;
    localStorage.setItem('Player', JSON.stringify({
      player: {
        name,
        assertions: 0,
        score: 0,
        gravatarEmail: email,
      },
    }));
  }

  buttonPlay(email, name) {
    return email === '' || name === '' ? (
      <button
        data-testid="btn-play"
        type="button"
        disabled
      >JOGAR
      </button>
    ) :
      (
        <Link to="/GameScreen">
          <button
            data-testid="btn-play"
            type="button"
            onClick={() => this.statePlayerLocal()}
          >JOGAR
      </button>
        </Link>
      );
  }

  renderInput(email, name) {
    return (
      <div>
        <input
          placeholder="Digite seu Email"
          data-testid="input-gravatar-email"
          type="email"
          value={email}
          onChange={(event) => this.saveState(event, 'email')}
        />
        <input
          placeholder="Nome/Apelido"
          data-testid="input-player-name"
          type="text"
          value={name}
          onChange={(event) => this.saveState(event, 'name')}
        />
      </div>
    );
  }

  render() {
    const { name, email } = this.state;
    return (
      <div>
        {this.renderInput(email, name)}
        {this.buttonPlay(email, name)}
        <Link to="/config">
          <button data-testid="btn-settings">Configurações</button>
        </Link>
      </div>
    );
  }
}

export default login;
