import React from 'react'
import SelectHeader from '../../pages/Components/SelectHeader'
import RoleIcon from '../DPDPIcons/RoleIcon'
import { useNavigate } from 'react-router-dom';


const settingsData = [
    {
        icon: "🏢",
        title: "Company",
        description: "Manage your company information",
    },
    {
        icon: "🎨",
        title: "Theme",
        description: "Manage your theme settings",
    },
    {
        icon: "⚙️",
        title: "Tools & Automation",
        description: "Manage tools and automation",
    },
    {
        icon: "📧",
        title: "Mail",
        description: "Manage your mail settings",
    },
    {
        icon: "💬",
        title: "SMS",
        description: "Manage your SMS settings",
    },
    {
        icon: "🔗",
        title: "API",
        description: "Manage your API settings",
    },
    {
        icon: "📥",
        title: "Incoming Mail",
        description: "Manage incoming mail settings",
    },
    {
        icon: "🗂️",
        title: "DDMT",
        description: "Manage your DigiLocker settings",
    },
       {
    icon: "💼",
    title: "LinkedIn",
    description: "Manage your LinkedIn settings",
  },
    {
        icon: "🔒",
        title: "DigiLocker",
        description: "Manage your DigiLocker settings",
    },
    {
        icon: "🪪",
        title: "License",
        description: "Manage your DigiLocker settings",
    },
    {
        icon: "🔗",
        title: "Integration",
        description: "Manage your DigiLocker settings",
    },
    {
        icon: "📊",
        title: "Activity Log",
        description: "Manage your stakeholder activity settings",
    },
];


export default function Allsettings() {
      const navigate = useNavigate();

    return (
        <div className="p-6">
            <SelectHeader
                title="Settings"
                subtitle="
Manage your global settings for your organization"
                showRiskLevel={false}
                Selecttitle="Type:"
                leftIcon={<RoleIcon width={20} height={20} />}

            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {settingsData.map((item, index) => (
              
                 
                   <div
                   onClick={() => navigate("/Settings", { state: { tabName: item.title } })}

                        key={index}
                        className=" panel cursor-pointer border hover:border-primary/40 transition-all  hover:shadow-md"
                    >
                        <div className="flex flex-col items-start p-4">
                            <div className="text-3xl mb-2">{item.icon}</div>
                            <h3 className="text-base font-semibold text-gray-800">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
