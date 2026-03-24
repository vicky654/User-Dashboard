import React, { useState } from "react";
import { Bell, User, LogOut } from "lucide-react";
import UserHeaderLogo from "../Icon/UserHeaderLogo";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";
import { NavLink } from "react-router-dom";


const NomineeHeader: React.FC = () => {
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
        {/* <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `cursor-pointer text-sm font-medium transition ${isActive
              ? "text-red-600 border-b-2 border-red-600 pb-1"
              : "text-gray-600 hover:text-red-500"
            }`
          }
        >
          Dashboard
        </NavLink> */}
        <NavLink className={({ isActive }) =>
          `cursor-pointer text-sm font-medium transition ${isActive
            ? "text-red-600 border-b-2 border-red-600 pb-1"
            : "text-gray-600 hover:text-red-500"
          }`
        } to="/login-otp">Login with OTP</NavLink>
        <NavLink className={({ isActive }) =>
          `cursor-pointer text-sm font-medium transition ${isActive
            ? "text-red-600 border-b-2 border-red-600 pb-1"
            : "text-gray-600 hover:text-red-500"
          }`
        } to="/age-verification-progress">Age Verification</NavLink>

        <NavLink className={({ isActive }) =>
          `cursor-pointer text-sm font-medium transition ${isActive
            ? "text-red-600 border-b-2 border-red-600 pb-1"
            : "text-gray-600 hover:text-red-500"
          }`
        } to="/nominee-validated-successfully">Nominee Successfully</NavLink>
        <NavLink className={({ isActive }) =>
          `cursor-pointer text-sm font-medium transition ${isActive
            ? "text-red-600 border-b-2 border-red-600 pb-1"
            : "text-gray-600 hover:text-red-500"
          }`
        } to="/nominee-settings">Nominee Settings</NavLink>

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

export default NomineeHeader;
