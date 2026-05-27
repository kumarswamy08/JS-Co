import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AgencyAuth() {

  const [isSignup, setIsSignup] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {

    navigate("/dashboard");

  };

  return (

    <div className="min-h-screen flex bg-[#ECECEC] overflow-hidden">

      {/* LEFT SIDE */}
      <div className="w-1/2 bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4F46E5] relative flex items-center justify-center p-16">

        {/* GLOW */}
        <div className="absolute w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-3xl"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-white max-w-xl">

          <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-4xl mb-10">

            ✦

          </div>

          <h1 className="text-7xl font-bold leading-tight mb-8">

            AI Agency
            <br />
            Control Center

          </h1>

          <p className="text-2xl text-purple-100 leading-10 mb-12">

            Manage clients,
            analyze advertisements,
            predict ROI,
            and generate AI-powered marketing intelligence.

          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6">

              <h2 className="text-purple-100 mb-3">

                Active Clients

              </h2>

              <h1 className="text-5xl font-bold">

                850+

              </h1>

            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6">

              <h2 className="text-purple-100 mb-3">

                AI Accuracy

              </h2>

              <h1 className="text-5xl font-bold">

                98%

              </h1>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 bg-white flex items-center justify-center px-20">

        <div className="w-full max-w-xl">

          {/* TOGGLE */}
          <div className="flex bg-gray-100 rounded-2xl p-2 mb-12">

            <button
              onClick={() => setIsSignup(false)}
              className={`flex-1 py-4 rounded-xl text-lg font-semibold transition ${
                !isSignup
                  ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-lg"
                  : "text-gray-600"
              }`}
            >

              Login

            </button>

            <button
              onClick={() => setIsSignup(true)}
              className={`flex-1 py-4 rounded-xl text-lg font-semibold transition ${
                isSignup
                  ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-lg"
                  : "text-gray-600"
              }`}
            >

              Sign Up

            </button>

          </div>

          {/* TITLE */}
          <div className="mb-12">

            <h1 className="text-6xl font-bold mb-5">

              {isSignup ? "Create Account" : "Welcome Back"}

            </h1>

            <p className="text-gray-500 text-xl">

              {isSignup
                ? "Create your AI agency platform account"
                : "Login to continue to your dashboard"}

            </p>

          </div>

          {/* FORM */}
          <div className="space-y-8">

            {/* SIGNUP EXTRA */}
            {isSignup && (

              <div>

                <label className="block text-lg font-semibold mb-3">

                  Agency Name

                </label>

                <input
                  type="text"
                  placeholder="Enter agency name"
                  className="w-full border border-gray-300 rounded-2xl px-6 py-5 outline-none focus:border-purple-600"
                />

              </div>

            )}

            {/* EMAIL */}
            <div>

              <label className="block text-lg font-semibold mb-3">

                Email Address

              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-2xl px-6 py-5 outline-none focus:border-purple-600"
              />

            </div>

            {/* PASSWORD */}
            <div>

              <label className="block text-lg font-semibold mb-3">

                Password

              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-2xl px-6 py-5 outline-none focus:border-purple-600"
              />

            </div>

            {/* CONFIRM PASSWORD */}
            {isSignup && (

              <div>

                <label className="block text-lg font-semibold mb-3">

                  Confirm Password

                </label>

                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full border border-gray-300 rounded-2xl px-6 py-5 outline-none focus:border-purple-600"
                />

              </div>

            )}

            {/* OPTIONS */}
            {!isSignup && (

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-3">

                  <input type="checkbox" />

                  <span className="text-gray-600">

                    Remember me

                  </span>

                </div>

                <button
                  onClick={() => navigate("/agency-forgot-password")}
                  className="text-purple-700 font-semibold"
                >

                  Forgot Password?

                </button>

              </div>

            )}

            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-5 rounded-2xl text-xl font-semibold shadow-2xl hover:scale-[1.01] transition"
            >

              {isSignup ? "Create Account" : "Login"}

            </button>

            {/* CLIENT LOGIN */}
            <div className="text-center pt-4">

              <span className="text-gray-500">

                Client Account?

              </span>

              <button
                onClick={() => navigate("/client-auth")}
                className="ml-2 text-purple-700 font-bold"
              >

                Client Login

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AgencyAuth;