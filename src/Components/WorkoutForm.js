// src/components/WorkoutForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  max-width: 400px;
  margin: 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LeftAlignedWrapper = styled.div`
  float: left;
  margin-right: 20px;
`;

const WorkoutForm = ({ onSubmit }) => {
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const [repetitions, setRepetitions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and submit the form data
    if (exercise && sets && repetitions) {
      onSubmit({
        exercise,
        sets: parseInt(sets, 10),
        repetitions: parseInt(repetitions, 10),
      });

      // Clear the form fields after submission
      setExercise('');
      setSets('');
      setRepetitions('');
    }
  };

  return (
    
    <LeftAlignedWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Exercise Name</Label>
          <Input
            type="text"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Sets</Label>
          <Input
            type="number"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Repetitions</Label>
          <Input
            type="number"
            value={repetitions}
            onChange={(e) => setRepetitions(e.target.value)}
            required
          />
        </FormGroup>
        <Button type="submit">Add Workout</Button>
      </FormWrapper>
    </LeftAlignedWrapper>
  );
};

export default WorkoutForm;
