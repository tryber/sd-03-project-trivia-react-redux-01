import React, { Component } from 'react';
import { connect } from 'react-redux';

const CryptoJS = require('crypto-js');

function getgravatar(hash, data, name) {
  return (
    <header className="boxWithPlayerName">
      <img src={`https://www.gravatar.com/avatar/${hash}`} alt="ImgGravatar" />
      <p data-testid="header-player-name" >{name}</p>
    </header>
  )
}

class Header extends Component {
  render() {
    const { data, name, email } = this.props;
    const hash = CryptoJS.MD5(email);
    return (
      <div>
        <header data-testid="header-profile-picture" />
        <div data-testid="header-player-name">Nome Jogador</div>
        <div data-testid="header-score">Score</div>
        {getgravatar(hash, data, name)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.tokenAndQuestions.data,
  name: state.tokenAndQuestions.name,
  email: state.tokenAndQuestions.email,
});

export default connect(mapStateToProps)(Header);
