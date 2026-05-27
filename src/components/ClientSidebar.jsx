import { NavLink, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Briefcase,
  BarChart3,
  Sparkles,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

function ClientSidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.clear();

    navigate("/");
  };

  const menuItems = [

    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/client-dashboard",
    },

    {
      name: "Campaigns",
      icon: <Briefcase size={20} />,
      path: "/client-campaigns",
    },

    {
      name: "Analytics",
      icon: <BarChart3 size={20} />,
      path: "/campaign-analytics",
    },

    {
      name: "Insights",
      icon: <Sparkles size={20} />,
      path: "/campaign-insights",
    },

    {
      name: "Reports",
      icon: <FileText size={20} />,
      path: "/campaign-reports",
    },

    {
      name: "Settings",
      icon: <Settings size={20} />,
      path: "/client-settings",
    },

  ];

  return (

    <div className="fixed top-0 left-0 w-[250px] h-screen bg-[#020B3F] text-white flex flex-col justify-between z-50">

      {/* TOP */}
      <div>

        {/* LOGO */}
        <div className="p-6 border-b border-white/10">

          <h1 className="text-5xl font-bold leading-tight">

            Client
            <br />
            Portal

          </h1>

        </div>

        {/* MENU */}
        <div className="mt-6 px-4 flex flex-col gap-2">

          {menuItems.map((item, index) => (

            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-4 rounded-2xl transition font-semibold ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-indigo-700"
                    : "hover:bg-white/10 text-white/90"
                }`
              }
            >

              {item.icon}

              {item.name}

            </NavLink>

          ))}

        </div>

      </div>

      {/* BOTTOM */}
      <div className="p-4 border-t border-white/10">

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-red-400 hover:bg-red-500/10 transition font-semibold"
        >

          <LogOut size={20} />

          Logout

        </button>

        {/* USER */}
        <div className="mt-6 flex items-center gap-3 px-3">

          <img
            src="https://i.pravatar.cc/100"
            alt="user"
            className="w-12 h-12 rounded-full"
          />

          <div>

            <h3 className="font-semibold">

              Client User

            </h3>

            <p className="text-sm text-gray-400">

              Client Account

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ClientSidebar;