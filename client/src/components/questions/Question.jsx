import React, { useEffect, useState, useContext } from 'react';
import { QuizContext } from '../../contexts/QuizContext';
import axios from 'axios';
import './question.css';

const Question = () => {
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
  } = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);

  const url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${url}/api/questions`)
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const startQuiz = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    setCurrentQuestion(randomQuestion);
    setAskedQuestionIds([...askedQuestionIds, randomQuestion.id]);

    axios
      .get(`${url}/api/answers/question/${randomQuestion.id}`)
      .then((res) => {
        setAnswers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendResponseAndPassToNext = () => {
    if (askedQuestionIds.length === questions.length) {
      alert('Toutes les questions ont été posées. Le quiz est terminé.');
      return;
    }

    if (pickedAnswer && currentQuestion) {
      const selectedAnswer = answers.find(
        (answer) => answer.text === pickedAnswer
      );
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

      axios
        .get(`${url}/api/answers/question/${randomQuestion.id}`)
        .then((res) => {
          setAnswers(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  console.log('askedQuestionIds', askedQuestionIds);

  return (
    <div className='questions'>
      {currentQuestion ? (
        <div className='question-container'>
          <h4>{currentQuestion.text}</h4>
          <ul>
            {answers.map((answer) => (
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
