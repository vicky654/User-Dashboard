import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type ChartItem = {
  label: string;
  value: number;
  color: string;
};

interface BarChartProps {
  data: ChartItem[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const barChartData = {
    labels: data.map((d) => d.label),
    datasets: [
      {
        label: "Overall Count",
        data: data.map((d) => d.value),
        backgroundColor: data.map((d) => d.color),
        borderRadius: 6,
        barThickness: 30,
      },
    ],
  };

  const barChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
   plugins: {
    legend: {
      display: false, // 🔴 Hides the label/legend
    },
  },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#000" },
      },
      y: {
        grid: { display: false },
        ticks: { color: "#000" },
      },
    },
  };

  return <Bar data={barChartData} options={barChartOptions} />;
};

export default BarChart;
