/* eslint-disable react/prop-types */
import "./answer.css";

const Answer = ({ currentQuestion, setPickedAnswer }) => {
  return (
    <div>
      <ul>
        {currentQuestion.answers.map((answer) => (
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
  );
};

export default Answer;
