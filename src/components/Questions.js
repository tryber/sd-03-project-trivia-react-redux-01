import React from 'react';
import PropTypes from 'prop-types';

const GetQuestions = ({ data }) => {
  if (data) {
    const { category, question } = data;
    return (
      <div>
        <p data-testid="question-category">{category}</p>
        <p data-testid="question-text">{question}</p>
      </div>
    )
  };
  return false;
}

export default GetQuestions;

GetQuestions.propTypes = {
  questoes: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
}
