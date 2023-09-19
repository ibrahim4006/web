/* eslint-disable */
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./BarChart.css";

const BarChart = ({ chartData, width, text1, text2 }) => {
  return (
    <div className="bar-container">
      <span className="plus top-left">+</span>
      <span className="plus top-right">+</span>
      <span className="plus bottom-left">+</span>
      <span className="plus bottom-right">+</span>

      <div className="bar-top">
        <span className="bar-name">
          {text1}
          <br />
          {text2}
        </span>
        <div className="bar-date-container">
          <span className="bar-date-text">son hafta</span>
          <span className="bar-date-arrow">{">"}</span>
        </div>
      </div>

      <div className="bar-chart-container" style={{ width: width }}>
        <Bar
          data={chartData}
          options={{
            events: ["click"],
            scales: {
              y: {
                display: false,
                beginAtZero: true,
              },
              x: {
                display: false,
                beginAtZero: true,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
          style={{ height: "200px" }}
        />
      </div>

      <div className="bar-value-container">
        <span className="bar-value-unit">puan</span>
        <span className="bar-value-digit">125</span>
      </div>
    </div>
  );
};

export default BarChart;
