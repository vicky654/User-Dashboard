import React from 'react';
import ReactApexChart from 'react-apexcharts';

const categories = ['Completed', 'In Progress', 'Not Started', 'Initiated', 'Not Delivered'];

const series = [
  {
    name: 'Completed',
    data: [29, 0, 0, 0, 0],
  },
  {
    name: 'In Progress',
    data: [0, 54, 0, 0, 0],
  },
  {
    name: 'Not Started',
    data: [0, 0, 76, 0, 0],
  },
  {
    name: 'Initiated',
    data: [0, 0, 0, 14, 0],
  },
  {
    name: 'Not Delivered',
    data: [0, 0, 0, 0, 2],
  },
];

const colors = ['#a9a58c', '#3a8dde', '#5e9ea0', '#6a6db0', '#dc8744'];

const options: ApexCharts.ApexOptions = {
  chart: {
    type: 'bar',
    stacked: false,
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '60%',
    },
  },
  colors,
  xaxis: {
    categories,
  },
  legend: { show: false },
  dataLabels: {
    enabled: true,
    // formatter:any (val) => (val > 0 ? val : ''),
  },
};

const TestStackedChart = () => {
  return (
    <div className="panel p-0">
      <div className="flex justify-center items-center bg-primary text-white">
        <h5 className="text-lg font-semibold">Overall Count</h5>
      </div>
      <div className="p-4">
        <ReactApexChart
          series={series}
          options={options}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default TestStackedChart;
