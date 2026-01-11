import { useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import FeatureBar from '../components/FeatureBar';
import CategorySection from '../components/CategorySection';
import ProductSection from '../components/ProductSection';
import OurStory from '../components/OurStory';
import SustainabilitySection from '../components/SustainabilitySection';
import { getProductsByCategory } from '../data/products';
import BRAND_CONFIG from '../config/brandConfig';

// Sample product data
const bestsellerProducts = [
  {
    id: 'cotton-buds-jar',
    name: 'Eco-Friendly Cotton Buds Jar',
    image: '/cotton buds jar/1.png',
    price: 350,
    mrp: 400,
    rating: 4.9,
    reviews: 17,
    badge: 'Bestseller',
    offer: 'Add 4 Pay for 2',
  },
  {
    id: 'cotton-buds-jar-2',
    name: 'Eco-Friendly Cotton Buds Jar',
    image: '/cotton buds jar/1.png',
    price: 249,
    mrp: 300,
    rating: 4.7,
    reviews: 3,
    offer: 'Add 4 Pay for 2',
  },
  {
    id: 'cotton-buds-jar-3',
    name: 'Eco-Friendly Cotton Buds Jar',
    image: '/cotton buds jar/1.png',
    price: 789,
    mrp: 900,
    rating: 4.6,
    reviews: 5,
    badge: 'New Arrivals',
    offer: 'Add 4 Pay for 2',
  },
  {
    id: 'cotton-buds-jar-4',
    name: 'Eco-Friendly Cotton Buds Jar',
    image: '/cotton buds jar/1.png',
    price: 229,
    mrp: 280,
    rating: 5.0,
    reviews: 7,
    badge: 'New Arrivals',
    offer: 'Add 4 Pay for 2',
  },
  {
    id: 'cotton-buds-jar-5',
    name: 'Eco-Friendly Cotton Buds Jar',
    image: '/cotton buds jar/1.png',
    price: 599,
    mrp: 650,
    rating: 4.9,
    reviews: 12,
    offer: 'Add 4 Pay for 2',
  },
  {
    id: 'cotton-buds-jar-6',
    name: 'Eco-Friendly Cotton Buds Jar',
    image: '/cotton buds jar/1.png',
    price: 289,
    mrp: 350,
    rating: 4.6,
    reviews: 8,
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
