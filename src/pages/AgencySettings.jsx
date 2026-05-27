import Sidebar from "../components/Sidebar";

function Settings() {

  return (

    <div className="bg-[#F7F8FC] min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="ml-[250px] p-8">

        {/* HEADER */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-[#111827] mb-4">

            SETTINGS

          </h1>

          <p className="text-gray-500 text-lg">

            Manage your agency profile and preferences.

          </p>

        </div>

        {/* PROFILE SETTINGS */}
        <div className="bg-white rounded-3xl border shadow-sm p-8 mb-8">

          <h1 className="text-3xl font-bold mb-2">

            Profile Settings

          </h1>

          <p className="text-gray-500 mb-8">

            Update your agency information

          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Agency Name"
              className="border rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="email"
              placeholder="Agency Email"
              className="border rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="text"
              placeholder="Company Website"
              className="border rounded-2xl px-5 py-4 outline-none"
            />

          </div>

        </div>

        {/* PASSWORD SETTINGS */}
        <div className="bg-white rounded-3xl border shadow-sm p-8 mb-8">

          <h1 className="text-3xl font-bold mb-2">

            Password Settings

          </h1>

          <p className="text-gray-500 mb-8">

            Change your account password securely

          </p>

          <div className="space-y-5">

            <input
              type="password"
              placeholder="Current Password"
              className="w-full border rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="password"
              placeholder="New Password"
              className="w-full border rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border rounded-2xl px-5 py-4 outline-none"
            />

          </div>

        </div>

        {/* NOTIFICATIONS */}
        <div className="bg-white rounded-3xl border shadow-sm p-8 mb-8">

          <h1 className="text-3xl font-bold mb-2">

            Notification Preferences

          </h1>

          <p className="text-gray-500 mb-8">

            Manage alerts and updates

          </p>

          <div className="space-y-6">

            <div className="flex justify-between items-center border rounded-2xl p-5">

              <div>

                <h2 className="font-semibold text-lg">

                  AI Prediction Alerts

                </h2>

                <p className="text-gray-500 text-sm">

                  Receive campaign prediction updates

                </p>

              </div>

              <input type="checkbox" className="w-5 h-5" />

            </div>

            <div className="flex justify-between items-center border rounded-2xl p-5">

              <div>

                <h2 className="font-semibold text-lg">

                  Weekly Reports

                </h2>

                <p className="text-gray-500 text-sm">

                  Get weekly campaign reports

                </p>

              </div>

              <input type="checkbox" className="w-5 h-5" />

            </div>

          </div>

        </div>

        {/* SAVE BUTTON */}
        <div className="bg-white rounded-3xl border shadow-sm p-8">

          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg">

            Save Changes

          </button>

        </div>

      </div>

    </div>
  );
}

export default Settings;