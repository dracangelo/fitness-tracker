// src/components/History.js
import React from 'react';
import styled from 'styled-components';

const HistoryItem = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const History = ({ workoutHistory }) => {
  return (
    <div>
      <h2>Workout History</h2>
      {workoutHistory.map((workout, index) => (
        <HistoryItem key={index}>
          <strong>Exercise:</strong> {workout.exercise}<br />
          <strong>Sets:</strong> {workout.sets}<br />
          <strong>Repetitions:</strong> {workout.repetitions}<br />
          <strong>Date:</strong> {workout.date.toLocaleDateString()}
        </HistoryItem>
      ))}
    </div>
  );
};

export default History;
