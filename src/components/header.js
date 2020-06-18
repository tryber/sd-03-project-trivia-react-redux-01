import React from 'react';

const CryptoJS = require('crypto-js');

const Header = () => {
  const { player: { name, score, gravatarEmail } } = JSON.parse(localStorage.getItem('Player'));
  const hash = CryptoJS.MD5(gravatarEmail);
  return (
    <header>
      <img
        data-testid="header-profile-picture"
        src={`https://www.gravatar.com/avatar/${hash}`}
        default="https://www.gravatar.com/avatar/2d3bf5b67282f5f466e503d7022abcf3"
        alt="gravatar"
      />
      <p data-testid="header-player-name">{name}</p>
      <p data-testid="header-score">{score}</p>
    </header>
  );
}

export default Header;