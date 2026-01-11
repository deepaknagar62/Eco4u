import { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'SANKARANTI SALE',
      subtitle: 'BUY 2 GET 2 FREE',
      bgColor: 'from-purple-600 to-purple-800',
      image: '/slides/slide1.jpg',
    },
    {
      id: 2,
      title: 'ECO-FRIENDLY PRODUCTS',
      subtitle: 'SAVE THE PLANET',
      bgColor: 'from-green-600 to-green-800',
      image: '/slides/slide2.jpg',
    },
    {
      id: 3,
      title: 'NEW ARRIVALS',
      subtitle: 'DISCOVER OUR LATEST COLLECTION',
      bgColor: 'from-blue-600 to-blue-800',
      image: '/slides/slide3.jpg',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`w-full h-full bg-gradient-to-r ${slide.bgColor} relative`}>
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
              <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-white transform rotate-45"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
              <div className="max-w-4xl">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fadeIn">
                  {slide.title}
                </h2>
                <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 animate-fadeIn">
                  {slide.subtitle}
                </p>
                <button className="btn-primary text-lg px-8 py-4 animate-fadeIn">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Product Images (decorative) */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end px-8 pb-8 opacity-80">
              <div className="hidden md:block w-32 h-32 bg-white/10 rounded-lg backdrop-blur-sm"></div>
              <div className="hidden lg:block w-40 h-40 bg-white/10 rounded-lg backdrop-blur-sm"></div>
              <div className="hidden md:block w-32 h-32 bg-white/10 rounded-lg backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-primary text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 z-20"
        aria-label="Previous Slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-primary text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 z-20"
        aria-label="Next Slide"
      >
        <svg
          className="w-6 h-6"
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
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
