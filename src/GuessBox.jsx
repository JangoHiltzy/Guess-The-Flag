// GUESSBOX.JSX
import React, { useState } from "react";
import styled from "styled-components";

const normalise = (value) => value.toUpperCase().replace(/[^A-Z\s]/g, "");

// STYLED COMPONENTS
const StyledForm = styled.form`
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 1em;
  margin-right: -1em;
  height: 3em;
  max-width: 20em;

  // MOBILE
  @media (max-width: 768px) {
    font-size: 1.2em;
    max-width: 10em;
    margin-left: auto;
    margin-right: auto;
  }
`;

const StyledInput = styled.input`
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  padding: 0.4em 0.8em;
  border: 0.125em solid #000000;
  border-radius: 0.3125em;
  margin-left: auto;
  margin-right: auto;

  // MOBILE
  @media (max-width: 768px) {
    font-size: 0.8em;
    max-width: 12em;
    padding: 0.4em 0.8em;
    margin-left: auto;
    margin-right: auto;
  }
`;

const SubmitButton = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  padding: 0.4em 0.8em;
  border: 0.125em solid #000000;
  border-radius: 0.3125em;
  background-color: #ffffff;
  color: #000000;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;

  // MOBILE
  @media (max-width: 768px) {
    font-size: 0.8em;
    padding: 0.4em 0.8em;
    margin-left: auto;
    margin-right: auto;
    max-width: 6em;
  }
`;

// GUESSBOX LOGIC
const GuessBox = ({ answer, onCorrect, onIncorrect }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value.toUpperCase();
    setValue(inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const normalizedUserInput = normalise(value);
    const normalizedCorrectAnswer = normalise(answer);

    if (normalizedUserInput === normalizedCorrectAnswer) {
      onCorrect(); // CALL ONCORRECT FUNCTION
    } else {
      onIncorrect(); // CALL ONINCORRECT FUNCTION
    }

    setValue(""); // RESET THE INPUT FIELD
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
