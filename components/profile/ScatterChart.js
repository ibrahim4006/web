/* eslint-disable */
import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const ScatterChart = ({ chartData }) => {
  return (
    <Scatter
      data={chartData}
      options={{
        scales: {
          y: {
            beginAtZero: true,
            border: {
              color: "rgb(13,13,13)",
            },
            grid: {
              color: "rgba(247,246,241,0.15)",
              lineWidth: 2,
            },

            ticks: {
              stepSize: 5,
              color: "rgba(257,246,241,0.7)",
              padding: 10,
              font: {
                family: "Montserrat", // Set the font family
              },
            },
            offset: true,
          },
          x: {
            beginAtZero: true,
            border: {
              color: "rgb(13,13,13)",
            },
            grid: {
              color: "rgba(247,246,241,0.15)",
              lineWidth: 2,
            },
            ticks: {
              stepSize: 1,
              color: "rgba(257,246,241,0.7)",
              callback: function (value, index, values) {
                // Convert the x-axis value (week) to a string with the week number
                return value + ".hafta";
              },
              padding: 10,
              font: {
                family: "Montserrat", // Set the font family
              },
            },
            offset: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        layout: {
        },
      }}
    />
  );
};

export default ScatterChart;

/*<div
        style={{
          position: "absolute",
          top: "60px",
          backgroundColor: "rgb(13,13,13)",
          height: "40px",
          width: "100%",
        }}/>
        <div
        style={{
          position: "absolute",
          top: "60px",
          right: "120px",
          backgroundColor: "rgb(13,13,13)",
          height: "850px",
          width: "40px",
        }}/>
        <div
        style={{
          position: "absolute",
          top: "870px",
          left: "120px",
          backgroundColor: "rgb(13,13,13)",
          height: "40px",
          width: "40px",
        }}/>*/
