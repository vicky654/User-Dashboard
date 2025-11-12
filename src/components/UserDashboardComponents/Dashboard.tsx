import React from "react";
import { Shield, ClipboardList, AlertCircle, FileText, Info, XCircle, CheckCircle2, Bell } from "lucide-react";
import { Button } from "@mantine/core";
import ConsentHistory from "./ConsentHistory";
import { useNavigate } from "react-router-dom";

interface StatCardProps {
  title: string;
  value: number | string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => (
  <div className="p-4 bg-white border rounded-2xl shadow-sm w-full sm:w-1/5">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-3xl font-semibold mt-1">{value}</p>
  </div>
);

const Dashboard: React.FC = () => {
  const stats = [
    { title: "Active Consents", value: 12 },
    { title: "Pending Renewals", value: 3 },
    { title: "Grievances Raised", value: 1 },
    { title: "Data Access Requests", value: 5 },
  ];

  const notifications = [
    {
      type: "bell",
      title: "Consent Renewal Reminder",
      text: "Your consent for HealthCare Inc. is expiring in 7 days.",
      time: "2d ago",
    },
    {
      type: "error",
      title: "Consent Withdrawal Confirmation",
      text: "Your consent for FinanceCorp has been successfully withdrawn.",
      time: "5d ago",
    },
    {
      type: "success",
      title: "Data Access Request Approved",
      text: "Your data access request to SocialMediaCo has been approved.",
      time: "1w ago",
    },
  ];
 
  // Select icon and color based on type
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "bell":
        return <Bell className="h-5 w-5 text-blue-500" />;
      case "error":
        return <XCircle className="h-5 w-5 text-red-500" />;
      case "success":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      default:
        return <Info className="h-5 w-5 text-gray-400" />;
    }
  };
   const navigate = useNavigate();

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">
        Hello, Osama  <span className="animate-wave">👋</span>
      </h2>

      {/* Stats Section */}
      <div className="flex flex-wrap gap-4 mb-6">
        {stats.map((s) => (
          <StatCard key={s.title} title={s.title} value={s.value} />
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
     <Button variant="outline" onClick={() => navigate("/manage-consents")}>
        <Shield className="mr-2 h-4 w-4" /> Manage Consents
      </Button>
        <Button variant="outline" onClick={() => navigate("/data-protection-rights")}>
          <ClipboardList className="mr-2 h-4 w-4" /> Manage Rights
        </Button>
        <Button variant="outline" onClick={() => navigate("/requests-form-grievance-redressal-options")}>
          <AlertCircle className="mr-2 h-4 w-4" /> Raise Grievance
        </Button>
          <Button variant="outline" onClick={() => navigate("/requests-form-grievance-redressal-options")}>
          <AlertCircle className="mr-2 h-4 w-4" /> rights-grievance-history
        </Button>
            <Button variant="outline" onClick={() => navigate("/NomineeForm")}>
          <FileText className="mr-2 h-4 w-4" /> Nominee Form
        </Button>
        <Button variant="outline" color="red">
          <FileText className="mr-2 h-4 w-4" /> Access Rights
        </Button>
      </div>

      {/* Notifications */}
      <section className="bg-white rounded-2xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold mb-4">Notifications</h3>
        <div className="space-y-3">
          {notifications.map((n, i) => (
            <div
              key={i}
              className="flex justify-between items-start p-3 border rounded-xl hover:bg-gray-50"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1">{getNotificationIcon(n.type)}</div>
                <div>
                  <p className="font-medium">{n.title}</p>
                  <p className="text-sm text-gray-600">{n.text}</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">{n.time}</span>
            </div>
          ))}
        </div>
      </section>


    
    </main>
  );
};

export default Dashboard;
