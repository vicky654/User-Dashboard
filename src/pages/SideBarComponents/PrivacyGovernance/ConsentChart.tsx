import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';
import { useTranslation } from 'react-i18next';


ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type ChartItem = {
    label: string;
    value: number;
    color: string;
};

interface ConsentChartProps {
    barData: ChartItem[];
    donutData: ChartItem[];
    stats: {
        label: string;
        value: string;
        change: string;
        count: string;
    }[];
    title?: string;
}

const ConsentChart: React.FC<ConsentChartProps> = ({
    barData,
    donutData,
    stats,
    title,
}) => {
    const barChartData = {
        labels: barData.map((d) => d.label),
        datasets: [
            {
                label: 'Overall Count',
                data: barData.map((d) => d.value),
                backgroundColor: barData.map((d) => d.color),
                borderRadius: 6,
                barThickness: 30,
            },
        ],
    };

    const donutChartData = {
        labels: donutData.map((d) => d.label),
        datasets: [
            {
                label: 'Overall Count',
                data: donutData.map((d) => d.value),
                backgroundColor: donutData.map((d) => d.color),
                cutout: '70%',
            },
        ],
    };

    const barChartOptions: any = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#000',
                    boxWidth: 20,
                    padding: 20,
                },
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#000' },
            },
            y: {
                grid: { display: false },
                ticks: { color: '#000' },
            },
        },
    };
    const { t } = useTranslation();
    return (
        <div className="mt-6 flex flex-col md:flex-row gap-4">
            {/* Left Side Charts */}
            <div className="w-full md:w-[70%] lg:w-[78%] h-auto p-8 rounded-[30px] border  bg-white min-w-0">
                {title && (
                    <h2 className="text-lg font-semibold text-center mb-4">
                    {t(title)}
                    </h2>
                )}

                <div className="flex flex-col md:flex-row gap-6 h-auto ">
                    {/* Bar Chart */}
                    <div className="w-full md:w-1/2 h-[250px]">
                        <Bar data={barChartData} options={barChartOptions} />
                    </div>

                    {/* Doughnut Chart */}
                    <div className="w-full md:w-1/2 h-[250px]">
                        <Doughnut
                            data={donutChartData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: {
                                        display: true,
                                        position: 'right',
                                        labels: {
                                            color: '#000',
                                            boxWidth: 20,
                                            padding: 16,
                                            font: {
                                                size: 12,
                                                weight: 'bold',
                                            },
                                        },
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Right Side Stats Cards */}
            <div className="w-full md:w-[30%] lg:w-[22%] flex flex-col sm:flex-row md:flex-col gap-4">
                {stats?.map((item, index) => (
                    <div
                        key={index}
                        className="flex-1 rounded-2xl px-4 py-3 bg-gray-200 border border-gray-300   text-black text-center flex flex-col justify-between"
                    >
                        <h3 className="text-sm font-semibold mb-1">
                            {t(item.label)}
                        </h3>
                        <div className="text-3xl font-black">
                            {item.value}
                        </div>
                        <div className="text-xs mt-4 flex justify-between items-center text-gray-800">
                            <span className="text-green-600 font-medium flex items-center gap-1">
                                ▲ {item.change}
                            </span>
                            <span className="font-medium">
                                {item.count} {t('thisWeek')}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConsentChart;
