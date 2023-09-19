/* eslint-disable */
import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js/auto";

ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale);

const RadarChart = ({ chartData, width }) => {
  function generatePoints(totalPoints) {
    const points = [];
    for (let index = 0; index < totalPoints; index++) {
      const translateDistance = ((width * 0.4434) / 5) * (index + 1);
      for (
        let index2 = 0;
        index2 < totalPoints && index < totalPoints - 2;
        index2++
      ) {
        points.push(
          <div
            key={`${index}-${index2}`}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${
                30 + index2 * 60
              }deg) translate(${translateDistance}px)`,
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "black",
              zIndex: 9,
            }}
          ></div>
        );
      }

      points.push(
        <div
          key={index}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) rotate(${
              30 + index * 60
            }deg) translate(${width * 0.4434}px)`,
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "black",
            zIndex: 9,
          }}
        ></div>
      );
    }
    

    return points;
  }

  return (
    <div style={{ width: width, margin: "20px", position: "relative" }}>
      <Radar
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          events: ["hover"],
          scales: {
            r: {
              angleLines: {
                color: "black",
                lineWidth: 1,
              },
              grid: {
                circular: true,
                color: "black",
                lineWidth: 2,
              },
              beginAtZero: true,
              ticks: {
                display: false,
                maxTicksLimit: 1,
              },
              pointLabels: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          layout: {
            padding: `${width * 0.0566}`,
          },
        }}
      />

      {generatePoints(6)}
    </div>
  );
};

export default RadarChart;
