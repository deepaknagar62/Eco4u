# ECO4U - Eco-Friendly Products E-Commerce Website

A modern, responsive React website for ECO4U, inspired by letsbeco.com. Built with React, Vite, and Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Fully mobile-responsive layout
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Reusable Components**: Modular component architecture
- **Centralized Configuration**: Single source of truth for brand constants
- **Hero Slider**: Auto-rotating promotional banners
- **Product Showcase**: Multiple product sections with carousel navigation
- **Sustainability Section**: Highlighting eco-friendly impact
- **Feature Bar**: Animated scrolling feature highlights
- **WhatsApp Integration**: Floating WhatsApp button for customer support

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.x or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd eco4u-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📁 Project Structure

```
eco4u-website/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Footer with links
│   │   ├── HeroSlider.jsx   # Hero carousel
│   │   ├── ProductCard.jsx  # Product display card
│   │   ├── ProductSection.jsx # Product carousel section
│   │   ├── CategorySection.jsx # Product categories
│   │   ├── FeatureBar.jsx   # Scrolling features
│   │   ├── SustainabilitySection.jsx # Impact stats
│   │   └── CTASection.jsx   # Call-to-action banner
│   ├── pages/
│   │   └── Home.jsx         # Home page
│   ├── config/
│   │   └── brandConfig.js   # Brand constants (SINGLE SOURCE OF TRUTH)
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles & animations
│   └── main.jsx             # App entry point
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies

```

## 🎨 Customization

### Changing Brand Information

All brand-related constants are centralized in `src/config/brandConfig.js`. Update this file to change:

- Brand name (ECO4U)
- Contact information
- Social media links
- Navigation menus
- Product categories
- Features/USPs
- Colors and theme

**Example:**
```javascript
// src/config/brandConfig.js
export const BRAND_CONFIG = {
  name: 'ECO4U',  // Change this to update brand name everywhere
  tagline: 'BE A CONSCIOUS CONSUMER. BE ECO. ECO4U.',
  // ... other configurations
};
```

### Styling

The project uses Tailwind CSS for styling. Customize colors in:
- `tailwind.config.js` - Theme colors
- `src/index.css` - Custom animations and utility classes

### Adding Products

Update product data in `src/pages/Home.jsx` or create a separate data file for products.

## 🛠️ Built With

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Key Components

### Header
- Sticky navigation
- Mobile menu
- Search, cart, and user icons
- Top banner with announcements

### Footer
- Quick links
- Resources
- Social media integration
- WhatsApp floating button

### Product Card
- Product image
- Rating display
- Price with MRP
- Add to cart button
- Badges (Bestseller, New Arrivals)

### Hero Slider
- Auto-rotating slides
- Manual navigation
- Dot indicators
- Responsive design

## 🚀 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## 📝 Notes

- All images are placeholder paths. Replace with actual product images.
- The website is fully responsive and tested on multiple devices.
- Components are reusable and follow React best practices.
- Code is professionally structured with proper prop validation.

## 🤝 Contributing

This is a professional implementation following industry best practices:
- Component-based architecture
- Centralized configuration
- Reusable code
- Responsive design
- Clean code structure

## 📄 License

This project is created for ECO4U.

---

**Built with ❤️ and ♻️ for a sustainable future**
