// WorkoutList.js
import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.div`
  max-width: 600px;
  margin: 20px auto;
`;

const ListItem = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const WorkoutList = ({ workouts }) => {
  return (
    <ListWrapper>
      {workouts.map((workout, index) => (
        <ListItem key={index}>
          <strong>Exercise:</strong> {workout.exercise}<br />
          <strong>Sets:</strong> {workout.sets}<br />
          <strong>Repetitions:</strong> {workout.repetitions}
        </ListItem>
      ))}
    </ListWrapper>
  );
};

export default WorkoutList;
