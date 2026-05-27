import ClientSidebar from "../components/ClientSidebar";

import {
  TrendingUp,
  Users,
  Eye,
  MousePointerClick,
} from "lucide-react";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

function CampaignAnalytics() {

  const performanceData = [

    { month: "Jan", reach: 4000, engagement: 2400 },

    { month: "Feb", reach: 5200, engagement: 3000 },

    { month: "Mar", reach: 6800, engagement: 4100 },

    { month: "Apr", reach: 7900, engagement: 4900 },

    { month: "May", reach: 9200, engagement: 5800 },

  ];

  const leadsData = [

    { name: "Instagram", leads: 420 },

    { name: "Facebook", leads: 310 },

    { name: "YouTube", leads: 540 },

    { name: "LinkedIn", leads: 210 },

  ];

  const audienceData = [

    { name: "18-24", value: 35 },

    { name: "25-34", value: 40 },

    { name: "35-44", value: 15 },

    { name: "45+", value: 10 },

  ];

  const COLORS = [
    "#06B6D4",
    "#4F46E5",
    "#8B5CF6",
    "#14B8A6",
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

              Campaign Analytics

            </h1>

            <p className="text-gray-500 text-lg">

              Monitor campaign performance and audience engagement

            </p>

          </div>

          <div className="bg-gradient-to-r from-cyan-500 to-indigo-700 text-white px-6 py-4 rounded-2xl shadow-xl">

            AI Prediction Score: 94%

          </div>

        </div>

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl p-7 border shadow-sm">

            <div className="flex justify-between items-center mb-6">

              <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600">

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

              2.8M

            </h1>

          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl p-7 border shadow-sm">

            <div className="flex justify-between items-center mb-6">

              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">

                <Users size={28} />

              </div>

              <span className="text-green-500 font-semibold">

                +12%

              </span>

            </div>

            <h2 className="text-gray-500 mb-3">

              Engagement Rate

            </h2>

            <h1 className="text-5xl font-bold">

              82%

            </h1>

          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl p-7 border shadow-sm">

            <div className="flex justify-between items-center mb-6">

              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">

                <MousePointerClick size={28} />

              </div>

              <span className="text-green-500 font-semibold">

                +9%

              </span>

            </div>

            <h2 className="text-gray-500 mb-3">

              CTR

            </h2>

            <h1 className="text-5xl font-bold">

              6.8%

            </h1>

          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-3xl p-7 border shadow-sm">

            <div className="flex justify-between items-center mb-6">

              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">

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

        {/* CHARTS */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-10">

          {/* LINE CHART */}
          <div className="bg-white rounded-3xl p-8 border shadow-sm">

            <h1 className="text-3xl font-bold mb-8">

              Reach & Engagement

            </h1>

            <ResponsiveContainer width="100%" height={320}>

              <LineChart data={performanceData}>

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

          {/* BAR CHART */}
          <div className="bg-white rounded-3xl p-8 border shadow-sm">

            <h1 className="text-3xl font-bold mb-8">

              Leads by Platform

            </h1>

            <ResponsiveContainer width="100%" height={320}>

              <BarChart data={leadsData}>

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="leads"
                  fill="#4F46E5"
                  radius={[10, 10, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* AUDIENCE + AI */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

          {/* PIE CHART */}
          <div className="bg-white rounded-3xl p-8 border shadow-sm">

            <h1 className="text-3xl font-bold mb-8">

              Audience Age

            </h1>

            <ResponsiveContainer width="100%" height={300}>

              <PieChart>

                <Pie
                  data={audienceData}
                  dataKey="value"
                  outerRadius={100}
                  label
                >

                  {audienceData.map((entry, index) => (

                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />

                  ))}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

          {/* AI INSIGHTS */}
          <div className="xl:col-span-2 bg-white rounded-3xl p-8 border shadow-sm">

            <h1 className="text-3xl font-bold mb-8">

              AI Performance Insights

            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="bg-cyan-50 rounded-2xl p-6">

                <h2 className="text-xl font-semibold mb-3">

                  Best Posting Time

                </h2>

                <p className="text-gray-600">

                  7:00 PM - 9:00 PM gives maximum engagement

                </p>

              </div>

              <div className="bg-purple-50 rounded-2xl p-6">

                <h2 className="text-xl font-semibold mb-3">

                  Predicted Leads

                </h2>

                <p className="text-gray-600">

                  Expected lead growth: +28% next month

                </p>

              </div>

              <div className="bg-indigo-50 rounded-2xl p-6">

                <h2 className="text-xl font-semibold mb-3">

                  Audience Interest

                </h2>

                <p className="text-gray-600">

                  Video ads are performing 42% better

                </p>

              </div>

              <div className="bg-green-50 rounded-2xl p-6">

                <h2 className="text-xl font-semibold mb-3">

                  Optimization Score

                </h2>

                <p className="text-gray-600">

                  Campaign optimized successfully with AI suggestions

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CampaignAnalytics;