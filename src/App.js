// src/App.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Components/Header';
import WorkoutForm from './Components/WorkoutForm';
import WorkoutList from './Components/WorkoutList';
import History from './Components/History';
import Chart from './Components/Chart'; // Make sure to update the import

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow flex items to wrap to the next line */
  justify-content: space-between;
  max-width: 1200px;
  margin: 20px auto;
`;

const LeftContainer = styled.div`
  flex: 0 0 400px; /* Set a fixed width for the left container */
  margin-right: 20px;
`;

const RightContainer = styled.div`
  flex: 1; /* Allow the right container to take remaining space */
  margin-top: 20px; /* Add top margin to create space between WorkoutList and History */
`;

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [workoutHistory, setWorkoutHistory] = useState([]);

  const handleAddWorkout = (workoutData) => {
    setWorkouts([...workouts, workoutData]);

    const newWorkout = { ...workoutData, date: new Date() };
    setWorkoutHistory([...workoutHistory, newWorkout]);
  };

  return (
    <div className="App">
      <Header />
      <MainContainer>
        <LeftContainer>
          <WorkoutForm onSubmit={handleAddWorkout} />
        </LeftContainer>
        <RightContainer>
          <WorkoutList workouts={workouts} />
          <History workoutHistory={workoutHistory} />
        </RightContainer>
      </MainContainer>
      <Chart workoutHistory={workoutHistory} />
    </div>
  );
}

export default App;
