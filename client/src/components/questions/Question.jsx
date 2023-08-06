import React, { useEffect, useState, useContext } from 'react';
import { QuizContext } from '../../contexts/QuizContext';
import httpService from '../../services/httpService';
import './question.css';
import EndGame from '../endGame/EndGame';
const Question = () => {
  const { isGameEnded } = useContext(QuizContext);
  const {
    askedQuestionIds,
    setAskedQuestionIds,
    pickedAnswer,
    setPickedAnswer,
    score,
    setScore,
    questions,
    setQuestions,
    answersHistory,
    setAnswersHistory,
    setIsGameEnded,
  } = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [answersChoices, setAnswersChoices] = useState([]);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    httpService.get('/questions').then(setQuestions).catch(console.error);
    httpService.get('/answers').then(setAnswers).catch(console.error);
  }, []);

  const getAnswersByQuestionId = (questionId) => {
    const conrespondingAnswers = answers.filter(
      (answer) => answer.question_id === questionId
    );
    setAnswersChoices(conrespondingAnswers);
  };

  const startQuiz = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    setCurrentQuestion(randomQuestion);
    setAskedQuestionIds([...askedQuestionIds, randomQuestion.id]);

    getAnswersByQuestionId(randomQuestion.id);
  };

  const sendResponseAndPassToNext = () => {
    const selectedAnswer = answersChoices.find(
      (answer) => answer.text === pickedAnswer
    );

    if (askedQuestionIds.length === questions.length) {
      if (selectedAnswer && selectedAnswer.is_good_answer) {
        setScore(score + 1);
      }
      setIsGameEnded(true);
      return;
    }

    if (pickedAnswer && currentQuestion) {
      if (!selectedAnswer) {
        setAlert(true);
        return;
      }

      if (selectedAnswer && selectedAnswer.is_good_answer) {
        setScore(score + 1);
      }

      const randomIndex = Math.floor(Math.random() * questions.length);
      const randomQuestion = questions[randomIndex];

      const responseObj = {
        id: selectedAnswer.id,
        question_id: currentQuestion.id,
        text: pickedAnswer,
        is_good_answer: selectedAnswer.is_good_answer,
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
                  onChange={(e) => setPickedAnswer(e.target.value)}
                />
                {answer.text}
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
