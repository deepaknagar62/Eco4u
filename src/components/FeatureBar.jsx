import BRAND_CONFIG from '../config/brandConfig';

const FeatureBar = () => {
  return (
    <div className="bg-white py-3 sm:py-4 overflow-hidden border-t border-b border-gray-200">
      <div className="flex animate-scroll">
        {/* Duplicate features for seamless loop */}
        {[...BRAND_CONFIG.features, ...BRAND_CONFIG.features].map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 sm:space-x-3 mx-4 sm:mx-6 md:mx-8 whitespace-nowrap"
          >
            <span className="text-lg sm:text-xl md:text-2xl">{feature.icon}</span>
            <span 
              className="text-sm sm:text-base font-normal"
              style={{ 
                color: '#0f702d',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '400'
              }}
            >
              {feature.title}
            </span>
            <span 
              className="text-lg sm:text-xl md:text-2xl"
              style={{ color: '#0f702d' }}
            >
              •
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBar;
