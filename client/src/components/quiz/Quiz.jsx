import React from 'react';
import Question from '../questions/Question';
import History from '../history/History';
import './quiz.css';

const Quiz = () => {
  return (
    <div className='quiz-container'>
      <History />
      <Question />
    </div>
  );
};

export default Quiz;
