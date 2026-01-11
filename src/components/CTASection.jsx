import BRAND_CONFIG from '../config/brandConfig';

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-600">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
          {BRAND_CONFIG.tagline}
        </h2>
        
        <div className="mt-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            CARE ABOUT THE WORLD?
          </h3>
          <p className="text-xl md:text-2xl text-green-100 mb-8">
            Let's save it one eco-friendly choice at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
