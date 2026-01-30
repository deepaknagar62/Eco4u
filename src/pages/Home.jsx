import { useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import FeatureBar from '../components/FeatureBar';
import CategorySection from '../components/CategorySection';
import ProductSection from '../components/ProductSection';
import OurStory from '../components/OurStory';
import SustainabilitySection from '../components/SustainabilitySection';
import { getProductsByCategory } from '../data/products';
import BRAND_CONFIG from '../config/brandConfig';

// Bestseller products with actual product data
const bestsellerProducts = [
  {
    id: 'bamboo-toothpick',
    name: 'Bamboo Toothpick',
    image: '/toothpick/1.png',
    price: 99,
    mrp: 129,
    rating: 4.6,
    reviews: 28,
    badge: 'Bestseller',
    offer: 'Add 4 Pay for 2',
  },
  {
    id: 'bamboo-cotton-ear-buds-jar',
    name: 'Bamboo Cotton Ear Buds – Jar Pack',
    image: '/cotton buds jar/1.png',
    price: 199,
    mrp: 249,
    rating: 4.8,
    reviews: 38,
    badge: 'Popular',
    offer: 'Add 4 Pay for 2',
  },
  {
    id: 'bamboo-cotton-ear-buds-box',
    name: 'Cotton Ear Buds - Square Box',
    image: '/COTTON EAR BUDS - SQUARE BOX/1.png',
    price: 49,
    mrp: 65,
    rating: 4.7,
    reviews: 30,
    badge: 'Bestseller',
    offer: 'Add 4 Pay for 2',
  },
  {
    id: 'natural-dish-wash-liquid',
    name: 'Natural Dish Wash Liquid',
    image: '/Natural Dish Cleaner all images/1.png',
    price: 199,
    mrp: 249,
    rating: 4.9,
    reviews: 32,
    badge: 'Bestseller',
    offer: 'Add 4 Pay for 2',
  },
  {
    id: 'shoe-cleaner-wipes',
    name: 'Shoe Cleaner Wipes – Plant-Based',
    image: '/Shoe Cleaner Wipes/1.png',
    price: 179,
    mrp: 249,
    rating: 4.5,
    reviews: 12,
    badge: 'Eco-Friendly',
    offer: 'Add 4 Pay for 2',
  },
  {
    id: 'sanitary-disposal-bags',
    name: 'Sanitary Disposal Bags',
    image: '/Sanitary Disposal Bags/1.png',
    price: 199,
    mrp: 249,
    rating: 4.8,
    reviews: 24,
    badge: 'Popular',
    offer: 'Add 4 Pay for 2',
  },
  {
    id: 'foot-deodorizer-spray',
    name: 'Foot Deodorizer Spray',
    image: '/Foot Deodorizer Spray/1.png',
    price: 349,
    mrp: 499,
    rating: 4.6,
    reviews: 16,
    badge: 'New Arrival',
    offer: 'Add 4 Pay for 2',
  },
];


const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Get filtered products based on selected category
  const filteredProducts = selectedCategory ? getProductsByCategory(selectedCategory) : null;
  
  // Get category info
  const currentCategory = selectedCategory ? BRAND_CONFIG.categories.find(
    cat => cat.path === `/category/${selectedCategory}`
  ) : null;

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Feature Bar */}
      <FeatureBar />

      {/* Category Section */}
      <CategorySection
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      {/* Show filtered products if category selected, otherwise show default sections */}
      {selectedCategory ? (
        <ProductSection
          title={currentCategory?.name || 'Products'}
          products={filteredProducts}
        />
      ) : (
        <>
          {/* Bestseller Products */}
          <ProductSection title="Bestseller" products={bestsellerProducts} />
        </>
      )}

      {/* Our Story Section */}
      <OurStory />

      {/* Sustainability Section */}
      <SustainabilitySection />
    </div>
  );
};

export default Home;
