import { useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const ProductSection = ({ title, products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const nextSlide = () => {
    if (currentIndex < products.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
          <a
            href="/products"
            className="text-primary font-semibold hover:underline flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base touch-manipulation"
          >
            <span>VIEW ALL</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          {/* Products Grid - Horizontal scroll on mobile, carousel on larger screens */}
          <div className="overflow-hidden">
            {/* Mobile: Horizontal Scroll - 2 products visible with better spacing */}
            <div className="md:hidden flex overflow-x-auto gap-3 sm:gap-4 pb-4 scrollbar-hide snap-x snap-mandatory px-1">
              {products.map((product, index) => (
                <div key={index} className="min-w-[47%] sm:min-w-[48%] flex-shrink-0 snap-start">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            
            {/* Tablet: 3 products visible */}
            <div className="hidden md:block lg:hidden">
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {products.slice(0, 3).map((product, index) => (
                  <div key={index}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Desktop: Carousel with 4 products */}
            <div
              className="hidden lg:grid grid-cols-4 gap-6 transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {products.map((product, index) => (
                <div key={index} className="min-w-0">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden lg:block">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-all duration-300 z-10"
              aria-label="Previous products"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= products.length - itemsPerPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-all duration-300 z-10"
              aria-label="Next products"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile Scroll Indicator */}
          <div className="md:hidden flex justify-center mt-4 space-x-2">
            {Array.from({ length: Math.ceil(products.length / 2) }).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

ProductSection.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      mrp: PropTypes.number,
      rating: PropTypes.number,
      reviews: PropTypes.number,
      badge: PropTypes.string,
      offer: PropTypes.string,
    })
  ).isRequired,
};

export default ProductSection;
