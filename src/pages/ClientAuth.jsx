import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ClientAuth() {

  const [isSignup, setIsSignup] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {

    navigate("/client-dashboard");

  };

  return (

    <div className="min-h-screen flex bg-[#ECECEC] overflow-hidden">

      {/* LEFT SIDE */}
      <div className="w-1/2 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 relative flex items-center justify-center p-16">

        {/* GLOW */}
        <div className="absolute w-[700px] h-[700px] bg-cyan-400/20 rounded-full blur-3xl"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-white max-w-xl">

          {/* ICON */}
          <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-4xl mb-10">

            📊

          </div>

          {/* TITLE */}
          <h1 className="text-7xl font-bold leading-tight mb-8">

            AI Marketing
            <br />
            Intelligence

          </h1>

          {/* DESCRIPTION */}
          <p className="text-2xl text-cyan-100 leading-10 mb-12">

            Analyze campaigns,
            predict leads,
            compare platforms,
            and optimize advertisements
            using AI-powered analytics.

          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6">

            {/* CARD 1 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6">

              <h2 className="text-cyan-100 mb-3">

                Campaign Success

              </h2>

              <h1 className="text-5xl font-bold">

                92%

              </h1>

            </div>

            {/* CARD 2 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6">

              <h2 className="text-cyan-100 mb-3">

                ROI Growth

              </h2>

              <h1 className="text-5xl font-bold">

                186%

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
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-700 text-white shadow-lg"
                  : "text-gray-600"
              }`}
            >

              Login

            </button>

            <button
              onClick={() => setIsSignup(true)}
              className={`flex-1 py-4 rounded-xl text-lg font-semibold transition ${
                isSignup
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-700 text-white shadow-lg"
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
                ? "Create your AI analytics client account"
                : "Login to continue to your analytics dashboard"}

            </p>

          </div>

          {/* FORM */}
          <div className="space-y-8">

            {/* SIGNUP EXTRA */}
            {isSignup && (

              <>
                {/* FULL NAME */}
                <div>

                  <label className="block text-lg font-semibold mb-3">

                    Full Name

                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 rounded-2xl px-6 py-5 outline-none focus:border-cyan-500"
                  />

                </div>

                {/* COMPANY */}
                <div>

                  <label className="block text-lg font-semibold mb-3">

                    Company Name

                  </label>

                  <input
                    type="text"
                    placeholder="Enter company name"
                    className="w-full border border-gray-300 rounded-2xl px-6 py-5 outline-none focus:border-cyan-500"
                  />

                </div>
              </>

            )}

            {/* EMAIL */}
            <div>

              <label className="block text-lg font-semibold mb-3">

                Email Address

              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-2xl px-6 py-5 outline-none focus:border-cyan-500"
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
                className="w-full border border-gray-300 rounded-2xl px-6 py-5 outline-none focus:border-cyan-500"
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
                  className="w-full border border-gray-300 rounded-2xl px-6 py-5 outline-none focus:border-cyan-500"
                />

              </div>

            )}

            {/* LOGIN OPTIONS */}
            {!isSignup && (

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-3">

                  <input type="checkbox" />

                  <span className="text-gray-600">

                    Remember me

                  </span>

                </div>

                <button
                  onClick={() => navigate("/client-forgot-password")}
                  className="text-cyan-600 font-semibold"
                >

                  Forgot Password?

                </button>

              </div>

            )}

            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-cyan-500 to-indigo-700 text-white py-5 rounded-2xl text-xl font-semibold shadow-2xl hover:scale-[1.01] transition"
            >

              {isSignup ? "Create Account" : "Login"}

            </button>

            {/* SWITCH */}
            <div className="text-center pt-4">

              <span className="text-gray-500">

                Agency Admin?

              </span>

              <button
                onClick={() => navigate("/")}
                className="ml-2 text-cyan-600 font-bold"
              >

                Agency Login

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ClientAuth;