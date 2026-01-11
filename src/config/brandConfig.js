// Brand Configuration - Single source of truth for all brand-related constants
// Change values here to update across the entire application

export const BRAND_CONFIG = {
  // Brand Identity
  name: 'ECO4U',
  tagline: 'BE A CONSCIOUS CONSUMER. BE ECO. ECO4U.',
  description: 'A new-age company in the world of cleaning, homecare and personal care, and bringing natural sustainable alternatives to the chemical-laden products in the market.',
  
  // Contact Information
  contact: {
    phone: '+91 7021058281',
    email: 'info@eco4u.com',
    whatsapp: '+91 7021058281',
  },
  
  // Social Media
  social: {
    facebook: 'https://facebook.com/eco4u',
    instagram: 'https://instagram.com/eco4u',
    twitter: 'https://twitter.com/eco4u',
    linkedin: 'https://linkedin.com/company/eco4u',
  },
  
  // Navigation Links
  navigation: {
    main: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
    ],
    quickLinks: [
      { name: 'Home', path: '/' },
      { name: 'Shop', path: '/shop' },
      { name: 'All Products', path: '/products' },
      { name: 'Reach Out To Us', path: '/contact' },
      { name: 'Build Your Own Box', path: '/byob' },
    ],
    resources: [
      { name: 'Blog', path: '/blog' },
      { name: 'About Us', path: '/about' },
      { name: 'Track Order', path: '/track-order' },
    ],
  },
  
  // Product Categories
  categories: [
    {
      name: 'Shop All',
      icon: '/CATEGORIES ALL ICONS/SHOP ALL-01.png',
      path: '/category/shop-all',
      description: 'All products'
    },
    {
      name: 'Home Care',
      icon: '/CATEGORIES ALL ICONS/HOME CARE-02.png',
      path: '/category/home-care',
      description: 'Everyday home & household cleaning essentials'
    },
    {
      name: 'Kitchen Essentials',
      icon: '/CATEGORIES ALL ICONS/KITCHEN ESSENTAILS -04.png',
      path: '/category/kitchen-essentials',
      description: 'Kitchen & food-area specific eco products'
    },
    {
      name: 'Cleaning Essentials',
      icon: '/CATEGORIES ALL ICONS/CLEANING ESSENTIALS-05.png',
      path: '/category/cleaning-essentials',
      description: 'Specialized cleaning & utility use'
    },
    {
      name: 'Personal Care',
      icon: '/CATEGORIES ALL ICONS/PERSONAL CARE-03.png',
      path: '/category/personal-care',
      description: 'Daily hygiene & personal use products'
    },
    {
      name: 'Bamboo Essentials',
      icon: '/CATEGORIES ALL ICONS/BAMBOO ESSENTAILS-06.png',
      path: '/category/bamboo-essentials',
      description: 'Pure bamboo-based products'
    },
    {
      name: 'Eco Utilities',
      icon: '/CATEGORIES ALL ICONS/ECO UTILITIES-07.png',
      path: '/category/eco-utilities',
      description: 'Utility + hygiene eco solutions'
    },
  ],
  
  // Features/USPs
  features: [
    {
      title: 'Pet safe',
      icon: '🐾',
    },
    {
      title: 'Baby safe',
      icon: '👶',
    },
    {
      title: '100% Natural',
      icon: '🌿',
    },
    {
      title: 'Eco-friendly',
      icon: '♻️',
    },
    {
      title: 'Plant Based',
      icon: '🌱',
    },
  ],
  
  // Sustainability Stats
  sustainability: {
    emissions: {
      value: '44%',
      label: 'Lower Emissions',
    },
    trees: {
      value: '17+',
      label: 'Trees/Ton Saved',
    },
    water: {
      value: '30%',
      label: 'Less Water Used',
    },
  },
  
  // Call to Action
  cta: {
    primary: 'Get in touch',
    secondary: 'Shop Now',
  },
  
  // Footer
  footer: {
    copyright: `${new Date().getFullYear()}. All Rights Reserved`,
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',
    cancellation: 'Cancellation & Refunds Policy',
    replacement: 'Replacement Policy',
  },
  
  // Theme Colors (matching Tailwind config)
  colors: {
    primary: '#00ff00',
    secondary: '#0a0a0a',
    accent: '#1a1a1a',
  },
};

export default BRAND_CONFIG;
