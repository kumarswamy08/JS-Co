import ClientSidebar from "../components/ClientSidebar";

import {
  BrainCircuit,
  TrendingUp,
  Clock3,
  Target,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

function CampaignInsights() {

  const insights = [

    {
      title: "Best Posting Time",
      description:
        "Posting between 7 PM - 9 PM increases engagement by 32%",
      icon: <Clock3 size={28} />,
      bg: "bg-cyan-50",
      text: "text-cyan-600",
    },

    {
      title: "Audience Targeting",
      description:
        "Audience aged 25-34 is generating the highest conversions",
      icon: <Target size={28} />,
      bg: "bg-purple-50",
      text: "text-purple-600",
    },

    {
      title: "Performance Growth",
      description:
        "AI predicts 28% increase in leads for the next campaign cycle",
      icon: <TrendingUp size={28} />,
      bg: "bg-green-50",
      text: "text-green-600",
    },

    {
      title: "Content Optimization",
      description:
        "Short-form video ads are performing 42% better than image ads",
      icon: <Sparkles size={28} />,
      bg: "bg-orange-50",
      text: "text-orange-600",
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

              AI Campaign Insights

            </h1>

            <p className="text-gray-500 text-lg">

              AI-powered recommendations and performance predictions

            </p>

          </div>

          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-6 py-4 rounded-2xl shadow-xl">

            Optimization Score: 96%

          </div>

        </div>

        {/* KPI SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl p-7 border shadow-sm">

            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6">

              <BrainCircuit size={30} />

            </div>

            <h2 className="text-gray-500 mb-3">

              AI Confidence

            </h2>

            <h1 className="text-5xl font-bold">

              94%

            </h1>

          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl p-7 border shadow-sm">

            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">

              <TrendingUp size={30} />

            </div>

            <h2 className="text-gray-500 mb-3">

              Predicted Leads

            </h2>

            <h1 className="text-5xl font-bold">

              +28%

            </h1>

          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl p-7 border shadow-sm">

            <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600 mb-6">

              <Target size={30} />

            </div>

            <h2 className="text-gray-500 mb-3">

              Conversion Rate

            </h2>

            <h1 className="text-5xl font-bold">

              8.4%

            </h1>

          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-3xl p-7 border shadow-sm">

            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">

              <BadgeCheck size={30} />

            </div>

            <h2 className="text-gray-500 mb-3">

              AI Score

            </h2>

            <h1 className="text-5xl font-bold">

              96/100

            </h1>

          </div>

        </div>

        {/* AI RECOMMENDATIONS */}
        <div className="bg-white rounded-3xl p-8 border shadow-sm mb-10">

          <h1 className="text-4xl font-bold mb-10">

            AI Recommendations

          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {insights.map((item, index) => (

              <div
                key={index}
                className={`${item.bg} rounded-3xl p-8`}
              >

                <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 ${item.text}`}>

                  {item.icon}

                </div>

                <h2 className="text-2xl font-bold mb-4">

                  {item.title}

                </h2>

                <p className="text-gray-600 leading-8">

                  {item.description}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* AI SUMMARY */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          {/* CONTENT PERFORMANCE */}
          <div className="bg-white rounded-3xl p-8 border shadow-sm">

            <h1 className="text-3xl font-bold mb-8">

              Content Performance

            </h1>

            <div className="space-y-6">

              <div className="flex justify-between items-center">

                <span className="text-gray-600">

                  Video Ads Performance

                </span>

                <span className="font-bold text-green-600">

                  +42%

                </span>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">

                <div className="bg-green-500 h-4 rounded-full w-[85%]"></div>

              </div>

              <div className="flex justify-between items-center">

                <span className="text-gray-600">

                  Carousel Posts CTR

                </span>

                <span className="font-bold text-cyan-600">

                  +31%

                </span>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">

                <div className="bg-cyan-500 h-4 rounded-full w-[72%]"></div>

              </div>

              <div className="flex justify-between items-center">

                <span className="text-gray-600">

                  Story Ads Engagement

                </span>

                <span className="font-bold text-purple-600">

                  +24%

                </span>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">

                <div className="bg-purple-500 h-4 rounded-full w-[65%]"></div>

              </div>

            </div>

          </div>

          {/* AI PREDICTION */}
          <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-10 text-white shadow-xl">

            <h1 className="text-4xl font-bold mb-8">

              AI Prediction Summary

            </h1>

            <div className="space-y-7 text-lg">

              <div className="flex justify-between">

                <span>

                  Expected Reach Growth

                </span>

                <span className="font-bold">

                  +38%

                </span>

              </div>

              <div className="flex justify-between">

                <span>

                  Predicted ROI

                </span>

                <span className="font-bold">

                  214%

                </span>

              </div>

              <div className="flex justify-between">

                <span>

                  Lead Conversion Forecast

                </span>

                <span className="font-bold">

                  +26%

                </span>

              </div>

              <div className="flex justify-between">

                <span>

                  Campaign Success Probability

                </span>

                <span className="font-bold">

                  93%

                </span>

              </div>

            </div>

            <button className="mt-10 bg-white text-indigo-700 px-8 py-4 rounded-2xl font-bold hover:scale-[1.02] transition">

              Download AI Summary

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CampaignInsights;