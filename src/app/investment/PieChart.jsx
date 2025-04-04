"use client"; // Ensure it runs only on the client side

import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register required Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Savings", "Investments", "Expenses", "Others"],
    datasets: [
      {
        data: [40, 25, 20, 15], // Example percentages
        backgroundColor: ["#4CAF50", "#FF9800", "#F44336", "#2196F3"], // Colors for each section
        hoverOffset: 8, // Creates a zoom effect on hover
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-lg font-bold text-center mb-4">Financial Breakdown</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
