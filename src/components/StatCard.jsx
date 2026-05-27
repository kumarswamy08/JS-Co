function StatCard({ title, value, growth }) {
  return (

    <div className="bg-white p-6 rounded-2xl shadow-sm border">

      {/* Title */}
      <h2 className="text-gray-500 text-sm">
        {title}
      </h2>

      {/* Main Value */}
      <h1 className="text-4xl font-bold mt-3">
        {value}
      </h1>

      {/* Growth */}
      <p className="text-green-500 text-sm mt-3">
        {growth}
      </p>

    </div>
  );
}

export default StatCard;