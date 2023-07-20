import React, { useContext } from 'react';
import { QuizContext } from '../../contexts/QuizContext';
import { BiCheck } from 'react-icons/bi';
import { RiCloseFill } from 'react-icons/ri';
import './history.css';

const History = () => {
  const { questions, answersHistory } = useContext(QuizContext);

  return (
    <div className='history'>
      <h2>Mes réponses</h2>
      <ul>
        {answersHistory.map((answer, index) => (
          <li
            key={answer.id}
            style={{ color: answer.is_good_answer ? '#44FF00' : 'red' }}
            className='choosen-answer-container'
          >
            {index + 1}. {answer.text}{' '}
            {answer.is_good_answer ? <BiCheck /> : <RiCloseFill />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
