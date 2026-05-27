import Sidebar from "../components/Sidebar";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

const performanceData = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 45 },
  { name: "Mar", value: 40 },
  { name: "Apr", value: 70 },
  { name: "May", value: 85 },
  { name: "Jun", value: 100 },
];

const platformData = [
  { name: "Instagram", value: 40 },
  { name: "YouTube", value: 25 },
  { name: "Facebook", value: 15 },
  { name: "LinkedIn", value: 20 },
];

const engagementData = [
  { name: "Mon", value: 20 },
  { name: "Tue", value: 35 },
  { name: "Wed", value: 45 },
  { name: "Thu", value: 60 },
  { name: "Fri", value: 75 },
];

const predictionData = [
  { name: "Week1", value: 40 },
  { name: "Week2", value: 55 },
  { name: "Week3", value: 80 },
  { name: "Week4", value: 95 },
];

const COLORS = [
  "#7C3AED",
  "#EC4899",
  "#3B82F6",
  "#10B981",
];

function Dashboard() {

  const stats = [

    {
      title: "Total Accounts Analyzed",
      value: "128",
      growth: "+12.4%",
    },

    {
      title: "Total Predictions",
      value: "456",
      growth: "+18.6%",
    },

    {
      title: "Avg. Performance Score",
      value: "84/100",
      growth: "+8.5%",
    },

    {
      title: "Leads Generated",
      value: "2.4k",
      growth: "+15.3%",
    },

    {
      title: "Est. ROI (This Month)",
      value: "$24.8k",
      growth: "+22.1%",
    },
  ];

  return (

    <div className="flex bg-[#F7F8FC] min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="ml-64 flex-1 p-8">

        {/* TOP HEADER */}
        <div className="flex justify-between items-center mb-8">

          <h1 className="text-5xl font-bold text-[#111827] mb-4">

           DASHBOARD (OVERVIEW)

          </h1>

          <div className="flex items-center gap-5">

            <select className="border px-5 py-3 rounded-xl bg-white shadow-sm outline-none">

              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>Last 90 Days</option>

            </select>

            <button className="text-2xl">
              🔔
            </button>

            <button className="text-2xl">
              ⚙️
            </button>

          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-5 gap-5 mb-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-2xl border shadow-sm"
            >

              <h2 className="text-gray-500 text-sm mb-3">

                {item.title}

              </h2>

              <h1 className="text-5xl font-bold mb-4">

                {item.value}

              </h1>

              <p className="text-green-500 font-semibold">

                ● {item.growth}

              </p>

            </div>

          ))}

        </div>

        {/* FIRST ROW */}
        <div className="grid grid-cols-2 gap-6 mb-8">

          {/* PERFORMANCE OVERVIEW */}
          <div className="bg-white rounded-2xl border p-6 shadow-sm">

            <h1 className="text-2xl font-semibold mb-6">
              Performance Overview
            </h1>

            <ResponsiveContainer width="100%" height={280}>

              <LineChart data={performanceData}>

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#7C3AED"
                  strokeWidth={4}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

          {/* PLATFORM DISTRIBUTION */}
          <div className="bg-white rounded-2xl border p-6 shadow-sm">

            <h1 className="text-2xl font-semibold mb-6">
              Platform Distribution
            </h1>

            <ResponsiveContainer width="100%" height={280}>

              <PieChart>

                <Pie
                  data={platformData}
                  dataKey="value"
                  outerRadius={90}
                >

                  {platformData.map((entry, index) => (

                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />

                  ))}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* SECOND ROW */}
        <div className="grid grid-cols-2 gap-6">

          {/* ENGAGEMENT OVERVIEW */}
          <div className="bg-white rounded-2xl border p-6 shadow-sm">

            <h1 className="text-2xl font-semibold mb-6">
              Engagement Overview
            </h1>

            <ResponsiveContainer width="100%" height={280}>

              <BarChart data={engagementData}>

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="value"
                  fill="#7C3AED"
                  radius={[10, 10, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

          {/* PREDICTION OVERVIEW */}
          <div className="bg-white rounded-2xl border p-6 shadow-sm">

            <h1 className="text-2xl font-semibold mb-6">
              Prediction Overview
            </h1>

            <ResponsiveContainer width="100%" height={280}>

              <LineChart data={predictionData}>

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#EC4899"
                  strokeWidth={4}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;