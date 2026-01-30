import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const { name, image, price, mrp, rating, reviews, badge, offer } = product;
  const navigate = useNavigate();

  const handleViewDetails = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Store navigation intent in sessionStorage
    sessionStorage.setItem('navigatingToProduct', 'true');
    sessionStorage.setItem('targetScrollPosition', '0');
    
    // Multiple aggressive scroll resets
    const forceScrollTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      if (window.pageYOffset !== 0) {
        window.pageYOffset = 0;
      }
    };
    
    // Immediate scroll reset
    forceScrollTop();
    
    // Disable all scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Use replaceState to prevent back button scroll restoration
    const currentState = history.state;
    history.replaceState({ ...currentState, scrollY: 0 }, '');
    
    // Navigate immediately with state
    navigate(`/product/${product.id || product.name.toLowerCase().replace(/\s+/g, '-')}`, {
      replace: false,
      state: { fromProductCard: true, scrollTop: true }
    });
  };

  return (
    <div className="card group relative">
      {/* Badge */}
      {badge && (
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-primary text-black text-xs font-bold px-2 sm:px-3 py-1 rounded-full z-10">
          {badge}
        </div>
      )}

      {/* Product Image */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
        />
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
        {/* Product Name */}
        <h3 className="font-semibold text-gray-800 text-sm sm:text-base line-clamp-2 min-h-[36px] sm:min-h-[40px]">
          {name}
        </h3>

        {/* Rating */}
        {rating && (
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-primary text-black px-2 py-1 rounded text-xs font-semibold">
              <span>{rating}</span>
              <svg
                className="w-3 h-3 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            {reviews && (
              <span className="text-xs text-gray-500 hidden sm:inline">({reviews} reviews)</span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-lg sm:text-xl font-bold text-gray-900">₹{price}</span>
          {mrp && mrp > price && (
            <span className="text-xs sm:text-sm text-gray-500 line-through hidden sm:inline">
              MRP (incl of all taxes)
            </span>
          )}
        </div>

        {/* View Details Button */}
        <button
          onClick={handleViewDetails}
          className="block w-full bg-primary-dark text-white font-semibold py-2 sm:py-3 rounded-full hover:bg-green-800 transition-all duration-300 transform hover:scale-105 text-center text-sm sm:text-base touch-manipulation"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    mrp: PropTypes.number,
    rating: PropTypes.number,
    reviews: PropTypes.number,
    badge: PropTypes.string,
    offer: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
