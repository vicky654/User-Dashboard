import Breadcrumb from "../../../../CustomHooks/Breadcrumb";

const ImpactDetail = () => {
  const breadcrumbItems = [
    { title: 'Home', path: '/' },
    { title: 'Privacy Governance', path: '/privacy-governance' },
    { title: 'Impact Assessment' }
  ];

  return (
    <div className="p-5">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-xl font-bold mt-4">Impact Assessment</h1>
    </div>
  );
};

export default ImpactDetail;
