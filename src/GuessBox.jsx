// GUESSBOX.JSX
import React, { useState } from 'react';
import styled from 'styled-components';

const normalise = (value) => value.toUpperCase().replace(/[^A-Z\s]/g, '');

// STYLED COMPONENTS
const StyledForm = styled.form`
  margin-top: 1em;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
  height: 3em;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 0.5em;
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
  border: 2px solid #000000;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  margin-left: 1em;
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
  padding: 0.4em 0.8em;
  border: 2px solid #000000;
  border-radius: 5px;
  background-color: #ffffff;
  color: #000000;
  cursor: pointer;
`;

// GUESSBOX LOGIC
const GuessBox = ({ answer, onCorrect, onIncorrect }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value.toUpperCase();
    setValue(inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const normalizedUserInput = normalise(value);
    const normalizedCorrectAnswer = normalise(answer);

    if (normalizedUserInput === normalizedCorrectAnswer) {
      onCorrect();
    } else {
      onIncorrect();
    }

    setValue('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type='text'
        value={value}
        onChange={handleChange}
        placeholder='Type your guess here...'
        autoFocus
        spellCheck={false}
      />
      <SubmitButton type='submit' disabled={!value.trim()}>
        Submit
      </SubmitButton>
    </StyledForm>
  );
};

export default GuessBox;
