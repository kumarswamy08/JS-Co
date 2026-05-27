import { useState } from "react";

import Sidebar from "../components/Sidebar";

import {
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MousePointerClick,
  Sparkles,
  TrendingUp,
  BarChart3,
  Download,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

function PostAnalysis() {

  const [showModal, setShowModal] = useState(false);

  const accounts = [

    {
      name: "Instagram",
      username: "@client_instagram",
      icon: <FaInstagram size={34} />,
      color: "from-pink-500 to-orange-400",
    },

    {
      name: "Facebook",
      username: "Client Page",
      icon: <FaFacebook size={34} />,
      color: "from-blue-500 to-cyan-400",
    },

    {
      name: "YouTube",
      username: "Client Channel",
      icon: <FaYoutube size={34} />,
      color: "from-red-500 to-pink-500",
    },

    {
      name: "LinkedIn",
      username: "Client Company",
      icon: <FaLinkedin size={34} />,
      color: "from-cyan-600 to-blue-600",
    },

  ];

  const posts = [

    {
      title: "Summer Collection 2024",

      platform: "Instagram",

      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",

      views: "245K",

      likes: "12.5K",

      comments: "320",
    },

    {
      title: "Tech Watch Launch",

      platform: "Facebook",

      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",

      views: "180K",

      likes: "8.2K",

      comments: "240",
    },

    {
      title: "Workout Promo",

      platform: "YouTube",

      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",

      views: "420K",

      likes: "18K",

      comments: "540",
    },

    {
      title: "Sneaker Campaign",

      platform: "Instagram",

      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",

      views: "310K",

      likes: "15K",

      comments: "420",
    },

  ];

  return (

    <div className="bg-[#F5F7FB] min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="ml-[250px] flex flex-col min-h-screen">

        {/* PAGE CONTENT */}
        <div className="p-8 w-full overflow-x-hidden">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-10 flex-wrap gap-5">

            <div>

              <h1 className="text-5xl font-bold text-[#111827] mb-3">

                AI Post & Ad Analysis

              </h1>

              <p className="text-gray-500 text-lg">

                Analyze client advertisements and AI-powered campaign performance.

              </p>

            </div>

            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-7 py-4 rounded-2xl font-semibold shadow-lg hover:scale-[1.02] transition"
            >

              + Add Client Account

            </button>

          </div>

          {/* CONNECTED ACCOUNTS */}
          <div className="mb-12">

            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">

              <h2 className="text-3xl font-bold">

                Connected Client Accounts

              </h2>

              <button className="border px-6 py-3 rounded-2xl bg-white shadow-sm">

                Manage Accounts

              </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

              {accounts.map((account, index) => (

                <div
                  key={index}
                  className="bg-white rounded-3xl border p-6 shadow-sm hover:shadow-xl transition cursor-pointer"
                >

                  <div className="flex justify-between items-center">

                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${account.color} text-white flex items-center justify-center`}>

                      {account.icon}

                    </div>

                    <span className="text-green-500 font-semibold text-sm">

                      Connected

                    </span>

                  </div>

                  <h3 className="text-2xl font-bold mt-5">

                    {account.name}

                  </h3>

                  <p className="text-gray-500 mt-2">

                    {account.username}

                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* POSTS GALLERY */}
          <div className="mb-12">

            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">

              <h2 className="text-3xl font-bold">

                Client Posts & Ads

              </h2>

              <button className="bg-white border px-6 py-3 rounded-2xl shadow-sm">

                Fetch Latest Ads

              </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

              {posts.map((post, index) => (

                <div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden border shadow-sm hover:shadow-xl transition cursor-pointer"
                >

                  {/* IMAGE */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[240px] object-cover"
                  />

                  {/* CONTENT */}
                  <div className="p-5">

                    <div className="flex justify-between items-center mb-4">

                      <h3 className="text-xl font-bold">

                        {post.title}

                      </h3>

                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">

                        {post.platform}

                      </span>

                    </div>

                    {/* STATS */}
                    <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-6">

                      <div className="flex items-center gap-1">

                        <Eye size={16} />

                        {post.views}

                      </div>

                      <div className="flex items-center gap-1">

                        <Heart size={16} />

                        {post.likes}

                      </div>

                      <div className="flex items-center gap-1">

                        <MessageCircle size={16} />

                        {post.comments}

                      </div>

                    </div>

                    <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-3 rounded-2xl font-semibold hover:scale-[1.02] transition">

                      Analyze Advertisement

                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* ANALYSIS HEADER */}
          <div className="flex justify-between items-center mb-8 flex-wrap gap-5">

            <div>

              <h2 className="text-3xl font-bold mb-2">

                Analysis for: Summer Collection 2024

              </h2>

              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm">

                Instagram Advertisement

              </span>

            </div>

            <button className="flex items-center gap-2 border bg-white px-6 py-3 rounded-2xl shadow-sm">

              <Download size={20} />

              Download Report

            </button>

          </div>

          {/* ANALYSIS GRID */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">

            {/* FEATURES */}
            <div className="bg-white rounded-3xl border shadow-sm p-7">

              <div className="flex items-center gap-3 mb-7">

                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">

                  <BarChart3 size={26} />

                </div>

                <h3 className="text-2xl font-bold">

                  Extracted Features & Metrics

                </h3>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <MetricCard icon={<Eye size={20} />} label="Views" value="245K" growth="+18.6%" />

                <MetricCard icon={<Heart size={20} />} label="Likes" value="12.5K" growth="+21.3%" />

                <MetricCard icon={<MessageCircle size={20} />} label="Comments" value="320" growth="+10.4%" />

                <MetricCard icon={<Share2 size={20} />} label="Shares" value="890" growth="+17.8%" />

                <MetricCard icon={<Bookmark size={20} />} label="Saves" value="1.2K" growth="+11.3%" />

                <MetricCard icon={<MousePointerClick size={20} />} label="CTR" value="2.35%" growth="+14.5%" />

              </div>

            </div>

            {/* PREDICTIONS */}
            <div className="bg-white rounded-3xl border shadow-sm p-7">

              <div className="flex items-center gap-3 mb-7">

                <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600">

                  <TrendingUp size={26} />

                </div>

                <h3 className="text-2xl font-bold">

                  AI Predictions & Forecasts

                </h3>

              </div>

              <div className="space-y-5">

                <PredictionRow title="Predicted Reach" value="320K - 350K" />

                <PredictionRow title="Engagement Prediction" value="15K - 18K" />

                <PredictionRow title="Conversion Rate" value="3.8% - 4.5%" />

                <PredictionRow title="ROI Prediction" value="214%" />

                <PredictionRow title="Lead Generation Score" value="89/100" />

              </div>

            </div>

            {/* RECOMMENDATIONS */}
            <div className="bg-white rounded-3xl border shadow-sm p-7">

              <div className="flex items-center gap-3 mb-7">

                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">

                  <Sparkles size={26} />

                </div>

                <h3 className="text-2xl font-bold">

                  AI Recommendations

                </h3>

              </div>

              <div className="space-y-5 text-gray-700 leading-8">

                <p>✅ Use more Reels to increase reach by 35%</p>

                <p>✅ Add strong CTA in first 3 seconds</p>

                <p>✅ Best posting time: 7PM - 9PM</p>

                <p>✅ Use trending hashtags for discoverability</p>

                <p>✅ Target audience: 18–30 fashion interests</p>

              </div>

            </div>

          </div>

          {/* AI OVERALL SUMMARY */}
          <div className="bg-white rounded-3xl border shadow-sm p-8">

            <div className="flex items-center gap-3 mb-8">

              <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600">

                <Sparkles size={26} />

              </div>

              <h3 className="text-3xl font-bold">

                AI Overall Summary

              </h3>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

              <SummaryCard
                title="Content Quality"
                score="92/100"
                color="text-purple-600"
              />

              <SummaryCard
                title="Engagement Quality"
                score="88/100"
                color="text-green-600"
              />

              <SummaryCard
                title="Conversion Potential"
                score="85/100"
                color="text-orange-600"
              />

              <div className="bg-gray-50 rounded-3xl p-6">

                <h4 className="text-xl font-bold mb-4">

                  Summary

                </h4>

                <p className="text-gray-600 leading-8">

                  This advertisement is performing exceptionally well with strong engagement and conversion potential. AI recommends increasing short-form content and improving CTA positioning for higher ROI.

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* CONNECT ACCOUNT MODAL */}
      {showModal && (

        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">

          <div className="bg-white w-[500px] rounded-3xl p-8 shadow-2xl">

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-3xl font-bold">

                Connect Client Account

              </h2>

              <button
                onClick={() => setShowModal(false)}
                className="text-2xl font-bold"
              >
                ×
              </button>

            </div>

            {/* PLATFORM BUTTONS */}
            <div className="grid grid-cols-2 gap-4 mb-8">

              <button className="bg-pink-100 text-pink-600 py-4 rounded-2xl font-semibold">

                Instagram

              </button>

              <button className="bg-blue-100 text-blue-600 py-4 rounded-2xl font-semibold">

                Facebook

              </button>

              <button className="bg-red-100 text-red-600 py-4 rounded-2xl font-semibold">

                YouTube

              </button>

              <button className="bg-cyan-100 text-cyan-700 py-4 rounded-2xl font-semibold">

                LinkedIn

              </button>

            </div>

            {/* INPUT */}
            <input
              type="text"
              placeholder="Enter Username / Page URL"
              className="w-full border rounded-2xl px-5 py-4 mb-6 outline-none focus:border-purple-500"
            />

            {/* BUTTON */}
            <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-4 rounded-2xl font-semibold">

              Connect Account

            </button>

          </div>

        </div>

      )}

    </div>
  );
}

function MetricCard({ icon, label, value, growth }) {

  return (

    <div className="bg-gray-50 rounded-2xl p-4">

      <div className="text-purple-600 mb-3">

        {icon}

      </div>

      <p className="text-gray-500 text-sm">

        {label}

      </p>

      <h4 className="text-3xl font-bold mt-2">

        {value}

      </h4>

      <p className="text-green-500 text-sm mt-2">

        ↑ {growth}

      </p>

    </div>
  );
}

function PredictionRow({ title, value }) {

  return (

    <div className="flex justify-between items-center bg-gray-50 rounded-2xl px-5 py-4">

      <span className="text-gray-600">

        {title}

      </span>

      <span className="font-bold text-lg">

        {value}

      </span>

    </div>
  );
}

function SummaryCard({ title, score, color }) {

  return (

    <div className="bg-gray-50 rounded-3xl p-6">

      <h4 className="text-xl font-bold mb-5">

        {title}

      </h4>

      <div className={`text-4xl font-bold ${color}`}>

        {score}

      </div>

    </div>
  );
}

export default PostAnalysis;