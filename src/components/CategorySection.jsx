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
        <div className="flex md:grid overflow-x-auto md:overflow-x-visible md:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-6 pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory">
          {BRAND_CONFIG.categories.map((category, index) => {
            const categorySlug = category.path.split('/').pop();
            const isActive = selectedCategory === categorySlug;
            
            return (
              <button
                key={index}
                onClick={() => handleCategoryClick(category.path)}
                className="group flex flex-col items-center cursor-pointer flex-shrink-0 snap-start"
              >
                {/* Category Icon */}
                <div className="w-24 h-24 md:w-36 md:h-36 flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110">
                  <img src={category.icon} alt={category.name} className="w-full h-full object-contain" />
                </div>

                {/* Category Name */}
                <h3 className={`text-xs md:text-base font-semibold text-center max-w-[96px] md:max-w-none ${
                  isActive ? 'text-primary' : 'text-gray-800'
                } group-hover:text-primary transition-colors duration-300`}>
                  {category.name}
                </h3>
              </button>
            );
          })}
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
