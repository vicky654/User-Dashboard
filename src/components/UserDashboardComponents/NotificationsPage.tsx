import React, { useState } from "react";
import { Tabs } from "@mantine/core";
import {
  FileText,
  Trash2,
  CheckCircle,
  Info,
  AlertTriangle,
  LogIn,
} from "lucide-react";

interface LogItem {
  title: string;
  time: string;
  icon: JSX.Element;
  color: string;
  isUnread?: boolean;
}

const NotificationsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>("notifications");

  // ---------------------------
  // 🔔 Notifications Data
  // ---------------------------
  const notifications = {
    today: [
      {
        title: "Consent Request Received",
        time: "10:30 AM",
        icon: <FileText size={18} />,
        color: "bg-blue-100 text-blue-600",
        isUnread: true,
      },
      {
        title: "Data Deletion Confirmation",
        time: "9:15 AM",
        icon: <Trash2 size={18} />,
        color: "bg-red-100 text-red-600",
      },
    ],
    yesterday: [
      {
        title: "Consent Withdrawal Acknowledged",
        time: "3:45 PM",
        icon: <Info size={18} />,
        color: "bg-yellow-100 text-yellow-600",
      },
      {
        title: "Data Access Request Approved",
        time: "1:20 PM",
        icon: <CheckCircle size={18} />,
        color: "bg-green-100 text-green-600",
      },
    ],
    lastWeek: [
      {
        title: "New Privacy Policy Update",
        time: "Monday, 11:00 AM",
        icon: <FileText size={18} />,
        color: "bg-indigo-100 text-indigo-600",
      },
      {
        title: "Data Correction Request Processed",
        time: "Wednesday, 9:00 AM",
        icon: <AlertTriangle size={18} />,
        color: "bg-purple-100 text-purple-600",
      },
    ],
  };

  // ---------------------------
  // 🧾 Activity Log Data
  // ---------------------------
  const activityLog = {
    today: [
      {
        title: "Consent Withdrawn",
        time: "9:15 AM",
        icon: <AlertTriangle size={18} />,
        color: "bg-red-100 text-red-600",
      },
      {
        title: "User Login",
        time: "10:30 AM",
        icon: <LogIn size={18} />,
        color: "bg-blue-100 text-blue-600",
        isUnread: true,
      },
    ],
    yesterday: [
      {
        title: "Grievance",
        time: "3:45 PM",
        icon: <Info size={18} />,
        color: "bg-yellow-100 text-yellow-600",
      },
      {
        title: "Rights",
        time: "1:20 PM",
        icon: <CheckCircle size={18} />,
        color: "bg-green-100 text-green-600",
      },
      {
        title: "User Login",
        time: "10:30 AM",
        icon: <LogIn size={18} />,
        color: "bg-blue-100 text-blue-600",
        isUnread: true,
      },
    ],
    lastWeek: [
      {
        title: "User Login",
        time: "10:30 AM",
        icon: <LogIn size={18} />,
        color: "bg-blue-100 text-blue-600",
        isUnread: true,
      },
    ],
    thisMonth: [
      {
        title: "User Login",
        time: "10:30 AM",
        icon: <LogIn size={18} />,
        color: "bg-blue-100 text-blue-600",
        isUnread: true,
      },
    ],
    lastMonth: [
      {
        title: "User Login",
        time: "10:30 AM",
        icon: <LogIn size={18} />,
        color: "bg-blue-100 text-blue-600",
        isUnread: true,
      },
    ],
    september: [
      {
        title: "User Login",
        time: "10:30 AM",
        icon: <LogIn size={18} />,
        color: "bg-blue-100 text-blue-600",
        isUnread: true,
      },
    ],
    august: [
      {
        title: "User Login",
        time: "10:30 AM",
        icon: <LogIn size={18} />,
        color: "bg-blue-100 text-blue-600",
        isUnread: true,
      },
    ],
  };

  return (
    <main className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">
          Notifications & Activity
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Stay updated on your data requests and account activity.
        </p>

        {/* Tabs */}
        <Tabs value={activeTab} onTabChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="notifications">Notifications</Tabs.Tab>
            <Tabs.Tab value="activity">Activity Log</Tabs.Tab>
          </Tabs.List>

          {/* -------------------- NOTIFICATIONS -------------------- */}
          <Tabs.Panel value="notifications" pt="md">
            <div className="space-y-8">
              <NotificationSection title="Today" items={notifications.today} />
              <NotificationSection title="Yesterday" items={notifications.yesterday} />
              <NotificationSection title="Last Week" items={notifications.lastWeek} />
            </div>
          </Tabs.Panel>

          {/* -------------------- ACTIVITY LOG -------------------- */}
          <Tabs.Panel value="activity" pt="md">
            <div className="space-y-8">
              <NotificationSection title="Today" items={activityLog.today} />
              <NotificationSection title="Yesterday" items={activityLog.yesterday} />
              <NotificationSection title="Last Week" items={activityLog.lastWeek} />
              <NotificationSection title="This Month" items={activityLog.thisMonth} />
              <NotificationSection title="Last Month" items={activityLog.lastMonth} />
              <NotificationSection title="September ’25" items={activityLog.september} />
              <NotificationSection title="August ’25" items={activityLog.august} />
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </main>
  );
};

interface NotificationSectionProps {
  title: string;
  items: LogItem[];
}

const NotificationSection: React.FC<NotificationSectionProps> = ({
  title,
  items,
}) => (
  <section>
    <h3 className="font-medium text-gray-700 mb-3">{title}</h3>
    <div className="space-y-3">
      {items.map((n, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border p-4 flex justify-between items-start hover:shadow-sm transition"
        >
          <div className="flex items-start space-x-3">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-lg ${n.color}`}
            >
              {n.icon}
            </div>
            <div>
              <p className="font-medium text-gray-800">{n.title}</p>
              <p className="text-xs text-gray-500 mt-1">{n.time}</p>
            </div>
          </div>
          {n.isUnread && (
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full mt-2"></div>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default NotificationsPage;
