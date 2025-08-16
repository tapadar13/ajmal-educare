const BottomBanner = ({ text = "Ajmal Educare Pvt Ltd" }) => {
  return (
    <div className="w-full h-full px-6 lg:px-10 sticky bottom-0 -z-10 py-4">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-center opacity-40 text-gray-800 select-none">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default BottomBanner;
