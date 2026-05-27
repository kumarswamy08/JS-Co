import Sidebar from "../components/Sidebar";

function Predictions() {

  const predictionCards = [

    {
      title: "Performance Score",
      value: "88/100",
      status: "Excellent",
    },

    {
      title: "Lead Prediction",
      value: "420",
      status: "Leads / Month",
    },

    {
      title: "Conversion Rate",
      value: "6.99%",
      status: "High",
    },

    {
      title: "ROI Prediction",
      value: "186%",
      status: "High",
    },
  ];

  const financialCards = [

    {
      title: "Est. Revenue",
      value: "$24,500",
      status: "/ Month",
    },

    {
      title: "Ad Budget (Suggested)",
      value: "$3,200",
      status: "/ Month",
    },

    {
      title: "Expected ROI",
      value: "$19,200",
      status: "/ Month",
    },

    {
      title: "ROAS",
      value: "5.8x",
      status: "Excellent",
    },
  ];

  const aiInsights = [

    "Account has high potential for advertisements.",

    "Focus on video content for better reach.",

    "Optimize posting time: 7PM – 10PM.",

    "Improve CTA strategy to increase conversions.",
  ];

  const recommendations = [

    "Use reels instead of image posts.",

    "Post during peak hours (7PM – 10PM).",

    "Run story ads for better engagement.",

    "Use emotional CTA and clear offers.",

    "Improve thumbnail and caption quality.",
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

          PREDICTIONS (AI ENGINE)

          </h1>

          <p className="text-gray-500 text-lg">

            AI-powered lead generation, conversion,
            and ROI prediction system.

          </p>

        </div>

        {/* PREDICTION OVERVIEW */}
        <div className="mb-10">

          <h1 className="text-3xl font-bold mb-6">

            Prediction Overview

          </h1>

          <div className="grid grid-cols-4 gap-6">

            {predictionCards.map((item, index) => (

              <div
                key={index}
                className="bg-white border rounded-3xl p-7 shadow-sm"
              >

                <h2 className="text-gray-500 text-lg mb-4">

                  {item.title}

                </h2>

                <h1 className="text-5xl font-bold mb-4">

                  {item.value}

                </h1>

                <p className="text-green-500 font-semibold text-lg">

                  {item.status}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* FINANCIAL PREDICTIONS */}
        <div className="mb-10">

          <h1 className="text-3xl font-bold mb-6">

            Financial Predictions

          </h1>

          <div className="grid grid-cols-4 gap-6">

            {financialCards.map((item, index) => (

              <div
                key={index}
                className="bg-white border rounded-3xl p-7 shadow-sm"
              >

                <h2 className="text-gray-500 text-lg mb-4">

                  {item.title}

                </h2>

                <h1 className="text-5xl font-bold mb-4">

                  {item.value}

                </h1>

                <p className="text-green-500 font-semibold text-lg">

                  {item.status}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* INSIGHTS SECTION */}
        <div className="grid grid-cols-2 gap-8">

          {/* AI INSIGHTS */}
          <div className="bg-[#F5F4FF] border rounded-3xl p-8">

            <h1 className="text-3xl font-bold text-indigo-700 mb-6">

              AI Insights

            </h1>

            <div className="space-y-5">

              {aiInsights.map((item, index) => (

                <div
                  key={index}
                  className="flex items-start gap-4 text-lg"
                >

                  <span className="text-green-500 text-2xl">
                    ●
                  </span>

                  <span>

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* RECOMMENDATIONS */}
          <div className="bg-[#F5F4FF] border rounded-3xl p-8">

            <h1 className="text-3xl font-bold text-indigo-700 mb-6">

              Low-Budget AI Recommendations

            </h1>

            <div className="space-y-5">

              {recommendations.map((item, index) => (

                <div
                  key={index}
                  className="flex items-start gap-4 text-lg"
                >

                  <span className="text-blue-500 text-2xl">
                    ●
                  </span>

                  <span>

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Predictions;