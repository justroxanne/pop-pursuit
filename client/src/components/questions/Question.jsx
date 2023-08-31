import React, { useEffect, useState, useContext } from 'react';
import { QuizContext } from '../../contexts/QuizContext';
import httpService from '../../services/httpService';
import './question.css';
import EndGame from '../endGame/EndGame';

const Question = () => {
  const {
    askedQuestionIds,
    setAskedQuestionIds,
    pickedAnswer,
    setPickedAnswer,
    score,
    setScore,
    questions,
    answersHistory,
    setAnswersHistory,
    isGameEnded,
    setIsGameEnded,
  } = useContext(QuizContext);

  console.log(typeof questions);

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [alert, setAlert] = useState(false);

  const startQuiz = () => {
    for (let i = 0; i < questions.length; i++) {
      const question = questions.allQuestions[0];

      if (!askedQuestionIds.includes(question.id)) {
        setCurrentQuestion(question);
        setAskedQuestionIds([...askedQuestionIds, question.id]);
      }
    }
  };

  const sendResponseAndPassToNext = () => {
    httpService.get(`/answers/verify/${pickedAnswer.id}`).then((res) => {
      const isCorrect = res.isCorrect;

      if (askedQuestionIds.length === questions.length) {
        if (pickedAnswer && isCorrect) {
          setScore(score + 1);
        }
        setIsGameEnded(true);
        return;
      }

      if (pickedAnswer && currentQuestion) {
        if (!pickedAnswer) {
          setAlert(true);
          return;
        }

        if (pickedAnswer && isCorrect) {
          setScore(score + 1);
        }

        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex];

        const responseObj = {
          id: pickedAnswer.id,
          question_id: currentQuestion.id,
          text: pickedAnswer.text,
          isCorrect: isCorrect,
        };

        if (askedQuestionIds.includes(randomQuestion.id)) {
          sendResponseAndPassToNext();
          return;
        }
        setCurrentQuestion(randomQuestion);
        setAskedQuestionIds([...askedQuestionIds, randomQuestion.id]);
        setAnswersHistory([...answersHistory, responseObj]);
        setAlert(false);

        getAnswersByQuestionId(randomQuestion.id);
      } else {
        setAlert(true);
      }
    });
  };

  return (
    <div className='questions'>
      {isGameEnded && <EndGame />}
      {currentQuestion ? (
        <div className='question-container'>
          <h4>{currentQuestion.text}</h4>
          <ul>
            {answersChoices.map((answer) => (
              <li key={answer.id}>
                <input
                  type='radio'
                  name='answer'
                  id={answer.id}
                  value={answer.text}
                  onChange={(e) =>
                    setPickedAnswer({
                      text: e.target.value,
                      id: parseInt(e.target.id),
                    })
                  }
                />
                <label htmlFor={answer.id}>{answer.text}</label>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h2
          style={{
            fontSize: '3em',
            alignSelf: 'center',
            height: '30%',
            marginTop: '2em',
          }}
        >
          Prêt ?
        </h2>
      )}
      {alert && <div className='alert'>Choisis une réponse !</div>}
      <button
        className='next-step-btn'
        onClick={currentQuestion ? sendResponseAndPassToNext : startQuiz}
      >
        {currentQuestion ? 'Question suivante' : 'Démarrer le quiz'}
      </button>
      <h3 className='score'>
        Score : {score}/{questions.length}
      </h3>
    </div>
  );
};

export default Question;
