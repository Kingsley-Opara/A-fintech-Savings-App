"use client"; // Ensure it runs only on the client side

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Total Savings",
        data: [100, 250, 400, 600, 850, 1200],
        fill: false,
        borderColor: "#4F46E5", // Indigo
        backgroundColor: "#4F46E5",
        tension: 0.4, // Smooth curves
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full mx-auto dark:bg-gray-800 max-w-[90%]">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 dark:text-gray-200">Savings Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
