import { useParams } from 'react-router-dom';
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <a href="/" className="hover:text-primary">Home</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{category?.name || 'Category'}</span>
        </div>

        {/* Category Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-5xl">{category?.icon}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {category?.name || 'Products'}
              </h1>
              {category?.description && (
                <p className="text-gray-600 mt-2">{category.description}</p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              {products.length} {products.length === 1 ? 'product' : 'products'} found
            </p>
          </div>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No products found
            </h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any products in this category.
            </p>
            <a
              href="/"
              className="inline-block bg-primary-dark text-white font-semibold px-8 py-3 rounded-full hover:bg-green-800 transition-all duration-300"
            >
              Back to Home
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
