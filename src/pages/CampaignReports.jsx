import ClientSidebar from "../components/ClientSidebar";

import {
  FileText,
  Download,
  FileSpreadsheet,
  CalendarDays,
  Clock3,
} from "lucide-react";

function CampaignReports() {

  const reports = [

    {
      title: "Monthly Performance Report",
      campaign: "Summer Fashion Campaign",
      date: "May 2026",
      type: "PDF",
      icon: <FileText size={26} />,
      color: "bg-red-100 text-red-600",
    },

    {
      title: "Lead Generation Analysis",
      campaign: "Tech Product Launch",
      date: "May 2026",
      type: "Excel",
      icon: <FileSpreadsheet size={26} />,
      color: "bg-green-100 text-green-600",
    },

    {
      title: "AI Insights Summary",
      campaign: "Beauty Brand Awareness",
      date: "April 2026",
      type: "CSV",
      icon: <FileText size={26} />,
      color: "bg-cyan-100 text-cyan-600",
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

              Campaign Reports

            </h1>

            <p className="text-gray-500 text-lg">

              Download analytics reports and AI-generated summaries

            </p>

          </div>

          <div className="bg-gradient-to-r from-cyan-500 to-indigo-700 text-white px-6 py-4 rounded-2xl shadow-xl">

            Reports Generated: 28

          </div>

        </div>

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl p-7 border shadow-sm">

            <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600 mb-6">

              <FileText size={28} />

            </div>

            <h2 className="text-gray-500 mb-3">

              Total Reports

            </h2>

            <h1 className="text-5xl font-bold">

              28

            </h1>

          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl p-7 border shadow-sm">

            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6">

              <Download size={28} />

            </div>

            <h2 className="text-gray-500 mb-3">

              Downloads

            </h2>

            <h1 className="text-5xl font-bold">

              1.2K

            </h1>

          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl p-7 border shadow-sm">

            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">

              <CalendarDays size={28} />

            </div>

            <h2 className="text-gray-500 mb-3">

              Monthly Reports

            </h2>

            <h1 className="text-5xl font-bold">

              12

            </h1>

          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-3xl p-7 border shadow-sm">

            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">

              <Clock3 size={28} />

            </div>

            <h2 className="text-gray-500 mb-3">

              Last Updated

            </h2>

            <h1 className="text-3xl font-bold">

              Today

            </h1>

          </div>

        </div>

        {/* REPORTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-10">

          {reports.map((report, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 border shadow-sm hover:shadow-xl transition duration-300"
            >

              {/* ICON */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${report.color}`}>

                {report.icon}

              </div>

              {/* TITLE */}
              <h1 className="text-2xl font-bold mb-4">

                {report.title}

              </h1>

              {/* DETAILS */}
              <div className="space-y-3 mb-8">

                <p className="text-gray-500">

                  Campaign:
                  <span className="text-gray-800 font-medium ml-2">

                    {report.campaign}

                  </span>

                </p>

                <p className="text-gray-500">

                  Generated:
                  <span className="text-gray-800 font-medium ml-2">

                    {report.date}

                  </span>

                </p>

                <p className="text-gray-500">

                  Format:
                  <span className="text-gray-800 font-medium ml-2">

                    {report.type}

                  </span>

                </p>

              </div>

              {/* DOWNLOAD */}
              <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold hover:scale-[1.02] transition">

                <Download size={20} />

                Download Report

              </button>

            </div>

          ))}

        </div>

        {/* RECENT ACTIVITY */}
        <div className="bg-white rounded-3xl p-8 border shadow-sm">

          <h1 className="text-4xl font-bold mb-10">

            Recent Report Activity

          </h1>

          <div className="space-y-8">

            <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-6 gap-3">

              <div>

                <h2 className="text-xl font-semibold mb-2">

                  Monthly Analytics Report Generated

                </h2>

                <p className="text-gray-500">

                  Summer Fashion Campaign

                </p>

              </div>

              <span className="text-gray-400">

                2 hours ago

              </span>

            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-6 gap-3">

              <div>

                <h2 className="text-xl font-semibold mb-2">

                  AI Summary Exported

                </h2>

                <p className="text-gray-500">

                  Tech Product Launch Campaign

                </p>

              </div>

              <span className="text-gray-400">

                Yesterday

              </span>

            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">

              <div>

                <h2 className="text-xl font-semibold mb-2">

                  Campaign Performance CSV Downloaded

                </h2>

                <p className="text-gray-500">

                  Beauty Brand Awareness

                </p>

              </div>

              <span className="text-gray-400">

                3 days ago

              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CampaignReports;