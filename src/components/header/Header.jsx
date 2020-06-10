import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header data-testid="header-profile-picture" />
        <div data-testid="header-player-name">Nome Jogador</div>
        <div data-testid="header-score">Score</div>
      </div>
    );
  }
}

export default Header;
