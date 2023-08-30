import React, { useContext, useRef, useEffect } from 'react';
import { QuizContext } from '../../contexts/QuizContext';
import { BiCheck } from 'react-icons/bi';
import { RiCloseFill } from 'react-icons/ri';
import './history.css';

const History = () => {
  const { answersHistory } = useContext(QuizContext);
  const historyRef = useRef(null);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [answersHistory]);

  return (
    <div className='history'>
      <h2>Mes réponses</h2>
      <ul ref={historyRef}>
        {answersHistory.map((answer, index) => (
          <li
            key={answer.id}
            style={{ color: answer.isCorrect ? '#44FF00' : 'red' }}
            className='choosen-answer-container'
          >
            {index + 1}. {answer.text}{' '}
            {answer.isCorrect ? <BiCheck /> : <RiCloseFill />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
