import React from 'react';
import { useParams, Link } from 'react-router-dom';

import Question from './Question';
import useFetch from '../customHooks/useFetch';

const Quiz = () => {
  const url = 'https://opentdb.com/api.php?amount=10&type=multiple';

  const { data, loading } = useFetch(url);

  const currentQuestionNumber = parseInt(useParams().questionNumber);
  const nextPage = currentQuestionNumber !== 10 ? currentQuestionNumber + 1 : 'final';

  if (loading) {
    return <></>;
  }

  return (
    <>
      <Question questionData={data} currentQuestionNumber={currentQuestionNumber} />
      <Link to={`/question/${nextPage}`}>next</Link>
    </>
  );
};

export default Quiz;
