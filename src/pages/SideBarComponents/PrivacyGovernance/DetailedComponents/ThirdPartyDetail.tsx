import Breadcrumb from "../../../../CustomHooks/Breadcrumb";

const ThirdPartyDetail = () => {
  const breadcrumbItems = [
    { title: 'Home', path: '/' },
    { title: 'Privacy Governance', path: '/privacy-governance' },
    { title: 'Third Party Assessment' }
  ];

  return (
    <div className="p-5">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-xl font-bold mt-4">Third Party Assessment</h1>
    </div>
  );
};

export default ThirdPartyDetail;
