import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header data-testid="header-profile-picture" />
        <div data-testid="header-player-name">Nome da pessoa</div>
        <div data-testid="header-score">0</div>
      </div>
    );
  }
}

export default Header;
