/* eslint-disable */
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = ({ chartData, width, text1, text2 }) => {
  return (
    <div className="bar-container" style={{ height: "380px", width: "505px" }}>
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
        {/*<div className="bar-date-container" style={{ display: "none"}}>
          <span className="bar-date-text">son hafta</span>
          <span className="bar-date-arrow">{">"}</span>
        </div>*/}
      </div>

      <div
        className="bar-chart-container"
        style={{ width: width, height: "200px", overflow: "visible" }}
      >
        <Bar
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            events: [""],
            scales: {
              y: {
                display: false,
                beginAtZero: true,
                grace: "5%",
                min: -1,
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
          style={{ display: "flex", overflow: "visible", padding: "10px" }}
        />
      </div>
      <div
        style={{ height: "1px", backgroundColor: "black", width: "350px" }}
      />
      <div className="bar-value-container">
        <span className="bar-value-unit">puan</span>
        <span className="bar-value-digit">125</span>
      </div>
    </div>
  );
};

export default BarChart;
