import Breadcrumb from "../../../../CustomHooks/Breadcrumb";

const AwarenessDetail = () => {
  const breadcrumbItems = [
    { title: 'Home', path: '/' },
    { title: 'Privacy Governance', path: '/privacy-governance' },
    { title: 'Employee Awareness' }
  ];

  return (
    <div className="p-5">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-xl font-bold mt-4">Employee Awareness</h1>
    </div>
  );
};

export default AwarenessDetail;
