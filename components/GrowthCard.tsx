export default function GrowthCard() {
  return (
    <div
      className="bg-gradient-to-br from-black via-gray-800 to-gray-900 
                      rounded-2xl p-6 text-white max-w-sm shadow-lg"
    >
      {/* Tag */}
      <div className="bg-white/10 text-white px-3 py-1 rounded-full text-sm w-fit mb-4">
        Growth
      </div>

      {/* Percentage */}
      <div className="text-5xl font-light relative">
        32.9%<span className="text-sm align-super">*</span>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500" />
        <span className="text-green-400 text-xl ml-1">↗</span>
      </div>

      {/* Description */}
      <p className="text-gray-400 mt-4">
        Average CAGR <span className="font-bold">over 5 years</span>
      </p>
      <p className="text-gray-400 mt-1">
        Sustained High Growth
        <br />
        Driving <span className="font-bold">Long-Term Success</span>
      </p>
    </div>
  );
}
