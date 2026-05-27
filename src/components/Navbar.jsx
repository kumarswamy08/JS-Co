function Navbar() {
  return (

    <div className="bg-white px-8 py-4 flex justify-between items-center border-b">

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search here..."
        className="border rounded-xl px-4 py-2 w-80 outline-none"
      />

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Analyze Button */}
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-xl transition">
          Analyze Account
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="rounded-full"
          />

          <div>
            <h1 className="font-semibold text-sm">
              John Doe
            </h1>

            <p className="text-xs text-gray-500">
              Agency Admin
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Navbar;