import { Link } from "react-router-dom";
import { useGetApiCall } from "../../../CustomHooks/useGetApiCall";
import CommonSelect from "../../../CustomComponents/CommonSelect";
import ConsentChart from './ConsentChart'
import { useEffect, useState } from "react";
import {
    AwarenessChart,

    ConsentPie,
    EmployeeAwarenessPie,
    ImpactAssessmentChart,
    ImpactAssessmentPie,
    PrivacyGovData,
    RightsChart,
    RightsPie,
    ThirdPartyChart,
    ThirdPartyPie,
} from "../../../chartData";
import SelectHeader from "./../../../pages/Components/SelectHeader";
import withApiHandler from "../../../api/withApiHandler";
import useErrorHandler from "../../../CustomHooks/useErrorHandler";
import { dummyBarData, dummyDonutData, dummyStats } from "./ConsentChartDummyData";
import CommonHeader from "../../../components/Layouts/CommonHeader";
import { usePageTitle } from "../../../context/PageTitleContext";


interface ManageUserProps {
    isLoading: boolean;
    getData: (url: string) => Promise<any>;
    postData: (url: string, body: any) => Promise<any>;
    // onSubmit: (values: any, formik: any) => Promise<void>;
}


const PrivacyGovernance: React.FC<ManageUserProps> = ({ postData, getData, isLoading }) => {
      const { setPageTitle } = usePageTitle();

    const handleApiError = useErrorHandler();
    useEffect(() => {
            setPageTitle('Privacy Governance Dashboard');
        // Fetch initial data when the component mounts
        fetchData();
    }, []);


    const fetchData = async () => {
        try {


            let apiUrl = `/dpcm/dashboard`;
            const response = await getData(apiUrl);
            // const response = await getData(`/client/list?page=${currentPage}`);
            if (response && response.data && response.data.data) {
                console.log('Fetched Data:', response.data.data);
            } else {
                throw new Error('No data available in the response');
            }
        } catch (error) {
            handleApiError(error);
            //   handleApiError(error);
        }
    };


    // const { data, render } = useGetApiCall({
    //     url: '/dpcm/dashboard',
    //     onSuccess: (res: any) => {
    //         console.log('API Data:', res);
    //     },
    // });


    const { data: optionsData, render: optionsRender } = useGetApiCall({
        url: '/processing_activities',
        onSuccess: (res: any) => {
            console.log('Options List:', res);
        },
    });
    // console.log(optionsData, "optionsData")
    const [selected, setSelected] = useState<any>('one');



    const options = optionsData?.processingActivities
        .map((item: any) => ({ // console.log(optionsData, "optionsData")
            label: item?.processingActivitiesName,
            value: item?.id,
        }));

    const { data: DashboardData, render: DashboardRender } = useGetApiCall({
        url: `/all_dashboard?id=${selected}`,
        onSuccess: (res: any) => {
            console.log('Options List:', res);
        },
    });


 const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const oneMonthLater = new Date();
    oneMonthLater.setMonth(today.getMonth() + 1);
    const formatDate = (date:any) => date.toISOString().split("T")[0];
    setMinDate(formatDate(today));
    setMaxDate(formatDate(oneMonthLater));
  }, []);
    return (
        <>
      
            <SelectHeader
                title="Privacy Governance"
                riskLevel="high"
                showRiskLevel={true}
                Selecttitle="Processing Activity"
                options={options}
                selected={selected}
                setSelected={setSelected}
            />
      



            {/* <h3>{selected}</h3> */}
            <ConsentChart
                title="Data Principal Consent Management"
                barData={dummyBarData}
                donutData={dummyDonutData}
                stats={dummyStats}
            />
            <ConsentChart
                title="Data Principal Consent Management"
                barData={dummyBarData}
                donutData={dummyDonutData}
                stats={dummyStats}
            />


            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <RiskChartPanel
                    title="Consent Management"
                    barChart={ConsentChart}
                    pieChart={ConsentPie}
                    path="/privacy-governance/consent"
                />

                <RiskChartPanel
                    title="Employee Awareness"
                    barChart={AwarenessChart}
                    pieChart={EmployeeAwarenessPie}
                    riskColor="#00C853"
                    path="/privacy-governance/awareness"
                />

                <RiskChartPanel
                    title="Rights Management"
                    barChart={RightsChart}
                    pieChart={RightsPie}
                    path="/privacy-governance/rights"
                />

                <RiskChartPanel
                    title="Impact Assessment"
                    barChart={ImpactAssessmentChart}
                    pieChart={ImpactAssessmentPie}
                    riskColor="#00C853"
                    path="/privacy-governance/impact"
                />

                <RiskChartPanel
                    title="Third-party Assessment"
                    barChart={ThirdPartyChart}
                    pieChart={ThirdPartyPie}
                    path="/privacy-governance/third-party"
                />

            </div> */}








        </>
    );
};

export default withApiHandler(PrivacyGovernance);
// export default  PrivacyGovernance;