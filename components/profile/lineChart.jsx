/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Chart, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Denemedrop from "./denemedrop";
import { data } from "@/components/profile/Data";

const LineChart = ({ chartData, dataindex, index, setDataindex }) => {

  

  return (
    <div
      style={{
        height: "600px",
        paddingLeft: "190px",
        paddingRight: "170px",
      }}
      className="hover:text-red-800"
    >
      <Line
        data={{
          labels: [
            "10.hafta",
            "11.hafta",
            "12.hafta",
            "13.hafta",
            "14.hafta",
            "15.hafta",
            "16.hafta",
            "17.hafta",
            "18.hafta",
            "19.hafta",
            "20.hafta",
            "21.hafta",
          ],
          datasets: [
            {
              label: "MATEMATİK",
              data: [12, 19, 3, 5, 6, 3, 5, 8, 3, 8, 10, 2],
              backgroundColor: dataindex == "matematik" ? "#F7F6F1" : "#F7F6F110",
              borderColor: dataindex == "matematik" ? "#F7F6F1" : "#F7F6F110",
              tension: 0.2,
              pointRadius: 3,
              pointHoverRadius: 6,
            },
            {
              label: "FİZİK",
              data: [7, 11, 5, 8, 3, 7, 11, 5, 13, 3, 8, 10],
              backgroundColor: dataindex == "fizik" ? "#F7F6F1" : "#F7F6F110",
              borderColor: dataindex == "fizik" ? "#F7F6F1" : "#F7F6F110",
              tension: 0.2,
              pointRadius: 3,
              pointHoverRadius: 6,
            },
            {
              label: "KİMYA",
              data: [9, 10, 12, 10, 14, 11, 13, 16, 17, 11, 13, 16],
              backgroundColor: dataindex == "kimya" ? "#F7F6F1" : "#F7F6F110",
              borderColor: dataindex == "kimya" ? "#F7F6F1" : "#F7F6F110",
              tension: 0.2,
              pointRadius: 3,
              pointHoverRadius: 6,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          events: [""],
          scales: {
            y: {
              border: {
                display: false,
              },
              grid: {
                display: false,
              },
            },
            x: {
              beginAtZero: true,
              border: {
                display: false,
              },
              grid: {
                display: false,
              },
              min: 0.5,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          layout: {
            padding: {
              right: 50,
            },
          },
          // onHover: (e, activeEls, chart) => {
          //   if (activeEls.length === 0) {
          //     chart.data.datasets.forEach((dataset) => {
          //       dataset.backgroundColor =
          //         dataset.backgroundColor.length === 9
          //           ? dataset.backgroundColor.slice(0, -2)
          //           : dataset.backgroundColor;
          //       dataset.borderColor =
          //         dataset.borderColor.length === 9
          //           ? dataset.borderColor.slice(0, -2)
          //           : dataset.borderColor;
          //     });
          //     chart.update();
          //     return;
          //   }

          //   const hoveredEl = chart.getElementsAtEventForMode(
          //     e,
          //     "point",
          //     {
          //       intersect: true,
          //     },
          //     true
          //   )[0];

            

          //   (hoveredEl.datasetIndex = dataindex),
          //     (hoveredEl.index = index),
          //     console.log(dataindex);

          //   chart.data.datasets.forEach((dataset, i) => {
          //     dataset.backgroundColor =
          //       hoveredEl.datasetIndex === i ||
          //       dataset.backgroundColor.length === 9
          //         ? dataset.backgroundColor
          //         : dataset.backgroundColor + "10";

          //     dataset.borderColor =
          //       hoveredEl.datasetIndex === i || dataset.borderColor.length === 9
          //         ? dataset.borderColor
          //         : dataset.borderColor + "10";
          //   });

          //   chart.data.datasets[dataindex].backgroundColor = "red";
          //   chart.data.datasets[dataindex].borderColor = "red";
          //   chart.update();
          // },
        }}
      />
    </div>
  );
};

export default LineChart;
