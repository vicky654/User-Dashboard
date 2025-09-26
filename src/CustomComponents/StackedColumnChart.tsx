import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface Props {
    title?: string;
    series: ApexAxisChartSeries;
    categories: string[];
    showCode?: boolean;
    toggleCode?: () => void;
}

const StackedColumnChart: React.FC<Props> = ({ title, series, categories, toggleCode }) => {
    const options: ApexCharts.ApexOptions = {
        chart: {
            type: 'bar',
            stacked: true,
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories,
        },
        plotOptions: {
            bar: {
                horizontal: true, // 👈 Ensures vertical bars
            },
        },
        legend: {
          show:false
        },
        fill: {
            opacity: 1,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
    };

    return (
        <div className="panel p-0">
            <div className=" flex justify-center items-center bg-primary text-white">
                <h5 className="text-lg font-semibold dark:text-white">{title}</h5>

            </div>
            <div className='flex items-center justify-between'>
                <ReactApexChart
                    series={series}
                    options={options}
                    className="rounded-lg bg-white dark:bg-black overflow-hidden"
                    type="bar"
                    height={300}
                    width="100%"
                />

            </div>
        </div>
    );
};

export default StackedColumnChart;
