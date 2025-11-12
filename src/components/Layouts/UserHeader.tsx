import React from "react";
import { Bell, User } from "lucide-react";
import UserHeaderLogo from "../Icon/UserHeaderLogo";
import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";

const UserHeader: React.FC = () => {
    const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b">
      <div className="flex items-center space-x-3" style={{ cursor: "pointer" }}  onClick={() => navigate("/")} >
       <UserHeaderLogo />
    
      </div>

      <nav className="flex items-center space-x-6">
        <a href="#" className="text-sm text-gray-700 hover:text-red-500" onClick={()=>navigate("/")}>Dashboard</a>
        <a href="#" className="text-sm text-gray-700 hover:text-red-500">My Consents</a>
        <a href="#" className="text-sm text-gray-700 hover:text-red-500">My Requests</a>
          <a href="#" className="text-sm text-gray-700 hover:text-red-500" onClick={() => navigate("/language-selection")}>Language</a>
         <a href="#" className="text-sm text-gray-700 hover:text-red-500" onClick={() => navigate("/login-otp")}>Login</a>
       
        <a href="#" className="text-sm text-gray-700 hover:text-red-500">Settings</a>

        <div className="rounded-full bg-gray-200 p-1" onClick={() => navigate("/notifications")} style={{ cursor: "pointer" }}>
          <Bell className="h-5 w-5 text-gray-700" />
        </div>
        <div className="rounded-full bg-gray-200 p-1">
          <User className="h-5 w-5 text-gray-700" />
        </div>
      </nav>
    </header>
  );
};

export default UserHeader;
