import PropTypes from 'prop-types';
import BRAND_CONFIG from '../config/brandConfig';

const CategorySection = ({ selectedCategory, onCategorySelect }) => {
  const handleCategoryClick = (categoryPath) => {
    // Extract slug from path (e.g., "/category/shop-all" -> "shop-all")
    const slug = categoryPath.split('/').pop();
    onCategorySelect(slug);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Categories Grid - Horizontal scroll on mobile, grid on larger screens */}
        <div className="flex md:grid overflow-x-auto md:overflow-x-visible md:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 md:gap-6 pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory px-2 sm:px-0">
          {BRAND_CONFIG.categories.map((category, index) => {
            const categorySlug = category.path.split('/').pop();
            const isActive = selectedCategory === categorySlug;
            
            return (
              <button
                key={index}
                onClick={() => handleCategoryClick(category.path)}
                className="group flex flex-col items-center cursor-pointer flex-shrink-0 snap-start touch-manipulation min-w-[80px] sm:min-w-[96px]"
              >
                {/* Category Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 flex items-center justify-center mb-2 sm:mb-3 transition-all duration-300 group-hover:scale-110 group-active:scale-95">
                  <img 
                    src={category.icon} 
                    alt={category.name} 
                    className="w-full h-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 112px, 144px"
                  />
                </div>

                {/* Category Name */}
                <h3 className={`text-xs sm:text-sm md:text-base font-semibold text-center max-w-[80px] sm:max-w-[96px] md:max-w-none leading-tight ${
                  isActive ? 'text-primary' : 'text-gray-800'
                } group-hover:text-primary transition-colors duration-300`}>
                  {category.name}
                </h3>
              </button>
            );
          })}
        </div>
        
        {/* Scroll Indicator for Mobile */}
        <div className="md:hidden flex justify-center mt-2">
          <div className="flex space-x-1">
            {Array.from({ length: Math.ceil(BRAND_CONFIG.categories.length / 3) }).map((_, index) => (
              <div key={index} className="w-2 h-2 bg-gray-300 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

CategorySection.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  onCategorySelect: PropTypes.func.isRequired,
};

export default CategorySection;
