import { useNavigate } from "react-router-dom";

function AgencyForgotPassword() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen flex bg-[#ECECEC] overflow-hidden">

      {/* LEFT SIDE */}
      <div className="w-1/2 bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4F46E5] relative flex items-center justify-center p-16">

        {/* GLOW EFFECT */}
        <div className="absolute w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-3xl"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-white max-w-xl">

          {/* ICON */}
          <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-5xl mb-10">

            🔐

          </div>

          {/* TITLE */}
          <h1 className="text-7xl font-bold leading-tight mb-8">

            Reset Your
            <br />
            Password

          </h1>

          {/* DESCRIPTION */}
          <p className="text-2xl text-purple-100 leading-10 mb-12">

            Securely recover your agency account
            and continue managing AI-powered
            advertisement analytics.

          </p>

          {/* SECURITY CARDS */}
          <div className="grid grid-cols-2 gap-6">

            {/* CARD 1 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6">

              <h2 className="text-purple-100 mb-3">

                Security Level

              </h2>

              <h1 className="text-5xl font-bold">

                High

              </h1>

            </div>

            {/* CARD 2 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6">

              <h2 className="text-purple-100 mb-3">

                AI Protection

              </h2>

              <h1 className="text-5xl font-bold">

                24/7

              </h1>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 bg-white flex items-center justify-center px-20">

        <div className="w-full max-w-xl">

          {/* HEADER */}
          <div className="mb-14">

            <h1 className="text-6xl font-bold mb-5">

              Forgot Password?

            </h1>

            <p className="text-gray-500 text-xl leading-9">

              Enter your registered email address
              and we’ll send a password reset link.

            </p>

          </div>

          {/* FORM */}
          <div className="space-y-8">

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

            {/* SEND BUTTON */}
            <button
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-5 rounded-2xl text-xl font-semibold shadow-2xl hover:scale-[1.01] transition"
            >

              Send Reset Link

            </button>

            {/* BACK TO LOGIN */}
            <div className="text-center pt-5">

              <span className="text-gray-500">

                Remember your password?

              </span>

              <button
                onClick={() => navigate("/")}
                className="ml-2 text-purple-700 font-bold"
              >

                Back to Login

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AgencyForgotPassword;