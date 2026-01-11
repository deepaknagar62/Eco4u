import BRAND_CONFIG from '../config/brandConfig';

const SustainabilitySection = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#F4FAF6' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-2" style={{ color: '#2D5F3F' }}>
            OUR SUSTAINABILITY IMPACT
          </h2>
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#2D5F3F' }}>
            IMPACT
          </h2>
          <div className="w-64 h-1 bg-green-500 mb-8"></div>
          <p className="text-gray-600 max-w-4xl text-lg leading-relaxed">
            At ECO4U, we believe in a better tomorrow. Our mission is provide eco-fiendly eco-friendly
            alternatives that make a real difference, bangible results. Discover how how together, w're
            building greea green planet, one sustainable choice a atime.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Plastic Waste Reduction */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-2">
            <img
              src="/our sustainability impact icons  /recycle  icon-01.png"
              alt="Recycle Icon"
              className="w-40 h-40 object-contain mb-6"
            />
            <h4 className="text-5xl font-bold mb-3" style={{ color: '#89e94c' }}>
              {BRAND_CONFIG.sustainability.emissions.value}
            </h4>
            <p className="text-lg" style={{ color: '#264c2b' }}>
              Reduction in plastic waste
            </p>
          </div>

          {/* Eco-friendly Product Lines */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-2">
            <img
              src="/our sustainability impact icons  /save tree -2.png"
              alt="Save Tree Icon"
              className="w-40 h-40 object-contain mb-6"
            />
            <h4 className="text-5xl font-bold mb-3" style={{ color: '#89e94c' }}>
              {BRAND_CONFIG.sustainability.trees.value}
            </h4>
            <p className="text-lg" style={{ color: '#264c2b' }}>
              Eco-friendly product lines
            </p>
          </div>

          {/* Water Consumption */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-2">
            <img
              src="/our sustainability impact icons  /save water -3.png"
              alt="Save Water Icon"
              className="w-40 h-40 object-contain mb-6"
            />
            <h4 className="text-5xl font-bold mb-3" style={{ color: '#89e94c' }}>
              {BRAND_CONFIG.sustainability.water.value}
            </h4>
            <p className="text-lg" style={{ color: '#264c2b' }}>
              Less water consumption
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
