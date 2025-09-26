import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type ChartItem = {
  label: string;
  value: number;
  color: string;
};

interface DonutChartProps {
  data: ChartItem[];
}

const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
  const donutChartData = {
    labels: data.map((d) => d.label),
    datasets: [
      {
        label: "Overall Count",
        data: data.map((d) => d.value),
        backgroundColor: data.map((d) => d.color),
        cutout: "70%",
      },
    ],
  };

  return (
    <Doughnut
      data={donutChartData}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "right",
            labels: {
              color: "#000",
              boxWidth: 20,
              padding: 16,
              font: {
                size: 12,
                weight: "bold",
              },
            },
          },
        },
      }}
    />
  );
};

export default DonutChart;
