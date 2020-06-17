import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './layout/Hanking.css';

const xablau = [
  'imagem',
];

class Hanking extends Component {
  render() {
    return (
      <div className="card">
        <h1>Hanking</h1>
        {xablau.map((img, name, ponts, index) => (
          <ul className="hank-list">
            <li>{img}</li>
            <li>{name}</li>
            <li data-testid={`player-score-${index}`}>{ponts}</li>
          </ul>
        ))}
        <Link to="/">
          <button data-testid="btn-go-home">
            Início
        </button>
        </Link>
      </div>
    );
  }
}

export default Hanking;
