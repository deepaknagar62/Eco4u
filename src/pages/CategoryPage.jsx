import { useParams, Link } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';
import BRAND_CONFIG from '../config/brandConfig';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const products = getProductsByCategory(categorySlug);
  
  // Find category info
  const category = BRAND_CONFIG.categories.find(
    cat => cat.path === `/category/${categorySlug}`
  );

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb - Optimized for mobile */}
        <div className="mb-4 sm:mb-6 text-xs sm:text-sm text-gray-600">
          <Link to="/" className="hover:text-primary transition-colors duration-300">
            Home
          </Link>
          <span className="mx-1 sm:mx-2">/</span>
          <span className="text-gray-900 font-medium">{category?.name || 'Category'}</span>
        </div>

        {/* Category Header - Responsive layout */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
            {category?.icon && (
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0">
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {category?.name || 'Products'}
              </h1>
              {category?.description && (
                <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
                  {category.description}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              {products.length} {products.length === 1 ? 'product' : 'products'} found
            </p>
          </div>
        </div>

        {/* Products Grid - Optimized for all screen sizes */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 px-4">
            <div className="text-5xl sm:text-6xl mb-4">📦</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
              No products found
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-md mx-auto">
              We couldn't find any products in this category.
            </p>
            <Link
              to="/"
              className="inline-block bg-primary text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-primary-dark transition-all duration-300 text-sm sm:text-base touch-manipulation"
            >
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
