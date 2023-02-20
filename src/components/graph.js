import React, { useState } from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65, 37],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "Second dataset",
      data: [23, 43, 65, 21, 24, 45, 27],
      fill: false,
      borderColor: "rgb(54, 162, 235)",
      tension: 0.1,
    },
  ],
};

const LineChart = () => {
  const [chartData, setChartData] = useState(data);

  const handleChange = (event) => {
    const value = event.target.value;

    const newData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "First dataset",
          data: [33 * value, 53 * value, 85 * value, 41 * value, 44 * value, 65 * value, 37 * value],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
        {
          label: "Second dataset",
          data: [23 * value, 43 * value, 65 * value, 21 * value, 24 * value, 45 * value, 27 * value],
          fill: false,
          borderColor: "rgb(54, 162, 235)",
          tension: 0.1,
        },
      ],
    };

    setChartData(newData);
  };

  return (
    <div>
      <h2>Line Chart</h2>
      <Line data={chartData} />
      <div>
        <label htmlFor="multiplier">Multiplier: </label>
        <input type="number" id="multiplier" name="multiplier" onChange={handleChange} />
      </div>
    </div>
  );
};

export default LineChart;
