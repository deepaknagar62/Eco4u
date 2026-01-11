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
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
          <a
            href="/products"
            className="text-primary font-semibold hover:underline flex items-center space-x-2"
          >
            <span>VIEW ALL</span>
            <svg
              className="w-5 h-5"
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
            {/* Mobile: Horizontal Scroll - 2 products visible */}
            <div className="md:hidden flex overflow-x-auto gap-3 pb-4 scrollbar-hide snap-x snap-mandatory">
              {products.map((product, index) => (
                <div key={index} className="min-w-[48%] flex-shrink-0 snap-start">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            
            {/* Desktop: Carousel */}
            <div
              className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 transition-transform duration-500"
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
