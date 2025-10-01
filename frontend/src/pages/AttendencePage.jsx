import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

const getDaysInMonth = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
};

const initialAttendanceData = {
  1: 'Present',
  2: 'Present',
  3: 'Present',
  4: 'Present',
  5: 'Present',
  6: 'Present',
  7: 'Present',
  8: 'Present',
  9: 'Present',
  10: 'Present',
  11: 'Present',
  12: 'Present',
  13: 'Present',
  14: 'Present',
  15: 'Present',
};

const AttendancePage = () => {
  const [attendanceData, setAttendanceData] = useState(initialAttendanceData);

  const markPresentToday = () => {
    const today = new Date().getDate();
    setAttendanceData((prev) => ({ ...prev, [today]: 'Present' }));
  };

  const renderCalendar = () => {
    const today = new Date().getDate();
    const totalDays = getDaysInMonth();
    const headers = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const days = [];

    for (let d = 1; d <= totalDays; d++) {
      const colorClass = attendanceData[d] === 'Present' ? 'bg-blue-500' : 'bg-gray-200';
      days.push(
        <div
          key={d}
          title={`Day ${d}: ${attendanceData[d] || 'No Record'}`}
          className={`w-9 h-9 rounded-full text-white flex items-center justify-center mx-1 my-1 font-semibold text-base ${colorClass} ${
            d === today ? 'ring-4 ring-blue-300' : ''
          }`}
        >
          {d}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-7 gap-1 p-2">
        {headers.map((day, index) => (
          <span key={`${day}-${index}`} className="font-bold text-blue-900 text-xs text-center">
            {day}
          </span>
        ))}
        {days}
      </div>
    );
  };

  const presentCount = Object.values(attendanceData).filter((v) => v === 'Present').length;
  const totalDays = getDaysInMonth();
  const remainingCount = Math.max(0, totalDays - presentCount);

  const chartData = {
    labels: ['Present', 'Remaining'],
    datasets: [
      {
        label: 'Days',
        backgroundColor: ['#3B82F6', '#D1D5DB'],
        data: [presentCount, remainingCount],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Attendance Overview',
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 1,
          },
        },
      ],
    },
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{ background: 'linear-gradient(110deg, #A5CBF6 0%, #F8FBFF 100%)' }}
    >
      <button
        onClick={markPresentToday}
        className="mb-8 rounded-full px-10 py-3 text-lg font-bold shadow bg-blue-500 text-white hover:bg-blue-600"
      >
        Mark Present Today
      </button>

      <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row gap-16 items-start w-[95vw] max-w-2xl">
        <div className="flex flex-col">
          <div className="text-2xl font-semibold mb-5">Professional Attendances</div>
          <div className="flex flex-row gap-12">
            <div className="bg-white rounded-xl shadow p-4">
              <div className="mb-2 text-lg font-semibold">Calendar</div>
              {renderCalendar()}
            </div>
            <div className="w-60 flex flex-col justify-center items-center">
              <div className="mb-2 text-lg font-semibold">Attendance</div>
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;
