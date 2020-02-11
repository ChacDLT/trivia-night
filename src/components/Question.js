import React from 'react';
import PropTypes from 'prop-types';

import Answers from './Answers';

const Question = ({ questionData, currentQuestionNumber }) => {
  const decodeHtml = html => {
    const txt = document.createElement('textarea');

    txt.innerHTML = html;

    return txt.value;
  };

  const shuffle = array => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const encodedQuestion = questionData[currentQuestionNumber - 1].question;
  const question = decodeHtml(encodedQuestion);

  const correctAnswer = questionData[currentQuestionNumber - 1].correct_answer;
  const incorrectAnswersArray = questionData[currentQuestionNumber - 1].incorrect_answers;

  incorrectAnswersArray.push(correctAnswer);

  for (let index = 0; index < incorrectAnswersArray.length; index++) {
    incorrectAnswersArray[index] = decodeHtml(incorrectAnswersArray[index]);
  }

  const answersArray = shuffle(incorrectAnswersArray);

  return (
    <>
      <p>{`Q${currentQuestionNumber}: ${question}`}</p>
      <Answers answers={answersArray}></Answers>
    </>
  );
};

Question.propTypes = {
  questionData: PropTypes.array,
  currentQuestionNumber: PropTypes.number,
};

export default Question;
