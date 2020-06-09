import React, { Component } from "react';


export default class Game extends Component {
  render() {
    return (
      <div>
        <div>
          <p data-testid="question-category">Categoria</p>
          <p data-testid="question-text">Perguntas</p>
        </div>
        <div>
          <button data-testid="correct-answer">Alternativas</button>
          <button data-testid="wrong-answer">Alternativa incorretas</button>
        </div>
        <button data-testid="btn-next">Proxima</button>
      </div>
    );
  }
}
