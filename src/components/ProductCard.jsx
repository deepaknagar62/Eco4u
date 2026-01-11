import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const { name, image, price, mrp, rating, reviews, badge, offer } = product;

  return (
    <div className="card group relative">
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 right-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full z-10">
          {badge}
        </div>
      )}

      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Product Name */}
        <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 min-h-[40px]">
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
              <span className="text-xs text-gray-500">({reviews} reviews)</span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-900">₹{price}</span>
          {mrp && mrp > price && (
            <span className="text-sm text-gray-500 line-through">
              MRP (incl of all taxes)
            </span>
          )}
        </div>

        {/* View Details Button */}
        <Link
          to={`/product/${product.id || product.name.toLowerCase().replace(/\s+/g, '-')}`}
          className="block w-full bg-primary-dark text-white font-semibold py-3 rounded-full hover:bg-green-800 transition-all duration-300 transform hover:scale-105 text-center"
        >
          View Details
        </Link>
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
