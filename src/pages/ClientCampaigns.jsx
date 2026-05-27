import ClientSidebar from "../components/ClientSidebar";

import {
  Search,
  Filter,
  ArrowRight,
  Globe,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function ClientCampaigns() {

  const navigate = useNavigate();

  const campaigns = [

    {
      id: 1,
      name: "Summer Fashion Campaign",
      platform: "Instagram",
      status: "Active",
      roi: "186%",
      engagement: "82%",
      reach: "1.2M",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 2,
      name: "Tech Product Launch",
      platform: "YouTube",
      status: "Running",
      roi: "204%",
      engagement: "91%",
      reach: "2.8M",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 3,
      name: "Beauty Brand Awareness",
      platform: "Facebook",
      status: "Completed",
      roi: "164%",
      engagement: "76%",
      reach: "980K",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    },

  ];

  const getPlatformIcon = () => {

    return <Globe size={18} />;

  };

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

              Campaigns

            </h1>

            <p className="text-gray-500 text-lg">

              View and monitor all campaigns managed by the agency

            </p>

          </div>

          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-6 py-4 rounded-2xl shadow-xl">

            Total Campaigns: 12

          </div>

        </div>

        {/* SEARCH + FILTER */}
        <div className="flex flex-col xl:flex-row justify-between items-center mb-10 gap-5">

          {/* SEARCH */}
          <div className="flex items-center bg-white rounded-2xl px-5 py-4 shadow-sm border w-full max-w-xl">

            <Search className="text-gray-400 mr-3" size={20} />

            <input
              type="text"
              placeholder="Search campaign..."
              className="outline-none w-full bg-transparent"
            />

          </div>

          {/* FILTER */}
          <button className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-sm border hover:bg-gray-50 transition">

            <Filter size={20} />

            Filter

          </button>

        </div>

        {/* CAMPAIGNS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {campaigns.map((campaign) => (

            <div
              key={campaign.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border hover:shadow-xl transition duration-300"
            >

              {/* IMAGE */}
              <img
                src={campaign.image}
                alt={campaign.name}
                className="w-full h-52 object-cover"
              />

              {/* CONTENT */}
              <div className="p-7">

                {/* PLATFORM */}
                <div className="flex items-center justify-between mb-5 flex-wrap gap-3">

                  <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">

                    {getPlatformIcon()}

                    {campaign.platform}

                  </div>

                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">

                    {campaign.status}

                  </span>

                </div>

                {/* TITLE */}
                <h1 className="text-2xl font-bold mb-6">

                  {campaign.name}

                </h1>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-4 mb-8">

                  <div>

                    <p className="text-gray-500 text-sm mb-2">

                      ROI

                    </p>

                    <h2 className="font-bold text-indigo-600">

                      {campaign.roi}

                    </h2>

                  </div>

                  <div>

                    <p className="text-gray-500 text-sm mb-2">

                      Reach

                    </p>

                    <h2 className="font-bold">

                      {campaign.reach}

                    </h2>

                  </div>

                  <div>

                    <p className="text-gray-500 text-sm mb-2">

                      Engagement

                    </p>

                    <h2 className="font-bold">

                      {campaign.engagement}

                    </h2>

                  </div>

                </div>

                {/* BUTTON */}
                <button
                  onClick={() => navigate("/campaign-analytics")}
                  className="w-full bg-gradient-to-r from-cyan-500 to-indigo-700 text-white py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold hover:scale-[1.02] transition"
                >

                  View Campaign

                  <ArrowRight size={20} />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default ClientCampaigns;