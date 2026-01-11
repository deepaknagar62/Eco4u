import BRAND_CONFIG from '../config/brandConfig';

const OurStory = () => {
  return (
    <section id="about-us" className="section-padding bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              Our Story
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              At {BRAND_CONFIG.name}, we believe that caring for the planet starts with the choices we make every day.
              Earth isn't just a resource—it's our shared home. And every small, mindful decision has the power to
              create a lasting impact.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              {BRAND_CONFIG.name} was born from a simple idea: eco-friendly living should be easy, affordable, and
              accessible to everyone. We set out to bridge the gap between sustainability and everyday convenience by
              offering thoughtfully designed products that are kind to both people and the planet.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our products are crafted using responsibly sourced, natural, and renewable materials—so you never have
              to choose between quality and conscience. With {BRAND_CONFIG.name}, sustainable living isn't a compromise;
              it's a better way forward.
            </p>

            <div className="pt-4">
              <a
                href="#products"
                className="inline-block bg-primary-dark text-white font-semibold px-8 py-4 rounded-full hover:bg-green-800 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Products
              </a>
            </div>
          </div>

          {/* Right Side - Image/Team */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6">
                {/* Placeholder for team image */}
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌱</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {BRAND_CONFIG.name}
                    </h3>
                    <p className="text-gray-600">
                      Making Sustainability Accessible
                    </p>
                  </div>
                </div>
                
                {/* Brand Logo */}
                <div className="mt-6 flex justify-center">
                  <div className="bg-primary-dark text-white px-6 py-3 rounded-full font-bold text-xl">
                    {BRAND_CONFIG.name}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-600 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-br from-amber-50 to-green-50 rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center max-w-5xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold text-primary-dark mb-8">
              Our Mission
            </h3>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Our mission at {BRAND_CONFIG.name} is to empower individuals and families to make greener
              choices without sacrificing comfort or convenience.
            </p>

            <div className="mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">We are committed to:</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-dark flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg">Promoting sustainable alternatives to everyday products</p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-dark flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg">Reducing environmental impact through eco-conscious materials and processes</p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-dark flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg">Making sustainability affordable, practical, and inclusive</p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-dark flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg">Inspiring a lifestyle that respects nature and future generations</p>
                </div>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              By choosing {BRAND_CONFIG.name}, you're not just buying a product—you're becoming part of a
              movement that believes small changes today can create a healthier planet tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
