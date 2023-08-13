import { useState } from 'react';
import './App.css';
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import React from 'react';
function App() {

  var startBtn;
  var resultBtn;

  const questionData = [
    {
      key: 1,
      question: 'What is the largest animal in the world ?',
      //correctAnswerMarkUpdate,
      //attempt,
      options: {
        option1: 'Shark',
        option2: 'Blue Whale',
        option3: 'Elephant',
        option4: 'Giraffe'
      },
      answer: 'Blue Whale'
    },
    {
      key: 2,
      question: "Which is the 29th state of India ?",
      //correctAnswerMarkUpdate,
      //attempt,
      options: {
        option1: "Telangana",
        option2: "Uttarakhand",
        option3: "Uttar Pradesh",
        option4: "Madhya Pradesh",
      },
      answer: "Telangana"
    },
    {
      key: 3,
      question: 'Who is the father of the nation ?',
      //correctAnswerMarkUpdate,
      //attempt,
      options: {
        option1: 'Mahatma Gandhi',
        option2: 'Jawaharlal Nehru',
        option3: 'Donald Trump',
        option4: 'Barrack Obama'
      },
      answer: 'Mahatma Gandhi'
    },
    {
      key: 4,
      question: 'Who was the inventor of electricity ?',
      //correctAnswerMarkUpdate,
      //attempt,
      options: {
        option1: 'Benjamin',
        option2: 'Vikings',
        option3: 'Benjamin Franklin',
        option4: 'Leonardo da Vinci'
      },
      answer: 'Benjamin Franklin'
    },
    {
      key: 5,
      question: 'Which metal is the lightest metal in world ?',
      //correctAnswerMarkUpdate,
      //attempt,
      options: {
        option1: 'Lithium',
        option2: 'Platinum',
        option3: 'Zinc',
        option4: 'Show Results'
      },
      answer: 'Lithium'
    },


  ]

  const [startFlag, setStartFlag] = useState(false);
  const [resultFlag, setResultFlag] = useState(false);
  const [buttonText, setButtonText] = useState('Start Quiz');
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  const [answered, setAnswered] = useState(0);

  function handleStart() {
    setStartFlag(true);
    setResultFlag(false); // Reset the resultFlag to false when Start Quiz is clicked
    setButtonText('Next Question');
  }

  function handleAnswer(answer) {
    const currentQuestion = questionData[answered];
    if (currentQuestion.answer === answer) {
      setQuestionsCorrect(questionsCorrect + 1);
    }

    if (answered === questionData.length - 1) {
      setResultFlag(true);
      setButtonText('Start Quiz');
    } else {
      setAnswered(answered + 1);
      setButtonText('Next Question');
    }
  }

  function handleShowResults() {
    setStartFlag(false);
    setResultFlag(true);
    setAnswered(0);
    setQuestionsCorrect(0);
    setButtonText('Show Results'); // Set the buttonText to 'Show Results'
  }

  let qCards;

  if (startFlag && !resultFlag) {
    qCards = (
      <div className='data'>
        <Card
          question={questionData[answered].question}
          options={questionData[answered].options}
          handleAnswer={handleAnswer}
        />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Quizz App</h1>
      {qCards}
      {!startFlag && !resultFlag && <Button onClick={handleStart}>{buttonText}</Button>}
      {startFlag && resultFlag && <Button onClick={handleShowResults}>{buttonText}</Button>}
    </div>
  );
}

export default App;