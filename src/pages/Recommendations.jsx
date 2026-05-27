import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AIChatBox from "../components/AIChatBox";

function Recommendations() {

  return (

    <div className="flex bg-[#F5F7FB] min-h-screen overflow-hidden">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col ml-[250px]">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <div className="p-8 overflow-y-auto">

          {/* HEADER */}
          <div className="mb-10">

            <h1 className="text-5xl font-bold text-[#111827] mb-4">

              AI Recommendations Engine

            </h1>

            <p className="text-gray-500 text-lg">

              AI-powered advertisement strategy recommendations and marketing assistant.

            </p>

          </div>

          {/* MAIN LAYOUT */}
          <div className="flex gap-8 items-start">

            {/* LEFT SECTION */}
            <div className="flex-1 space-y-10">

              {/* PLATFORM RECOMMENDATIONS */}
              <div>

                <h2 className="text-3xl font-bold mb-6">

                  Platform Recommendations

                </h2>

                <div className="grid grid-cols-2 gap-6">

                  {/* CARD */}
                  <div className="bg-white rounded-3xl p-8 border shadow-sm hover:shadow-xl transition min-h-[220px]">

                    <h3 className="text-2xl font-bold mb-4">

                      Instagram Reels

                    </h3>

                    <p className="text-gray-600 leading-8 mb-6">

                      Instagram Reels predicted to generate highest engagement and conversion.

                    </p>

                    <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">

                      High Engagement

                    </span>

                  </div>

                  {/* CARD */}
                  <div className="bg-white rounded-3xl p-8 border shadow-sm hover:shadow-xl transition min-h-[220px]">

                    <h3 className="text-2xl font-bold mb-4">

                      YouTube Shorts

                    </h3>

                    <p className="text-gray-600 leading-8 mb-6">

                      YouTube Shorts suitable for audience growth and long-term reach.

                    </p>

                    <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">

                      Audience Growth

                    </span>

                  </div>

                  {/* CARD */}
                  <div className="bg-white rounded-3xl p-8 border shadow-sm hover:shadow-xl transition min-h-[220px]">

                    <h3 className="text-2xl font-bold mb-4">

                      Facebook Campaigns

                    </h3>

                    <p className="text-gray-600 leading-8 mb-6">

                      Facebook campaigns highly effective for retargeting and customer segmentation.

                    </p>

                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">

                      Lead Conversion

                    </span>

                  </div>

                  {/* CARD */}
                  <div className="bg-white rounded-3xl p-8 border shadow-sm hover:shadow-xl transition min-h-[220px]">

                    <h3 className="text-2xl font-bold mb-4">

                      LinkedIn B2B Campaigns

                    </h3>

                    <p className="text-gray-600 leading-8 mb-6">

                      LinkedIn campaigns suitable for professional lead generation and B2B targeting.

                    </p>

                    <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">

                      B2B Leads

                    </span>

                  </div>

                </div>

              </div>

              {/* AUDIENCE INSIGHTS */}
              <div>

                <h2 className="text-3xl font-bold mb-6">

                  Audience Insights

                </h2>

                <div className="grid grid-cols-2 gap-6">

                  <div className="bg-white rounded-3xl p-8 border shadow-sm hover:shadow-xl transition min-h-[220px]">

                    <h3 className="text-2xl font-bold mb-4">

                      Target Audience

                    </h3>

                    <p className="text-gray-600 leading-8 mb-6">

                      Primary audience identified between 18–30 age group with strong purchasing behavior and mobile-first interaction.

                    </p>

                    <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">

                      18–30 Age Group

                    </span>

                  </div>

                  <div className="bg-white rounded-3xl p-8 border shadow-sm hover:shadow-xl transition min-h-[220px]">

                    <h3 className="text-2xl font-bold mb-4">

                      Audience Interests

                    </h3>

                    <p className="text-gray-600 leading-8 mb-6">

                      Audience highly interested in technology, fitness, startups, AI tools, business, and lifestyle content.

                    </p>

                    <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">

                      High Interest Segments

                    </span>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT SECTION */}
            <div className="w-[420px] sticky top-6 flex-shrink-0">

              <AIChatBox />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Recommendations;