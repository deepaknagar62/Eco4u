import { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      desktopImage: '/WEB All Baneers Design PNG IMAGES/Banner-01.png',
      mobileImage: '/Banner Mobile View/1.png',
    },
    {
      id: 2,
      desktopImage: '/WEB All Baneers Design PNG IMAGES/Banner-02.png',
      mobileImage: '/Banner Mobile View/2.png',
    },
    {
      id: 3,
      desktopImage: '/WEB All Baneers Design PNG IMAGES/Banner-03.png',
      mobileImage: '/Banner Mobile View/3.png',
    },
    {
      id: 4,
      desktopImage: '/WEB All Baneers Design PNG IMAGES/Banner-04.png',
      mobileImage: '/Banner Mobile View/4.png',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // const goToSlide = (index) => {
  //   setCurrentSlide(index);
  // };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full bg-white">
      {/* Mobile Container - Optimized for mobile banner images */}
      <div className="block sm:hidden relative w-full aspect-[3.8/3] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={`mobile-${slide.id}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Mobile Image */}
            <img 
              src={slide.mobileImage}
              alt={`Mobile Banner ${slide.id}`}
              className="w-full h-full object-contain bg-white"
              loading={index === 0 ? 'eager' : 'lazy'}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Desktop Container - Optimized for desktop banner images */}
      <div className="hidden sm:block relative w-full aspect-[3/3] md:aspect-[12/4] lg:aspect-[10/2] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={`desktop-${slide.id}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Desktop Image */}
            <img 
              src={slide.desktopImage}
              alt={`Banner ${slide.id}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Mobile optimized */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/50 hover:bg-primary text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 z-20 touch-manipulation"
        aria-label="Previous Slide"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
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
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/50 hover:bg-primary text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 z-20 touch-manipulation"
        aria-label="Next Slide"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
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
    </div>
  );
};

export default HeroSlider;
