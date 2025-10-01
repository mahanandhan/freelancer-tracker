// Chart.js - Chart component with filler plugin registered

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,    // Import Filler plugin for fill support
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler    // Register Filler plugin here
);

const Chart = () => {
  const analysisData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Dark Blue Line',
        data: [12, 19, 3, 5, 2, 3, 12],
        borderColor: '#1E3A8A',
        backgroundColor: 'rgba(30, 58, 138, 0.2)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#1E3A8A',
        pointRadius: 5,
      },
      {
        label: 'Light Blue Line',
        data: [8, 15, 6, 9, 4, 6, 10],
        borderColor: '#38BDF8',
        backgroundColor: 'rgba(56, 189, 248, 0.2)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#38BDF8',
        pointRadius: 5,
      },
    ],
  };

  const analysisOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Analysis',
        font: { size: 18, weight: 'bold' },
      },
    },
    scales: { y: { beginAtZero: true } },
  };

  const corpalyticsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Dark Blue Bars',
        data: [15, 20, 18, 22, 30, 25, 10],
        backgroundColor: '#1E3A8A',
        borderRadius: 5,
      },
      {
        label: 'Light Blue Bars',
        data: [10, 12, 14, 15, 18, 16, 12],
        backgroundColor: '#38BDF8',
        borderRadius: 5,
      },
    ],
  };

  const corpalyticsOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Corpalytics',
        font: { size: 18, weight: 'bold' },
      },
    },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="space-y-10">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <Line data={analysisData} options={analysisOptions} />
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <Bar data={corpalyticsData} options={corpalyticsOptions} />
      </div>
    </div>
  );
};

export default Chart;
