import ClientSidebar from "../components/ClientSidebar";

import {
  User,
  Lock,
  Bell,
  FileText,
  Save,
} from "lucide-react";

function ClientSettings() {

  return (

    <div className="bg-[#F5F7FB] min-h-screen">

      {/* SIDEBAR */}
      <ClientSidebar />

      {/* MAIN CONTENT */}
      <div className="ml-[250px] p-10 overflow-x-hidden">

        {/* HEADER */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-[#111827] mb-4">

            Client Settings

          </h1>

          <p className="text-gray-500 text-lg">

            Manage your profile, notifications, and report preferences.

          </p>

        </div>

        {/* PROFILE SETTINGS */}
        <div className="bg-white rounded-3xl p-8 border shadow-sm mb-8">

          <div className="flex items-center gap-4 mb-8">

            <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">

              <User size={28} />

            </div>

            <div>

              <h2 className="text-3xl font-bold">

                Profile Settings

              </h2>

              <p className="text-gray-500">

                Update your personal information

              </p>

            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Client Name"
              className="border rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
            />

            <input
              type="email"
              placeholder="Client Email"
              className="border rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
            />

            <input
              type="text"
              placeholder="Company Name"
              className="border rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
            />

          </div>

        </div>

        {/* PASSWORD SETTINGS */}
        <div className="bg-white rounded-3xl p-8 border shadow-sm mb-8">

          <div className="flex items-center gap-4 mb-8">

            <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600">

              <Lock size={28} />

            </div>

            <div>

              <h2 className="text-3xl font-bold">

                Password Settings

              </h2>

              <p className="text-gray-500">

                Change your account password securely

              </p>

            </div>

          </div>

          <div className="space-y-6">

            <input
              type="password"
              placeholder="Current Password"
              className="w-full border rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
            />

            <input
              type="password"
              placeholder="New Password"
              className="w-full border rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
            />

          </div>

        </div>

        {/* NOTIFICATION SETTINGS */}
        <div className="bg-white rounded-3xl p-8 border shadow-sm mb-8">

          <div className="flex items-center gap-4 mb-8">

            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">

              <Bell size={28} />

            </div>

            <div>

              <h2 className="text-3xl font-bold">

                Notification Preferences

              </h2>

              <p className="text-gray-500">

                Customize alerts and campaign updates

              </p>

            </div>

          </div>

          <div className="space-y-6">

            <div className="flex flex-col md:flex-row justify-between md:items-center bg-gray-50 rounded-2xl p-5 gap-4">

              <div>

                <h3 className="font-semibold text-lg">

                  Campaign Alerts

                </h3>

                <p className="text-gray-500">

                  Receive updates about campaign performance

                </p>

              </div>

              <input type="checkbox" className="w-6 h-6" />

            </div>

            <div className="flex flex-col md:flex-row justify-between md:items-center bg-gray-50 rounded-2xl p-5 gap-4">

              <div>

                <h3 className="font-semibold text-lg">

                  AI Insights Notifications

                </h3>

                <p className="text-gray-500">

                  Get notified when AI generates new recommendations

                </p>

              </div>

              <input type="checkbox" className="w-6 h-6" />

            </div>

          </div>

        </div>

        {/* REPORT PREFERENCES */}
        <div className="bg-white rounded-3xl p-8 border shadow-sm mb-8">

          <div className="flex items-center gap-4 mb-8">

            <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600">

              <FileText size={28} />

            </div>

            <div>

              <h2 className="text-3xl font-bold">

                Report Preferences

              </h2>

              <p className="text-gray-500">

                Select report formats and frequency

              </p>

            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <select className="border rounded-2xl px-5 py-4 outline-none focus:border-purple-500">

              <option>PDF Reports</option>

              <option>Excel Reports</option>

              <option>CSV Reports</option>

            </select>

            <select className="border rounded-2xl px-5 py-4 outline-none focus:border-purple-500">

              <option>Weekly Reports</option>

              <option>Monthly Reports</option>

              <option>Daily Reports</option>

            </select>

          </div>

        </div>

        {/* SAVE BUTTON */}
        <div className="flex justify-end">

          <button className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:scale-[1.02] transition">

            <Save size={22} />

            Save Changes

          </button>

        </div>

      </div>

    </div>
  );
}

export default ClientSettings;