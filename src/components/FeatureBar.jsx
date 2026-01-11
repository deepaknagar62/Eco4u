import BRAND_CONFIG from '../config/brandConfig';

const FeatureBar = () => {
  return (
    <div className="bg-black py-4 overflow-hidden">
      <div className="flex animate-scroll">
        {/* Duplicate features for seamless loop */}
        {[...BRAND_CONFIG.features, ...BRAND_CONFIG.features].map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 mx-8 whitespace-nowrap"
          >
            <span className="text-2xl">{feature.icon}</span>
            <span className="text-white font-medium">{feature.title}</span>
            <span className="text-primary text-2xl">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBar;
