import { useNavigate } from "react-router-dom";

function ClientLogin() {

  const navigate = useNavigate();

  const handleLogin = () => {

    navigate("/dashboard");

  };

  return (

    <div className="min-h-screen bg-[#ECECEC] flex items-center justify-center px-10">

      <div className="w-full max-w-7xl bg-white rounded-[10px] overflow-hidden grid grid-cols-2 shadow-2xl">

        {/* LEFT LOGIN SECTION */}
        <div className="px-24 py-20 flex flex-col justify-center">

          {/* LOGO */}
          <div className="mb-16">

            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-700 rounded-xl rotate-12"></div>

          </div>

          {/* TEXT */}
          <div className="mb-14">

            <h1 className="text-5xl font-bold text-gray-900 mb-4">

              Welcome Back !

            </h1>

            <p className="text-gray-500 text-lg">

              Access your AI Advertisement Analytics dashboard

            </p>

          </div>

          {/* FORM */}
          <div className="space-y-10">

            {/* EMAIL */}
            <div>

              <label className="block text-xl font-medium mb-4">

                Email Address

              </label>

              <input
                type="email"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-indigo-600"
              />

            </div>

            {/* PASSWORD */}
            <div>

              <label className="block text-xl font-medium mb-4">

                Password

              </label>

              <input
                type="password"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-indigo-600"
              />

            </div>

            {/* OPTIONS */}
            <div className="flex justify-between items-center">

              <div className="flex items-center gap-3">

                <input type="checkbox" />

                <span className="text-gray-600">

                  Remember me

                </span>

              </div>

              <button className="text-gray-500 hover:text-indigo-600">

                Forgot Password?

              </button>

            </div>

            {/* LOGIN BUTTON */}
            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-5 rounded-xl text-xl font-semibold shadow-lg hover:scale-[1.01] transition"
            >

              Login →

            </button>

            {/* TERMS */}
            <p className="text-gray-500 leading-8">

              By creating an account, you agree to our
              <span className="text-indigo-600 ml-2">
                Terms of Service
              </span>
              and
              <span className="text-indigo-600 ml-2">
                Privacy Policy
              </span>

            </p>

            {/* SWITCH LOGIN */}
            <div className="text-center pt-5">

              <span className="text-gray-500">

                Agency Admin?

              </span>

              <button
                onClick={() => navigate("/")}
                className="ml-2 text-indigo-600 font-bold"
              >

                Agency Login

              </button>

            </div>

          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 relative flex items-center justify-center p-16">

          {/* CARD */}
          <div className="w-full h-full border border-white/30 rounded-[40px] backdrop-blur-lg bg-white/10 p-12 flex flex-col justify-between">

            {/* TOP */}
            <div>

              <div className="w-24 h-2 bg-white rounded-full mb-16"></div>

              <h1 className="text-5xl font-bold text-white leading-tight mb-8">

                Smart AI
                <br />
                Advertisement Analytics

              </h1>

              <p className="text-white/80 text-2xl leading-10">

                Predict leads,
                analyze ads,
                compare platforms,
                and generate AI-powered marketing insights.

              </p>

            </div>

            {/* BOTTOM */}
            <div className="flex gap-4">

              <div className="w-16 h-4 bg-white rounded-full"></div>

              <div className="w-4 h-4 bg-white/50 rounded-full"></div>

              <div className="w-4 h-4 bg-white/50 rounded-full"></div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ClientLogin;