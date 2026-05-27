import Sidebar from "../components/Sidebar";

import {
  Download,
} from "lucide-react";

function Analytics() {

  const leftFeatures = [

    {
      feature: "Followers",
      value: "125K",
    },

    {
      feature: "Engagement Rate",
      value: "4.25%",
    },

    {
      feature: "Reach",
      value: "2.4M",
    },

    {
      feature: "CTR",
      value: "3.62%",
    },

    {
      feature: "Avg. Likes",
      value: "5.2K",
    },

    {
      feature: "Avg. Comments",
      value: "320",
    },
  ];

  const rightFeatures = [

    {
      feature: "Avg. Shares",
      value: "215",
    },

    {
      feature: "Posting Frequency",
      value: "3.4 / week",
    },

    {
      feature: "Growth Rate",
      value: "2.8%",
    },

    {
      feature: "Watch Time",
      value: "65%",
    },

    {
      feature: "Sentiment Score",
      value: "82/100",
    },

    {
      feature: "Content Quality Score",
      value: "78/100",
    },
  ];

  const positiveInsights = [

    "High audience engagement",

    "Strong reel performance",

    "Good content quality",

    "Consistent posting",
  ];

  const negativeInsights = [

    "Low conversion rate",

    "Weak hashtag optimization",

    "Poor posting timing",

    "Audience growth slowing",
  ];

  return (

    <div className="flex bg-[#F7F8FC] min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="ml-64 flex-1 p-10">

        {/* PAGE TITLE */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-[#111827] mb-4">

          FEATURE EXTRACTION (ACCOUNT INTELLIGENCE)

          </h1>

          <p className="text-gray-500 text-lg">

            AI-powered account intelligence and feature extraction report.

          </p>

        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-3xl border shadow-sm p-8">

          {/* TOP */}
          <div className="flex justify-between items-center mb-8">

            <h1 className="text-4xl font-bold">

              Account Intelligence Report

            </h1>

            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-4 rounded-2xl flex items-center gap-3 shadow-lg hover:opacity-90 transition">

              <Download size={22} />

              Download Report

            </button>

          </div>

          {/* TABLE */}
          <div className="grid grid-cols-2 gap-10 mb-10">

            {/* LEFT TABLE */}
            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left py-4 text-xl">
                    Feature
                  </th>

                  <th className="text-left py-4 text-xl">
                    Value
                  </th>

                </tr>

              </thead>

              <tbody>

                {leftFeatures.map((item, index) => (

                  <tr
                    key={index}
                    className="border-b"
                  >

                    <td className="py-5 text-lg">

                      {item.feature}

                    </td>

                    <td className="py-5 text-lg font-semibold">

                      {item.value}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

            {/* RIGHT TABLE */}
            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left py-4 text-xl">
                    Feature
                  </th>

                  <th className="text-left py-4 text-xl">
                    Value
                  </th>

                </tr>

              </thead>

              <tbody>

                {rightFeatures.map((item, index) => (

                  <tr
                    key={index}
                    className="border-b"
                  >

                    <td className="py-5 text-lg">

                      {item.feature}

                    </td>

                    <td className="py-5 text-lg font-semibold">

                      {item.value}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* AI SUMMARY */}
          <div className="bg-[#F5F4FF] border rounded-3xl p-8 mb-8">

            <h1 className="text-3xl font-bold text-indigo-700 mb-5">

              AI Account Summary

            </h1>

            <p className="text-gray-700 leading-9 text-lg">

              This account shows strong engagement and good content quality.
              Audience interaction is high with consistent posting frequency.
              Growth rate is positive but can be improved with better content
              strategy and posting time optimization.

            </p>

          </div>

          {/* INSIGHTS */}
          <div className="grid grid-cols-2 gap-8">

            {/* POSITIVE */}
            <div className="bg-green-50 border border-green-200 rounded-3xl p-8">

              <h1 className="text-3xl font-bold text-green-700 mb-6">

                Positive Insights

              </h1>

              <ul className="space-y-4">

                {positiveInsights.map((item, index) => (

                  <li
                    key={index}
                    className="text-lg flex items-center gap-3"
                  >

                    <span className="text-green-600 text-2xl">
                      •
                    </span>

                    {item}

                  </li>

                ))}

              </ul>

            </div>

            {/* NEGATIVE */}
            <div className="bg-red-50 border border-red-200 rounded-3xl p-8">

              <h1 className="text-3xl font-bold text-red-700 mb-6">

                Negative Insights

              </h1>

              <ul className="space-y-4">

                {negativeInsights.map((item, index) => (

                  <li
                    key={index}
                    className="text-lg flex items-center gap-3"
                  >

                    <span className="text-red-600 text-2xl">
                      •
                    </span>

                    {item}

                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Analytics;