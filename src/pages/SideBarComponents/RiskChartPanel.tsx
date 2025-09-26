import { useNavigate } from 'react-router-dom';
import StackedColumnChart from '../../CustomComponents/StackedColumnChart';
import ReactApexChart from 'react-apexcharts';

interface RiskPanelProps {
  title: string;
  riskColor?: string;
  barChart: {
    title: string;
    series: any;
    categories: string[];
    colors?: string[];
  };
  pieChart: {
    series: any;
    options: any;
  };
  path: string; // ✅ new prop for routing
}

const RiskChartPanel: React.FC<RiskPanelProps> = ({
  title,
  riskColor = '#ff0000',
  barChart,
  pieChart,
  path,
}) => {
  const navigate = useNavigate();



  return (
    <div
      className="panel transition-all hover:shadow-xl cursor-pointer"
      onClick={() => navigate(path)} // ✅ navigate to detail page
    >
      <div className="flex items-center justify-between mb-5">
        <h5 className="font-semibold text-lg dark:text-white-light">{title}</h5>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-medium">Risk Status:</span>
          <input
            type="color"
            value={riskColor}
            disabled
            readOnly
            className="w-10 h-6 rounded cursor-not-allowed"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-between">
        <div className="w-full md:w-[48%]">
          <StackedColumnChart
            title={barChart.title}
            series={barChart.series}
            categories={barChart.categories}
            // colors={barChart.colors}
            toggleCode={() => console.log('Toggle Code View')}
          />
        </div>

        <div className="panel p-0 w-full md:w-[48%]">
          <div className="flex justify-center items-center bg-primary text-white">
            <h5 className="text-lg font-semibold dark:text-white">Percentage (%)</h5>
          </div>
          <div className="w-full h-[300px] flex justify-center items-center">
            <ReactApexChart
              series={pieChart.series}
              options={pieChart.options}
              type="pie"
              width="100%"
              height="100%"
              className="rounded-lg bg-white dark:bg-black overflow-hidden"
            />
          </div>


        </div>
      </div>
    </div>
  );
};
export default RiskChartPanel;