// APP.JSX
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import flagsData from './flags';
import GuessBox from './GuessBox';

// STYLED COMPONENTS
const PageContainer = styled.div`
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
`;

const GameName = styled.h1`
  font-size: 2.5em;
  color: white;
  margin: 10px 0;
  position: fixed;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
`;

const IconImage = styled.img`
  width: 100px;
  height: 100px;
  position: fixed;
  top: 20px;
  left: calc(50% + 180px);
  z-index: 999;
`;

const FlagImage = styled.img`
  width: 800px;
  height: 500px;
  object-fit: contain;
  margin-bottom: 25px;
`;

const CurrentScore = styled.div`
  display: block;
  font-size: 2.5em;
  color: white;
  margin-bottom: 10px;
  span {
    font-weight: normal;
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
  display: ${(props) => (props.show ? 'block' : 'none')};
  background-color: ${(props) => (props.correct ? '#4CAF50' : '#f44336')};
  color: white;
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
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 100%;
  background-color: #851616;
  color: white;
  text-align: center;
  padding: 12px 0;
  border: 2px solid white;
  border-radius: 5px;

  .social-icon {
    transition: opacity 0.3s ease;
  }

  .social-icon:hover {
    opacity: 0.5;
  }

  .social-icon.portfolio-icon {
    position: relative;
    top: 20px;
    left: 10px;
  }

  .social-icon.linkedin-icon {
    position: relative;
    left: 25px;
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
  const correctSound = '/correct.mp3';
  const incorrectSound = '/incorrect.mp3';
  const finishedSound = '/finished.mp3';
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
    setCorrectAnswer('Correct!');
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
      <IconImage src='/icon.png' alt='Game Icon' />
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
        correct={correctAnswer === 'Correct!'}
      >
        <h2>{correctAnswer}</h2>
      </AnswerNotification>
      <GameFinishedNotification show={gameFinished} onClick={resetGame}>
        <h2>Game Finished!</h2>
        <p>Final Score: {score} of 227</p>
        <p>Click here to play again</p>
      </GameFinishedNotification>
      <Footer>
        <span style={{ marginRight: '25px' }}>© 2024 by Jani Hiltunen</span>
        <a
          href='https://jhiltunenportfolio.netlify.app'
          target='_blank'
          rel='noreferrer'
          style={{ marginRight: '15px', textDecoration: 'none' }}
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
          style={{ marginRight: '15px', textDecoration: 'none' }}
          title='My GitHub profile'
        >
          <img
            src='/githubicon.png'
            alt='My GitHub profile'
            className='social-icon'
          />
        </a>
        <a
          href='https://www.linkedin.com/in/hiltzy/'
          target='_blank'
          rel='noreferrer'
          style={{ marginRight: '15px', textDecoration: 'none' }}
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
