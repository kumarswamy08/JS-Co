import Sidebar from "../components/Sidebar";

import { useNavigate } from "react-router-dom";

import {
  Search,
  ShieldCheck,
  BrainCircuit,
  Clock3,
  Lock,
} from "lucide-react";

function AnalyzeAccount() {

  const navigate = useNavigate();

  const platforms = [
    {
      name: "Instagram",
      icon: "📸",
    },

    {
      name: "YouTube",
      icon: "▶️",
    },

    {
      name: "LinkedIn",
      icon: "💼",
    },

    {
      name: "Facebook",
      icon: "📘",
    },
  ];

  const features = [
    {
      icon: <ShieldCheck size={28} />,
      title: "All-in-One Analysis",
      desc: "Support multiple platforms",
    },

    {
      icon: <BrainCircuit size={28} />,
      title: "AI Powered",
      desc: "Advanced ML models",
    },

    {
      icon: <Clock3 size={28} />,
      title: "Detailed Insights",
      desc: "Accurate data & metrics",
    },

    {
      icon: <Lock size={28} />,
      title: "Secure & Fast",
      desc: "Real-time processing",
    },
  ];

  return (

    <div className="bg-[#F7F8FC] min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="ml-[250px] p-8">

        {/* HEADER */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-[#111827] mb-4">

            ANALYZE ACCOUNT

          </h1>

          <p className="text-gray-500 text-lg">

            AI-powered social media account intelligence analysis.

          </p>

        </div>

        {/* MAIN CARD */}
        <div className="bg-white border rounded-3xl shadow-sm p-8">

          {/* TOP */}
          <div className="mb-10">

            <h1 className="text-4xl font-bold mb-3">

              Analyze Social Media Account

            </h1>

            <p className="text-gray-500 text-lg">

              Enter account details to start AI-powered analysis

            </p>

          </div>

          {/* FORM */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-10">

            {/* LEFT */}
            <div>

              <label className="block text-xl font-semibold mb-4">

                Platform Type

              </label>

              <select className="w-full border rounded-2xl px-5 py-5 text-lg outline-none mb-5">

                <option>Select Platform</option>

                <option>Instagram</option>

                <option>YouTube</option>

                <option>LinkedIn</option>

                <option>Facebook</option>

              </select>

              {/* PLATFORM LIST */}
              <div className="border rounded-2xl p-5 space-y-5 bg-gray-50">

                {platforms.map((platform, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4 text-xl font-medium"
                  >

                    <span className="text-3xl">

                      {platform.icon}

                    </span>

                    <span>

                      {platform.name}

                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* RIGHT */}
            <div>

              <label className="block text-xl font-semibold mb-4">

                Username

              </label>

              <input
                type="text"
                placeholder="Enter username"
                className="w-full border rounded-2xl px-5 py-5 text-lg outline-none mb-4"
              />

              <p className="text-gray-500 mb-8 text-lg">

                Example: @nike

              </p>

              {/* BUTTON */}
              <button
                onClick={() => navigate("/feature-extraction")}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition text-white py-5 rounded-2xl text-xl font-semibold flex items-center justify-center gap-4 shadow-lg"
              >

                <Search size={28} />

                Analyze Account

              </button>

            </div>

          </div>

          {/* FEATURES */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {features.map((item, index) => (

              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-5"
              >

                <div className="text-green-500 mb-4">

                  {item.icon}

                </div>

                <h1 className="font-bold text-lg mb-2">

                  {item.title}

                </h1>

                <p className="text-gray-500">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default AnalyzeAccount;