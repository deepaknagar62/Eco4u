import { getImageUrl, ImagePresets } from '../utils/cloudinary';
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
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 mt-8 sm:mt-12 md:mt-16">
          {/* Plastic Waste Reduction */}
          <div className="flex flex-col items-center text-center p-2 sm:p-4 md:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-md sm:shadow-lg md:shadow-xl lg:shadow-2xl hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-2xl lg:hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
            <img
              src={getImageUrl('/our sustainability impact icons/recycle_icon-01.png', ImagePresets.categoryIcon)}
              alt="Recycle Icon"
              className="w-12 h-12 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain mb-2 sm:mb-3 md:mb-4 lg:mb-6"
              loading="lazy"
              sizes="(max-width: 640px) 48px, (max-width: 768px) 80px, (max-width: 1024px) 128px, 160px"
            />
            <h4 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2 lg:mb-3" style={{ color: '#89e94c' }}>
              {BRAND_CONFIG.sustainability.emissions.value}
            </h4>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg" style={{ color: '#264c2b' }}>
              Reduction in plastic waste
            </p>
          </div>

          {/* Eco-friendly Product Lines */}
          <div className="flex flex-col items-center text-center p-2 sm:p-4 md:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-md sm:shadow-lg md:shadow-xl lg:shadow-2xl hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-2xl lg:hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
            <img
              src={getImageUrl('/our sustainability impact icons/save_water_-3', ImagePresets.categoryIcon)}
              alt="Save Water Icon"
              className="w-12 h-12 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain mb-2 sm:mb-3 md:mb-4 lg:mb-6"
              loading="lazy"
              sizes="(max-width: 640px) 48px, (max-width: 768px) 80px, (max-width: 1024px) 128px, 160px"
            />
            <h4 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2 lg:mb-3" style={{ color: '#89e94c' }}>
              {BRAND_CONFIG.sustainability.trees.value}
            </h4>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg" style={{ color: '#264c2b' }}>
              Eco-friendly product lines
            </p>
          </div>

          {/* Water Consumption */}
          <div className="flex flex-col items-center text-center p-2 sm:p-4 md:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-md sm:shadow-lg md:shadow-xl lg:shadow-2xl hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-2xl lg:hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
            <img
              src={getImageUrl('/our sustainability impact icons/save_tree_-2', ImagePresets.categoryIcon)}
              alt="Save Tree Icon"
              className="w-12 h-12 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain mb-2 sm:mb-3 md:mb-4 lg:mb-6"
              loading="lazy"
              sizes="(max-width: 640px) 48px, (max-width: 768px) 80px, (max-width: 1024px) 128px, 160px"
            />
            <h4 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2 lg:mb-3" style={{ color: '#89e94c' }}>
              {BRAND_CONFIG.sustainability.water.value}
            </h4>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg" style={{ color: '#264c2b' }}>
              Less water consumption
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
