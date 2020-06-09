import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const xablau = [
  'imagem',
];

class Hanking extends Component {
  render() {
    return (
      <div>
        <h1>Hanking</h1>
        <Link to="/home">
          <button data-testid="btn-go-home">
            Início
        </button>
        </Link>
        {xablau.map((img, name, ponts) => (
          <ul>
            <li>{img}</li>
            <li>{name}</li>
            <li data-testid="player-score-index">{ponts}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Hanking;
