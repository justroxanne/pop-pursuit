import React, { useContext, useEffect } from 'react';
import { QuizContext } from '../../contexts/QuizContext';
import Question from '../questions/Question';
import History from '../history/History';
import httpService from '../../services/httpService';
import './quiz.css';

const Quiz = () => {
  const { setQuestions } = useContext(QuizContext);

  useEffect(() => {
    httpService.get('/questions').then(setQuestions).catch(console.error);
  }, []);

  return (
    <div className='quiz-container'>
      <History />
      <Question />
    </div>
  );
};

export default Quiz;
