import { NavLink, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Search,
  BarChart3,
  Brain,
  Lightbulb,
  FileImage,
  GitCompare,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.clear();

    navigate("/");
  };

  const menuItems = [

    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },

    {
      name: "Analyze Account",
      icon: <Search size={20} />,
      path: "/analyze-account",
    },

    {
      name: "Feature Extraction",
      icon: <BarChart3 size={20} />,
      path: "/feature-extraction",
    },

    {
      name: "Predictions",
      icon: <Brain size={20} />,
      path: "/predictions",
    },

    {
      name: "Recommendations",
      icon: <Lightbulb size={20} />,
      path: "/recommendations",
    },

    {
      name: "Post Analysis",
      icon: <FileImage size={20} />,
      path: "/post-analysis",
    },

    {
      name: "Comparisons",
      icon: <GitCompare size={20} />,
      path: "/comparisons",
    },

    {
      name: "Reports",
      icon: <FileText size={20} />,
      path: "/reports",
    },

    {
      name: "Settings",
      icon: <Settings size={20} />,
      path: "/settings",
    },

  ];

  return (

    <div className="fixed left-0 top-0 w-[250px] h-screen bg-[#020B3F] text-white flex flex-col justify-between z-50">

      {/* TOP */}
      <div>

        {/* LOGO */}
        <div className="p-6 border-b border-white/10">

          <h1 className="text-4xl font-bold">

            AdPredict AI

          </h1>

        </div>

        {/* MENU */}
        <div className="mt-6 flex flex-col gap-2 px-4">

          {menuItems.map((item, index) => (

            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-4 rounded-2xl transition font-medium ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white"
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

      </div>

    </div>
  );
}

export default Sidebar;