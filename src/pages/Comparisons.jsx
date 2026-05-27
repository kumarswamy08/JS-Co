import Sidebar from "../components/Sidebar";

import {
  BarChart3,
  TrendingUp,
  Users,
  MousePointerClick,
  DollarSign,
  Plus,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

function ComparisonCard({
  title,
  value,
  growth,
  icon,
}) {

  return (

    <div className="bg-white border rounded-3xl p-6 shadow-sm">

      <div className="flex justify-between items-center mb-5">

        <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">

          {icon}

        </div>

        <TrendingUp
          className="text-green-500"
          size={28}
        />

      </div>

      <h2 className="text-gray-500 mb-2">

        {title}

      </h2>

      <h1 className="text-5xl font-bold mb-3">

        {value}

      </h1>

      <p className="text-green-500 font-semibold">

        ↑ {growth}

      </p>

    </div>
  );
}

const comparisonData = [

  {
    platform: "Instagram",
    engagement: 84,
    reach: 78,
    ctr: 65,
    roi: 88,
  },

  {
    platform: "YouTube",
    engagement: 91,
    reach: 95,
    ctr: 72,
    roi: 94,
  },

  {
    platform: "LinkedIn",
    engagement: 69,
    reach: 62,
    ctr: 58,
    roi: 73,
  },

  {
    platform: "Facebook",
    engagement: 58,
    reach: 54,
    ctr: 46,
    roi: 61,
  },
];

function Comparisons() {

  return (

    <div className="flex bg-[#F7F8FC] min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="ml-64 flex-1 p-10">

        {/* HEADER */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-[#111827] mb-4">

           COMPARISONS

          </h1>

          <p className="text-gray-500 text-lg">

            Compare multiple social media accounts using AI-powered analytics.

          </p>

        </div>

        {/* CONNECT ACCOUNTS */}
        <div className="bg-white border rounded-3xl p-8 shadow-sm mb-10">

          <div className="flex justify-between items-center mb-8">

            <h1 className="text-4xl font-bold">

              Connect Accounts for Comparison

            </h1>

            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-7 py-4 rounded-2xl flex items-center gap-3 shadow-lg">

              <Plus size={24} />

              Add Account

            </button>

          </div>

          {/* FORM */}
          <div className="grid grid-cols-3 gap-6 mb-8">

            {/* PLATFORM */}
            <div>

              <label className="block text-lg font-semibold mb-3">

                Platform

              </label>

              <select className="w-full border rounded-2xl px-5 py-4 outline-none">

                <option>Select Platform</option>

                <option>Instagram</option>

                <option>YouTube</option>

                <option>LinkedIn</option>

                <option>Facebook</option>

              </select>

            </div>

            {/* USERNAME */}
            <div>

              <label className="block text-lg font-semibold mb-3">

                Username

              </label>

              <input
                type="text"
                placeholder="@username"
                className="w-full border rounded-2xl px-5 py-4 outline-none"
              />

            </div>

            {/* BUTTON */}
            <div className="flex items-end">

              <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-2xl font-semibold shadow-lg">

                Connect Account

              </button>

            </div>

          </div>

          {/* CONNECTED ACCOUNTS */}
          <div className="grid grid-cols-4 gap-6">

            {/* INSTAGRAM */}
            <div className="bg-pink-50 border border-pink-200 rounded-3xl p-6">

              <div className="flex items-center gap-4 mb-4">

                <span className="text-3xl">
                  📸
                </span>

                <h1 className="text-2xl font-bold">

                  Instagram

                </h1>

              </div>

              <p className="text-gray-600 mb-3">

                @nike

              </p>

              <span className="text-green-600 font-semibold">

                Connected

              </span>

            </div>

            {/* YOUTUBE */}
            <div className="bg-red-50 border border-red-200 rounded-3xl p-6">

              <div className="flex items-center gap-4 mb-4">

                <span className="text-3xl">
                  ▶️
                </span>

                <h1 className="text-2xl font-bold">

                  YouTube

                </h1>

              </div>

              <p className="text-gray-600 mb-3">

                Nike Official

              </p>

              <span className="text-green-600 font-semibold">

                Connected

              </span>

            </div>

            {/* LINKEDIN */}
            <div className="bg-blue-50 border border-blue-200 rounded-3xl p-6">

              <div className="flex items-center gap-4 mb-4">

                <span className="text-3xl">
                  💼
                </span>

                <h1 className="text-2xl font-bold">

                  LinkedIn

                </h1>

              </div>

              <p className="text-gray-600 mb-3">

                Nike Inc.

              </p>

              <span className="text-green-600 font-semibold">

                Connected

              </span>

            </div>

            {/* FACEBOOK */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-3xl p-6">

              <div className="flex items-center gap-4 mb-4">

                <span className="text-3xl">
                  📘
                </span>

                <h1 className="text-2xl font-bold">

                  Facebook

                </h1>

              </div>

              <p className="text-gray-600 mb-3">

                Nike Sports

              </p>

              <span className="text-green-600 font-semibold">

                Connected

              </span>

            </div>

          </div>

          {/* COMPARE BUTTON */}
          <div className="mt-8 flex justify-end">

            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg">

              Compare Accounts

            </button>

          </div>

        </div>

        {/* KPI CARDS */}
        <div className="grid grid-cols-4 gap-6 mb-10">

          <ComparisonCard
            title="Best Engagement"
            value="91%"
            growth="YouTube Leads"
            icon={<Users size={28} />}
          />

          <ComparisonCard
            title="Highest Reach"
            value="2.4M"
            growth="Instagram"
            icon={<BarChart3 size={28} />}
          />

          <ComparisonCard
            title="Best CTR"
            value="6.8%"
            growth="YouTube"
            icon={<MousePointerClick size={28} />}
          />

          <ComparisonCard
            title="Top ROI"
            value="186%"
            growth="AI Prediction"
            icon={<DollarSign size={28} />}
          />

        </div>

        {/* CHART */}
        <div className="bg-white border rounded-3xl p-8 shadow-sm mb-10">

          <h1 className="text-4xl font-bold mb-8">

            Platform Comparison Analytics

          </h1>

          <ResponsiveContainer width="100%" height={420}>

            <BarChart data={comparisonData}>

              <XAxis dataKey="platform" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Bar
                dataKey="engagement"
                fill="#7C3AED"
                radius={[8, 8, 0, 0]}
              />

              <Bar
                dataKey="reach"
                fill="#EC4899"
                radius={[8, 8, 0, 0]}
              />

              <Bar
                dataKey="ctr"
                fill="#3B82F6"
                radius={[8, 8, 0, 0]}
              />

              <Bar
                dataKey="roi"
                fill="#10B981"
                radius={[8, 8, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* SUMMARY TABLE */}
        <div className="bg-white border rounded-3xl p-8 shadow-sm">

          <h1 className="text-4xl font-bold mb-8">

            Comparison Summary

          </h1>

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-5 text-xl">
                  Platform
                </th>

                <th className="text-left py-5 text-xl">
                  Engagement
                </th>

                <th className="text-left py-5 text-xl">
                  Reach
                </th>

                <th className="text-left py-5 text-xl">
                  CTR
                </th>

                <th className="text-left py-5 text-xl">
                  ROI
                </th>

                <th className="text-left py-5 text-xl">
                  Lead Potential
                </th>

              </tr>

            </thead>

            <tbody>

              {comparisonData.map((item, index) => (

                <tr
                  key={index}
                  className="border-b"
                >

                  <td className="py-5 text-lg font-semibold">

                    {item.platform}

                  </td>

                  <td className="py-5 text-lg">

                    {item.engagement}%

                  </td>

                  <td className="py-5 text-lg">

                    {item.reach}%

                  </td>

                  <td className="py-5 text-lg">

                    {item.ctr}%

                  </td>

                  <td className="py-5 text-lg">

                    {item.roi}%

                  </td>

                  <td className="py-5 text-green-600 font-semibold">

                    High

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Comparisons;