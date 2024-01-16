// src/components/Chart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { Chart } from 'chart.js/auto';

const ChartWrapper = styled.div`
  max-width: 800px;
  margin: 20px auto;
`;

const WorkoutChart = ({ workoutHistory }) => {
  const labels = workoutHistory.map((workout) =>
    workout.date.toLocaleDateString()
  );
  const setsData = workoutHistory.map((workout) => workout.sets);
  const repetitionsData = workoutHistory.map((workout) => workout.repetitions);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Sets',
        data: setsData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Repetitions',
        data: repetitionsData,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Count',
        },
      },
    },
  };

  return (
    <ChartWrapper>
      <h2>Workout Chart</h2>
      <Line data={chartData} options={chartOptions} />
    </ChartWrapper>
  );
};

export default WorkoutChart;
