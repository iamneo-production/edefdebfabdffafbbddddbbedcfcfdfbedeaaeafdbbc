import { useState } from 'react';
import './App.css';
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import React from 'react';
function App() {

  var qCards;
  var startBtn;
  var resultBtn;

  const questionData = [
    {
      key:1,
      question:'What is the largest animal in the world ?',
      //correctAnswerMarkUpdate,
      //attempt,
      options : {
        option1: 'Shark',
        option2: 'Blue Whale',
        option3: 'Elephant',
        option4: 'Giraffe'
      },
      answer : 'Blue Whale'
    },
    {
      key : 2,
      question : "Which is the 29th state of India ?",
      //correctAnswerMarkUpdate,
      //attempt,
      options : {
        option1 : "Telangana",
        option2 : "Uttarakhand",
        option3 : "Uttar Pradesh",
        option4 : "Madhya Pradesh",
      },
      answer : "Telangana"
    },
    {
      key:3,
      question:'Who is the father of the nation ?',
      //correctAnswerMarkUpdate,
      //attempt,
      options : {
        option1: 'Mahatma Gandhi',
        option2: 'Jawaharlal Nehru',
        option3: 'Donald Trump',
        option4: 'Barrack Obama'
      },
      answer : 'Mahatma Gandhi'
    },
    {
      key:4,
      question:'Who was the inventor of electricity ?',
      //correctAnswerMarkUpdate,
      //attempt,
      options : {
        option1: 'Benjamin',
        option2: 'Vikings',
        option3: 'Benjamin Franklin',
        option4: 'Leonardo da Vinci'
      },
      answer : 'Benjamin Franklin'
    },
    {
      key:5,
      question:'Which metal is the lightest metal in world ?',
      //correctAnswerMarkUpdate,
      //attempt,
      options : {
        option1: 'Lithium',
        option2: 'Platinum',
        option3: 'Zinc',
        option4: 'Gold'
      },
      answer : 'Lithium'
    },

  ]
  const [startFlag, setStartFlag] = useState(false);
  const [resultFlag, setResultFlag] = useState(false);
  const [buttonText, setButtonText] = useState('Start Quiz');
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  const [answered, setAnswered] = useState(0);

  function handleStart()
  {
    setStartFlag(true);
    setButtonText('Started');
  }

  if(startFlag)
  {
    qCards = 
    <div>
      {
        questionData.map((data) => 
          <Card question= {data.question} options = {{
            option1 : data.options.option1,
            option2 : data.options.option2,
            option3 : data.options.option3,
            option4 : data.options.option4,
          }} > </Card>)
      }
    </div> 

    startBtn = <></>;
  }
  else
  {
    startBtn = <Button onClick = {handleStart}>Start Quiz</Button>;
  }
  
  return (
    <div className="App">
      <h1>
        Quizz App
      </h1>
      {qCards}
      {startBtn}
    </div>
  );
}

export default App;