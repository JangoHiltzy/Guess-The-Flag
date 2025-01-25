import React, { useState, useEffect } from "react";
import styled from "styled-components";
import flagsData from "./flags";
import GuessBox from "./GuessBox";

// STYLED COMPONENTS
const PageContainer = styled.div`
padding: 0;
overflow: hidden;
position: fixed
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-image: url("/background.jpg");
background-size: cover;
margin: 0;
background-position: center;

  //MOBILE
  @media (max-width: 768px) {
    padding: 5%;
  }
`;

const GameName = styled.h1`
  font-size: 2.5em;
  position: fixed;
  top: 4vh;
  transform: translateX(0%);
  z-index: 999;
  color: white;
  margin: 10px 0;
  white-space: nowrap;

  //MOBILE
  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const FlagImage = styled.img`
  width: 800px;
  height: 500px;
  object-fit: contain;
  margin-bottom: 25px;

  //MOBILE
  @media (max-width: 768px) {
    height: auto;
    width: 100%;
    max-width: 18.75em;
  }
`;

const CurrentScore = styled.div`
  font-size: 2.5em;
  display: block;
  color: white;
  text-align: center;
  margin-bottom: 10px;
  span {
    font-weight: normal;
  }

  //MOBILE
  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

const AnswerNotification = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  display: ${(props) => (props.show ? "block" : "none")};
  background-color: ${(props) => (props.correct ? "#4CAF50" : "#f44336")};
  color: white;

  //MOBILE
  @media (max-width: 768px) {
    font-size: 1.2em;
    padding: 1em;
  }
`;

const GameFinishedNotification = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  background-color: #000000;
  color: white;
  display: ${(props) => (props.show ? "block" : "none")};

  // MOBILE
  @media (max-width: 768px) {
    font-size: 1.2em;
    padding: 1em;
  }
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: #851616;
  color: white;
  text-align: center;
  padding: 1.25 0em;
  border-radius: 0.3125em;

  .footer-text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1em;
  }

  .social-icon {
    margin: 0.625em;
    width: 1.875em;
    height: 1.875em;
    transition: opacity 0.3s ease;
  }

  .social-icon:hover {
    opacity: 0.5;
  }

  .social-icon.portfolio-icon {
    position: relative;
    left: -2em;
    bottom: 0px;
  }

  .social-icon.github-icon {
    position: relative;
    left: 0em;
    bottom: 0px;
  }

  .social-icon.linkedin-icon {
    position: relative;
    left: 2em;
    bottom: 0px;
  }
`;

// GAME LOGIC
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const App = () => {
  const [flagList, setFlagList] = useState(() => shuffle(flagsData));
  const [score, setScore] = useState(0);
  const [answeredFlags, setAnsweredFlags] = useState(0);
  const totalFlags = flagsData.length;
  const [gameFinished, setGameFinished] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const correctSound = "/correct.mp3";
  const incorrectSound = "/incorrect.mp3";
  const finishedSound = "/finished.mp3";
  const correctAudio = new Audio(correctSound);
  const incorrectAudio = new Audio(incorrectSound);

  useEffect(() => {
    const finishedAudio = new Audio(finishedSound);
    if (answeredFlags === totalFlags) {
      setGameFinished(true);
      finishedAudio.play();
    }
  }, [answeredFlags, totalFlags, finishedSound]);

  const nextFlag = () => {
    setAnsweredFlags(answeredFlags + 1);
    setFlagList(flagList.length > 1 ? flagList.slice(1) : shuffle(flagsData));
  };

  const onCorrect = () => {
    setCorrectAnswer("Correct!");
    setScore(score + 1);
    nextFlag();
    correctAudio.play();
    setTimeout(() => {
      setCorrectAnswer(null);
    }, 1500);
  };

  const onIncorrect = () => {
    const correctAnswer = flagList[0].name;
    setCorrectAnswer(`Incorrect! The correct answer is: ${correctAnswer}`);
    nextFlag();
    incorrectAudio.play();
    setTimeout(() => {
      setCorrectAnswer(null);
    }, 3000);
  };

  const resetGame = () => {
    setScore(0);
    setAnsweredFlags(0);
    setFlagList(shuffle(flagsData));
    setGameFinished(false);
  };

  const { name, imageUrl } = flagList[0];

  return (
    <PageContainer>
      <GameName>Guess The Flag</GameName>
      <FlagImage src={imageUrl} alt={name} />
      {!gameFinished && (
        <GuessBox
          answer={name}
          onCorrect={onCorrect}
          onIncorrect={onIncorrect}
        />
      )}
      <CurrentScore>
        Score: <span>{score}</span>
      </CurrentScore>
      <AnswerNotification
        show={correctAnswer !== null}
        onClick={() => setCorrectAnswer(null)}
        correct={correctAnswer === "Correct!"}
      >
        <h2>{correctAnswer}</h2>
      </AnswerNotification>

      <GameFinishedNotification show={gameFinished} onClick={resetGame}>
        <h2>Game Finished!</h2>
        <p>
          Final Score: {score} of {totalFlags}
        </p>
        <p>Click here to play again</p>
      </GameFinishedNotification>
      <Footer>
        <div
          className='footer-text'
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span>© 2024 by Jani Hiltunen</span>
        </div>

        <a
          href='https://jhiltunenportfolio.netlify.app'
          target='_blank'
          rel='noreferrer'
          title='My portfolio page'
        >
          <img
            src='/portfolioicon.png'
            alt='Portfolio'
            className='social-icon portfolio-icon'
          />
        </a>
        <a
          href='https://github.com/JangoHiltzy'
          target='_blank'
          rel='noreferrer'
          title='My GitHub profile'
        >
          <img
            src='/githubicon.png'
            alt='My GitHub profile'
            className='social-icon github-icon'
          />
        </a>
        <a
          href='https://www.linkedin.com/in/hiltzy/'
          target='_blank'
          rel='noreferrer'
          title='My LinkedIn profile'
        >
          <img
            src='/linkedinicon.png'
            alt='My LinkedIn profile'
            className='social-icon linkedin-icon'
          />
        </a>
      </Footer>
    </PageContainer>
  );
};

export default App;
