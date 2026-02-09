import React, { useState } from "react";
import { Bell, User, LogOut } from "lucide-react";
import UserHeaderLogo from "../Icon/UserHeaderLogo";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";

const UserHeader: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
         const UserDetails = useSelector(
         (state: IRootState) => state.auth.user ?? null
       );

       console.log("UserDetails in UserHeader:", UserDetails);

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b">
      {/* Logo */}
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <UserHeaderLogo />
      </div>

      {/* Right Nav */}
      <nav className="flex items-center gap-6">
        <span className="nav-link cursor-pointer" onClick={() => navigate("/")}>Dashboard</span>
        <span className="nav-link cursor-pointer" onClick={() => navigate("/manage-consents")}>My Consents</span>
        <span className="nav-link cursor-pointer" onClick={() => navigate("/rights-grievance-history")}>My Requests</span>
        <span className="nav-link cursor-pointer">Settings</span>

        <div
          className="rounded-full bg-gray-200 p-1 cursor-pointer"
          onClick={() => navigate("/notifications")}
        >
          <Bell className="h-5 w-5 text-gray-700" />
        </div>

        {/* User */}
        <div className="relative">
          <div
            className="rounded-full bg-gray-200 p-1 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <User className="h-5 w-5 text-gray-700" />
          </div>

          {open && (
            <div className="absolute right-0 mt-3 w-56 bg-white border rounded-lg shadow-md">
              <div className="px-4 py-3 border-b font-medium">
              {UserDetails ? UserDetails?.name : 'Guest'}
              </div>

              <button
                onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                }}
                className="w-full flex items-center gap-2 px-4 py-3 text-red-500 hover:bg-gray-50"
              >
                <LogOut size={16} />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default UserHeader;
