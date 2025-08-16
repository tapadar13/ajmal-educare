const BottomBanner = ({ text = "Ajmal Educare Pvt Ltd" }) => {
  return (
    <div className="w-full h-full px-6 lg:px-10 sticky bottom-0 -z-10 py-4">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-center opacity-30 bg-gradient-to-r from-gray-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent select-none">
          {/* Mobile: Split into two lines, Desktop: Single line */}
          <span className="block sm:hidden">
            Ajmal Educare<br />Pvt Ltd
          </span>
          <span className="hidden sm:block">
            {text}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default BottomBanner;
