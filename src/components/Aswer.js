import React from 'react';
import randomQuestion from './RandomQuestion';
import './correctCss.css';
import propTypes from 'prop-types';

const getClasses = (selected, result, correctAnswer) => {
  if (selected) {
    return result === correctAnswer ? 'correct' : 'incorrect';
  }
  return false;
};


class Aswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomAswer: '',
      currentQuestion: '',
    };
    this.handleRandomAswer = this.handleRandomAswer.bind(this);
    this.getButtons = this.getButtons.bind(this);
  }

  componentDidUpdate() {
    const { selected } = this.props;
    if (selected) return this.getButtons();
    return this.handleRandomAswer();
  }

  getButtons() {
    const { data, changeState, selected } = this.props;
    if (data) {
      const { correct_answer: correctAnswer } = data;
      const { randomAswer } = this.state;
      if (randomAswer) {
        return (
          <div>
            {randomAswer.map((resultQ) => {
              let i = 0;
              if (resultQ !== correctAnswer) i += 1;
              return (
                <button
                  className={getClasses(selected, resultQ, correctAnswer)}
                  data-testid={
                    resultQ === correctAnswer ? 'correct-answer' : `wrong-answer-${i}`
                  }
                  onClick={changeState}
                  disabled={selected}
                >{resultQ}</button>
              );
            })}
          </div>
        );
      }
      return false;
    }
    return false;
  }

  handleRandomAswer() {
    const { data } = this.props;
    if (data) {
      const {
        correct_answer: correctAnswer,
        incorrect_answers: incorrectAnswers,
      } = data;
      const { randomAswer, currentQuestion } = this.state;
      const answers = [correctAnswer, ...incorrectAnswers];
      if (!randomAswer || currentQuestion !== data.question) {
        const randomized = randomQuestion(answers);
        return this.setState({
          currentQuestion: data.question,
          randomAswer: randomized,
        });
      }
    } else {
      return false;
    }
  }

  render() {
    return <div>{this.getButtons()}</div>;
  }
}

export default Aswer;

data, changeState, selected

Aswer.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
  changeState: propTypes.func.isRequired,
  selected: propTypes.bool.isRequired,
}