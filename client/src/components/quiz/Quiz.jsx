import React, { useContext } from 'react';
import { QuizContext } from '../../contexts/QuizContext';
import Question from '../questions/Question';
import History from '../history/History';
import EndGame from '../endGame/EndGame';
import './quiz.css';

const Quiz = () => {
  const { isGameEnded } = useContext(QuizContext);
  return (
    <div className='quiz-container'>
      {isGameEnded && <EndGame />}
      <History />
      <Question />
    </div>
  );
};

export default Quiz;
