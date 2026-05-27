import Sidebar from "../components/Sidebar";

import {
  FileText,
  Download,
  FileBarChart,
  Clock3,
  CheckCircle2,
} from "lucide-react";

function ReportCard({
  title,
  type,
  date,
  status,
}) {

  return (

    <div className="bg-white border rounded-3xl p-6 shadow-sm">

      <div className="flex justify-between items-start mb-6">

        <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">

          <FileText size={34} />

        </div>

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold">

          {status}

        </span>

      </div>

      <h1 className="text-2xl font-bold mb-3">

        {title}

      </h1>

      <p className="text-gray-500 mb-5">

        {type}

      </p>

      <div className="flex items-center gap-3 text-gray-500 mb-6">

        <Clock3 size={18} />

        <span>

          {date}

        </span>

      </div>

      <div className="flex gap-4">

        <button className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-2xl flex items-center justify-center gap-2 shadow-lg">

          <Download size={20} />

          Download

        </button>

        <button className="px-5 border rounded-2xl hover:bg-gray-100 transition">

          View

        </button>

      </div>

    </div>
  );
}

function Reports() {

  const reports = [

    {
      title: "Account Intelligence Report",
      type: "Feature Extraction Analysis",
      date: "24 May 2026",
      status: "Ready",
    },

    {
      title: "Prediction Analysis Report",
      type: "Lead & ROI Predictions",
      date: "24 May 2026",
      status: "Ready",
    },

    {
      title: "Post Analysis Report",
      type: "AI Advertisement Analysis",
      date: "23 May 2026",
      status: "Ready",
    },

    {
      title: "Comparison Report",
      type: "Platform Comparison Analytics",
      date: "23 May 2026",
      status: "Ready",
    },
  ];

  return (

    <div className="flex bg-[#F7F8FC] min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="ml-64 flex-1 p-10">

        {/* HEADER */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-[#111827] mb-4">

           REPORTS & EXPORTS

          </h1>

          <p className="text-gray-500 text-lg">

            Download AI-generated analytics and prediction reports.

          </p>

        </div>

        {/* OVERVIEW CARDS */}
        <div className="grid grid-cols-4 gap-6 mb-10">

          {/* TOTAL REPORTS */}
          <div className="bg-white border rounded-3xl p-7 shadow-sm">

            <div className="flex justify-between items-center mb-5">

              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">

                <FileBarChart size={34} />

              </div>

              <CheckCircle2
                className="text-green-500"
                size={30}
              />

            </div>

            <h2 className="text-gray-500 mb-3">

              Total Reports

            </h2>

            <h1 className="text-5xl font-bold">

              24

            </h1>

          </div>

          {/* PDF EXPORTS */}
          <div className="bg-white border rounded-3xl p-7 shadow-sm">

            <div className="flex justify-between items-center mb-5">

              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-red-600">

                <FileText size={34} />

              </div>

              <CheckCircle2
                className="text-green-500"
                size={30}
              />

            </div>

            <h2 className="text-gray-500 mb-3">

              PDF Exports

            </h2>

            <h1 className="text-5xl font-bold">

              16

            </h1>

          </div>

          {/* EXCEL EXPORTS */}
          <div className="bg-white border rounded-3xl p-7 shadow-sm">

            <div className="flex justify-between items-center mb-5">

              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">

                <span className="text-4xl">
                  📊
                </span>

              </div>

              <CheckCircle2
                className="text-green-500"
                size={30}
              />

            </div>

            <h2 className="text-gray-500 mb-3">

              Excel Exports

            </h2>

            <h1 className="text-5xl font-bold">

              8

            </h1>

          </div>

          {/* GENERATED TODAY */}
          <div className="bg-white border rounded-3xl p-7 shadow-sm">

            <div className="flex justify-between items-center mb-5">

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">

                <Download size={34} />

              </div>

              <CheckCircle2
                className="text-green-500"
                size={30}
              />

            </div>

            <h2 className="text-gray-500 mb-3">

              Generated Today

            </h2>

            <h1 className="text-5xl font-bold">

              6

            </h1>

          </div>

        </div>

        {/* REPORTS GRID */}
        <div className="mb-10">

          <h1 className="text-4xl font-bold mb-8">

            Generated Reports

          </h1>

          <div className="grid grid-cols-2 gap-8">

            {reports.map((item, index) => (

              <ReportCard
                key={index}
                title={item.title}
                type={item.type}
                date={item.date}
                status={item.status}
              />

            ))}

          </div>

        </div>

        {/* EXPORT OPTIONS */}
        <div className="bg-white border rounded-3xl p-8 shadow-sm mb-10">

          <h1 className="text-4xl font-bold mb-8">

            Export Options

          </h1>

          <div className="grid grid-cols-3 gap-8">

            {/* PDF */}
            <div className="border rounded-3xl p-8 text-center">

              <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center text-red-600 mx-auto mb-6">

                <FileText size={42} />

              </div>

              <h1 className="text-3xl font-bold mb-4">

                Export PDF

              </h1>

              <p className="text-gray-500 mb-6">

                Download professional AI reports in PDF format.

              </p>

              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-2xl shadow-lg">

                Export PDF

              </button>

            </div>

            {/* EXCEL */}
            <div className="border rounded-3xl p-8 text-center">

              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">

                <span className="text-5xl">
                  📈
                </span>

              </div>

              <h1 className="text-3xl font-bold mb-4">

                Export Excel

              </h1>

              <p className="text-gray-500 mb-6">

                Export analytics and metrics into Excel sheets.

              </p>

              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-2xl shadow-lg">

                Export Excel

              </button>

            </div>

            {/* CSV */}
            <div className="border rounded-3xl p-8 text-center">

              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-6">

                <Download size={42} />

              </div>

              <h1 className="text-3xl font-bold mb-4">

                Export CSV

              </h1>

              <p className="text-gray-500 mb-6">

                Download raw comparison and analytics data.

              </p>

              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-2xl shadow-lg">

                Export CSV

              </button>

            </div>

          </div>

        </div>

        {/* AI SUMMARY */}
        <div className="bg-[#F5F4FF] border rounded-3xl p-8 shadow-sm">

          <h1 className="text-4xl font-bold text-indigo-700 mb-6">

            AI Report Summary

          </h1>

          <p className="text-lg leading-9 text-gray-700">

            The generated reports include detailed account intelligence,
            AI-powered predictions,
            ROI forecasting,
            post analysis,
            audience engagement metrics,
            and platform comparison analytics.
            Reports can be exported in PDF,
            Excel,
            and CSV formats for business analysis,
            presentations,
            and marketing optimization.

          </p>

        </div>

      </div>

    </div>
  );
}

export default Reports;