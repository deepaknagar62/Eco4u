import { useState, useEffect, useRef } from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../data/products';

const ProductDetails = () => {
  const { productId } = useParams();
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const imageContainerRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Comprehensive scroll management for mobile
  useEffect(() => {
    const forceScrollTop = () => {
      // Multiple methods to ensure scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Force viewport to top
      if (window.pageYOffset !== 0) {
        window.pageYOffset = 0;
      }
      
      // Mobile-specific scroll reset
      if (document.scrollingElement) {
        document.scrollingElement.scrollTop = 0;
      }
    };

    // Disable scroll restoration completely
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Check if we're navigating from product card
    const isNavigatingFromCard = sessionStorage.getItem('navigatingToProduct') === 'true';
    
    if (isNavigatingFromCard) {
      // Clear the flag
      sessionStorage.removeItem('navigatingToProduct');
      sessionStorage.removeItem('targetScrollPosition');
      
      // Immediate scroll reset
      forceScrollTop();
      
      // Use multiple timing strategies for different mobile browsers
      requestAnimationFrame(() => {
        forceScrollTop();
        
        requestAnimationFrame(() => {
          forceScrollTop();
        });
      });
      
      // Fallback timeouts for stubborn browsers
      setTimeout(forceScrollTop, 0);
      setTimeout(forceScrollTop, 1);
      setTimeout(forceScrollTop, 10);
      setTimeout(forceScrollTop, 50);
      
      // Final fallback
      setTimeout(() => {
        forceScrollTop();
        setIsLoading(false);
      }, 100);
    } else {
      // Regular navigation
      forceScrollTop();
      setTimeout(() => setIsLoading(false), 50);
    }

    // Prevent any scroll restoration on page visibility change
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        forceScrollTop();
      }
    };

    // Prevent scroll restoration on focus
    const handleFocus = () => {
      forceScrollTop();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('pageshow', forceScrollTop);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('pageshow', forceScrollTop);
    };
  }, [productId, location]);

  // Additional effect to handle any scroll attempts during render
  useEffect(() => {
    const preventScroll = (e) => {
      if (isLoading) {
        e.preventDefault();
        window.scrollTo(0, 0);
      }
    };

    if (isLoading) {
      window.addEventListener('scroll', preventScroll, { passive: false });
      document.addEventListener('touchmove', preventScroll, { passive: false });
      
      return () => {
        window.removeEventListener('scroll', preventScroll);
        document.removeEventListener('touchmove', preventScroll);
      };
    }
  }, [isLoading]);

  // Get product data from products file
  const productData = getProductById(productId);
  
  // If product not found, redirect to home
  if (!productData) {
    return <Navigate to="/" replace />;
  }

  // Prepare product object with all necessary data
  const product = {
    ...productData,
    images: productData.detailImages || [productData.image],
    description: productData.description || `${productData.name}: Premium eco-friendly product made from sustainable materials. Perfect for daily use, this product is gentle on you and the environment.`,
    features: productData.features || [
      '100% eco-friendly materials',
      'Sustainable and biodegradable',
      'Plastic-free packaging',
      'Safe for daily use',
      'Environmentally conscious choice',
    ],
    specifications: productData.specifications || {
      'Material': 'Eco-Friendly',
      'Packaging': 'Sustainable',
    },
    amazonLink: productData.amazonLink || `https://www.amazon.in/search?k=eco4u+${productData.name.toLowerCase().replace(/\s+/g, '+')}`,
    flipkartLink: productData.flipkartLink || `https://www.flipkart.com/search?q=eco4u+${productData.name.toLowerCase().replace(/\s+/g, '+')}`,
  };

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && selectedImage < product.images.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
    if (isRightSwipe && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  // Navigation functions
  const goToNextImage = () => {
    if (selectedImage < product.images.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const goToPrevImage = () => {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <>
      {/* Loading overlay to prevent flash of content at wrong scroll position */}
      {isLoading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
      
      <div className={`min-h-screen bg-gray-50 py-8 ${isLoading ? 'invisible' : 'visible'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <a href="/" className="hover:text-primary">Home</a>
          <span className="mx-2">/</span>
          <a href="/shop" className="hover:text-primary">Shop</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {/* Left Side - Images */}
          <div className="space-y-4">
            {/* Badge */}
            {product.badge && (
              <div className="inline-block bg-primary text-black text-xs font-bold px-3 py-1 rounded-full mb-2">
                {product.badge}
              </div>
            )}

            {/* Main Image with Mobile Swipe Support */}
            <div className="relative">
              {/* Desktop/Tablet: Clickable image with navigation arrows */}
              <div className="hidden sm:block rounded-2xl overflow-hidden bg-white">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-auto object-contain"
                />
                
                {/* Navigation Arrows for Desktop */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={goToPrevImage}
                      disabled={selectedImage === 0}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-10"
                      aria-label="Previous image"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={goToNextImage}
                      disabled={selectedImage === product.images.length - 1}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-10"
                      aria-label="Next image"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Mobile: Swipeable image carousel */}
              <div className="sm:hidden">
                <div 
                  ref={imageContainerRef}
                  className="relative rounded-2xl overflow-hidden bg-white touch-pan-x"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div 
                    className="flex transition-transform duration-300 ease-out"
                    style={{ transform: `translateX(-${selectedImage * 100}%)` }}
                  >
                    {product.images.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <img
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-auto object-contain"
                          loading={index === 0 ? 'eager' : 'lazy'}
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Swipe Hint - only shows briefly on first image */}
                  {product.images.length > 1 && selectedImage === 0 && (
                    <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded-full animate-pulse opacity-70">
                      Swipe →
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Thumbnail Images - Horizontal Scroll */}
            <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide snap-x snap-mandatory">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 border-2 rounded-lg overflow-hidden p-1 transition-all duration-300 snap-start ${
                    selectedImage === index
                      ? 'border-primary bg-green-50'
                      : 'border-gray-200 hover:border-primary'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-16 h-16 object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="space-y-6">
            {/* Product Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center bg-primary text-black px-3 py-1 rounded text-sm font-semibold">
                <span>{product.rating}</span>
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-gray-600">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-gray-900">₹{product.price}</span>
              {product.mrp && product.mrp > product.price && (
                <>
                  <span className="text-xl text-gray-500 line-through">₹{product.mrp}</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Save ₹{product.mrp - product.price}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            {/* Buy Buttons */}
            <div className="space-y-3 pt-4">
              <a
                href={product.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-[#FF9900] text-white font-semibold py-4 rounded-full hover:bg-[#E68A00] transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.53.406-3.045.61-4.516.61-2.265 0-4.463-.42-6.588-1.265-2.11-.84-3.937-1.99-5.48-3.44-.14-.13-.18-.25-.11-.39l.007-.007zm23.71-5.12c-.28-.36-.73-.52-1.35-.52-.65 0-1.26.22-1.83.65-.58.43-1.03.99-1.36 1.67-.33.69-.49 1.45-.49 2.28 0 .8.15 1.54.45 2.24.3.69.73 1.24 1.29 1.65.56.4 1.2.61 1.91.61.81 0 1.5-.27 2.08-.82.58-.55.87-1.24.87-2.09 0-.46-.09-.91-.26-1.35-.18-.44-.43-.83-.76-1.16-.33-.34-.72-.6-1.17-.79-.45-.19-.93-.29-1.44-.29-.41 0-.8.07-1.17.2.21-.64.57-1.14 1.08-1.51.51-.37 1.07-.55 1.68-.55.3 0 .58.04.85.13.27.09.5.21.7.37.2.16.36.34.49.55.13.21.23.43.3.66.08.23.14.46.18.69.04.23.06.44.06.63 0 .35-.06.66-.17.93-.11.27-.26.49-.45.67-.19.18-.41.31-.65.39-.24.08-.49.12-.75.12-.38 0-.73-.1-1.04-.29-.31-.19-.56-.45-.74-.77-.18-.32-.27-.68-.27-1.07 0-.28.05-.55.14-.81.09-.26.22-.49.38-.69.16-.2.35-.36.57-.48.22-.12.46-.18.71-.18.37 0 .68.1.93.29.25.19.38.45.38.77 0 .19-.05.37-.14.53-.09.16-.21.29-.36.39-.15.1-.32.15-.51.15-.14 0-.27-.03-.38-.09-.11-.06-.2-.14-.27-.24-.07-.1-.1-.21-.1-.33 0-.09.02-.17.07-.24.05-.07.11-.11.19-.13v-.02c-.06.01-.11.04-.15.09-.04.05-.06.11-.06.18 0 .11.04.2.13.27.09.07.19.11.31.11.16 0 .3-.06.41-.17.11-.11.17-.25.17-.42 0-.2-.08-.37-.23-.5-.15-.13-.34-.2-.57-.2-.27 0-.51.07-.72.22-.21.15-.37.34-.49.58-.12.24-.18.49-.18.76 0 .36.09.68.26.96.17.28.4.5.69.66.29.16.61.24.96.24.31 0 .6-.06.87-.19.27-.13.5-.3.69-.52.19-.22.34-.47.44-.75.1-.28.15-.57.15-.87 0-.41-.08-.8-.23-1.17-.15-.37-.37-.69-.65-.96-.28-.27-.61-.48-.99-.63-.38-.15-.79-.23-1.23-.23-.69 0-1.35.17-1.98.52-.63.35-1.14.83-1.53 1.44-.39.61-.58 1.3-.58 2.06 0 .74.18 1.43.53 2.07.35.64.84 1.15 1.46 1.53.62.38 1.33.57 2.13.57.49 0 .96-.08 1.41-.24.45-.16.85-.38 1.2-.66.35-.28.63-.61.84-.99.21-.38.31-.79.31-1.23 0-.51-.12-.99-.35-1.43-.23-.44-.55-.81-.95-1.11-.4-.3-.86-.53-1.38-.69-.52-.16-1.06-.24-1.62-.24-.69 0-1.35.12-1.98.37-.63.25-1.19.59-1.68 1.02-.49.43-.88.94-1.17 1.52-.29.58-.43 1.21-.43 1.88 0 .87.21 1.67.64 2.39.43.72 1.01 1.29 1.75 1.71.74.42 1.57.63 2.49.63.64 0 1.25-.11 1.83-.32.58-.21 1.09-.51 1.53-.89.44-.38.79-.83 1.04-1.35.25-.52.38-1.08.38-1.68 0-.73-.17-1.4-.52-2.01-.35-.61-.83-1.09-1.44-1.44-.61-.35-1.3-.53-2.07-.53z"/>
                </svg>
                Buy on Amazon
              </a>

              <a
                href={product.flipkartLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-[#2874F0] text-white font-semibold py-4 rounded-full hover:bg-[#1E5FCC] transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.833 5.333h16.334v13.334H3.833z"/>
                </svg>
                Buy on Flipkart
              </a>
            </div>

            {/* Features */}
            <div className="border-t pt-6">
              <h3 className="font-semibold text-lg mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6">Specifications</h2>
          <div className="space-y-3">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2 border-b border-gray-200 pb-3 last:border-b-0">
                <div className="sm:col-span-1">
                  <span className="font-semibold text-gray-800 text-sm sm:text-base block">{key}:</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-gray-600 text-sm sm:text-base leading-relaxed block">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

ProductDetails.propTypes = {
  productId: PropTypes.string,
};

export default ProductDetails;
