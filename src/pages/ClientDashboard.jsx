import ClientSidebar from "../components/ClientSidebar";

import {
  TrendingUp,
  Users,
  Eye,
  BarChart3,
  ArrowRight,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useNavigate } from "react-router-dom";

function ClientDashboard() {

  const navigate = useNavigate();

  const analyticsData = [

    {
      month: "Jan",
      reach: 4000,
      engagement: 2400,
    },

    {
      month: "Feb",
      reach: 5200,
      engagement: 3000,
    },

    {
      month: "Mar",
      reach: 6100,
      engagement: 3900,
    },

    {
      month: "Apr",
      reach: 7200,
      engagement: 4300,
    },

    {
      month: "May",
      reach: 8600,
      engagement: 5200,
    },

  ];

  const campaigns = [

    {
      name: "Summer Fashion Campaign",
      platform: "Instagram",
      status: "Active",
      roi: "186%",
      engagement: "82%",
    },

    {
      name: "AI Product Awareness",
      platform: "LinkedIn",
      status: "Running",
      roi: "152%",
      engagement: "75%",
    },

    {
      name: "Festival Promotion Ads",
      platform: "Facebook",
      status: "Completed",
      roi: "204%",
      engagement: "91%",
    },

  ];

  return (

    <div className="bg-[#F5F7FB] min-h-screen">

      {/* SIDEBAR */}
      <ClientSidebar />

      {/* MAIN CONTENT */}
      <div className="ml-[250px] p-10 overflow-x-hidden">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10 flex-wrap gap-5">

          <div>

            <h1 className="text-5xl font-bold text-[#111827] mb-3">

              Client Dashboard

            </h1>

            <p className="text-gray-500 text-lg">

              Monitor campaign performance and agency updates

            </p>

          </div>

          <div className="bg-gradient-to-r from-cyan-500 to-indigo-700 text-white px-6 py-4 rounded-2xl shadow-xl">

            AI Performance Score: 92%

          </div>

        </div>

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl p-7 shadow-sm border">

            <div className="flex justify-between items-center mb-6">

              <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600">

                <BarChart3 size={28} />

              </div>

              <span className="text-green-500 font-semibold">

                +12%

              </span>

            </div>

            <h2 className="text-gray-500 mb-3">

              Active Campaigns

            </h2>

            <h1 className="text-5xl font-bold">

              12

            </h1>

          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl p-7 shadow-sm border">

            <div className="flex justify-between items-center mb-6">

              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">

                <Eye size={28} />

              </div>

              <span className="text-green-500 font-semibold">

                +18%

              </span>

            </div>

            <h2 className="text-gray-500 mb-3">

              Total Reach

            </h2>

            <h1 className="text-5xl font-bold">

              2.4M

            </h1>

          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl p-7 shadow-sm border">

            <div className="flex justify-between items-center mb-6">

              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-600">

                <Users size={28} />

              </div>

              <span className="text-green-500 font-semibold">

                +9%

              </span>

            </div>

            <h2 className="text-gray-500 mb-3">

              Engagement Rate

            </h2>

            <h1 className="text-5xl font-bold">

              82%

            </h1>

          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-3xl p-7 shadow-sm border">

            <div className="flex justify-between items-center mb-6">

              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">

                <TrendingUp size={28} />

              </div>

              <span className="text-green-500 font-semibold">

                +24%

              </span>

            </div>

            <h2 className="text-gray-500 mb-3">

              ROI Growth

            </h2>

            <h1 className="text-5xl font-bold">

              186%

            </h1>

          </div>

        </div>

        {/* ANALYTICS + ACTIVITY */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-10">

          {/* CHART */}
          <div className="xl:col-span-2 bg-white rounded-3xl p-8 shadow-sm border">

            <div className="flex justify-between items-center mb-8">

              <div>

                <h1 className="text-3xl font-bold mb-2">

                  Campaign Performance

                </h1>

                <p className="text-gray-500">

                  Reach & engagement overview

                </p>

              </div>

            </div>

            <ResponsiveContainer width="100%" height={350}>

              <LineChart data={analyticsData}>

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="reach"
                  stroke="#06B6D4"
                  strokeWidth={4}
                />

                <Line
                  type="monotone"
                  dataKey="engagement"
                  stroke="#4F46E5"
                  strokeWidth={4}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

          {/* ACTIVITY */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border">

            <h1 className="text-3xl font-bold mb-8">

              Agency Activity

            </h1>

            <div className="space-y-7">

              <div className="border-l-4 border-cyan-500 pl-5">

                <h2 className="font-semibold mb-2">

                  AI Analysis Completed

                </h2>

                <p className="text-gray-500 text-sm">

                  Summer campaign optimized successfully

                </p>

              </div>

              <div className="border-l-4 border-purple-500 pl-5">

                <h2 className="font-semibold mb-2">

                  Report Generated

                </h2>

                <p className="text-gray-500 text-sm">

                  Monthly analytics report uploaded

                </p>

              </div>

              <div className="border-l-4 border-green-500 pl-5">

                <h2 className="font-semibold mb-2">

                  ROI Improved

                </h2>

                <p className="text-gray-500 text-sm">

                  Campaign performance increased by 18%

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* CAMPAIGNS */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-10 flex-wrap gap-5">

            <div>

              <h1 className="text-4xl font-bold mb-2">

                Campaigns

              </h1>

              <p className="text-gray-500">

                Select campaign to view analytics and reports

              </p>

            </div>

          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px]">

              <thead>

                <tr className="text-left border-b">

                  <th className="pb-5 text-gray-500">

                    Campaign

                  </th>

                  <th className="pb-5 text-gray-500">

                    Platform

                  </th>

                  <th className="pb-5 text-gray-500">

                    Status

                  </th>

                  <th className="pb-5 text-gray-500">

                    ROI

                  </th>

                  <th className="pb-5 text-gray-500">

                    Engagement

                  </th>

                  <th className="pb-5 text-gray-500">

                    Action

                  </th>

                </tr>

              </thead>

              <tbody>

                {campaigns.map((campaign, index) => (

                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >

                    <td className="py-6 font-semibold">

                      {campaign.name}

                    </td>

                    <td className="py-6">

                      {campaign.platform}

                    </td>

                    <td className="py-6">

                      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">

                        {campaign.status}

                      </span>

                    </td>

                    <td className="py-6 font-semibold text-indigo-600">

                      {campaign.roi}

                    </td>

                    <td className="py-6">

                      {campaign.engagement}

                    </td>

                    <td className="py-6">

                      <button
                        onClick={() => navigate("/campaign-analytics")}
                        className="flex items-center gap-2 text-cyan-600 font-semibold"
                      >

                        View

                        <ArrowRight size={18} />

                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ClientDashboard;