import BRAND_CONFIG from '../config/brandConfig';

const SustainabilitySection = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#F4FAF6' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2" style={{ color: '#2D5F3F' }}>
            OUR SUSTAINABILITY
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#2D5F3F' }}>
            IMPACT
          </h2>
          <div className="w-32 sm:w-48 md:w-64 h-1 bg-green-500 mb-4 sm:mb-6 md:mb-8"></div>
          <p className="text-gray-600 max-w-4xl text-sm sm:text-base md:text-lg leading-relaxed">
            At ECO4U, we believe in a better tomorrow. Our mission is to provide eco-friendly
            alternatives that make a real difference with tangible results. Discover how together, we're
            building a green planet, one sustainable choice at a time.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16">
          {/* Plastic Waste Reduction */}
          <div className="flex flex-col items-center text-center p-4 sm:p-6 md:p-8 bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl hover:shadow-xl sm:hover:shadow-2xl md:hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
            <img
              src="/our sustainability impact icons  /recycle  icon-01.png"
              alt="Recycle Icon"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain mb-4 sm:mb-6"
              loading="lazy"
              sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
            />
            <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3" style={{ color: '#89e94c' }}>
              {BRAND_CONFIG.sustainability.emissions.value}
            </h4>
            <p className="text-sm sm:text-base md:text-lg" style={{ color: '#264c2b' }}>
              Reduction in plastic waste
            </p>
          </div>

          {/* Eco-friendly Product Lines */}
          <div className="flex flex-col items-center text-center p-4 sm:p-6 md:p-8 bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl hover:shadow-xl sm:hover:shadow-2xl md:hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
            <img
              src="/our sustainability impact icons  /save tree -2.png"
              alt="Save Tree Icon"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain mb-4 sm:mb-6"
              loading="lazy"
              sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
            />
            <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3" style={{ color: '#89e94c' }}>
              {BRAND_CONFIG.sustainability.trees.value}
            </h4>
            <p className="text-sm sm:text-base md:text-lg" style={{ color: '#264c2b' }}>
              Eco-friendly product lines
            </p>
          </div>

          {/* Water Consumption */}
          <div className="flex flex-col items-center text-center p-4 sm:p-6 md:p-8 bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl hover:shadow-xl sm:hover:shadow-2xl md:hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
            <img
              src="/our sustainability impact icons  /save water -3.png"
              alt="Save Water Icon"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain mb-4 sm:mb-6"
              loading="lazy"
              sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
            />
            <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3" style={{ color: '#89e94c' }}>
              {BRAND_CONFIG.sustainability.water.value}
            </h4>
            <p className="text-sm sm:text-base md:text-lg" style={{ color: '#264c2b' }}>
              Less water consumption
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
