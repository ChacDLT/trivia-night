import React from 'react';
import PropTypes from 'prop-types';

const Answers = ({ answers }) => (
  <>
    {answers.map((answer, index) => (
      <div key={index}>{answer}</div>
    ))}
  </>
);

export default Answers;

Answers.propTypes = {
  answers: PropTypes.array,
};
