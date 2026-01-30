import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CategoryPage from './pages/CategoryPage';

// ScrollToTop component that handles route changes
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Aggressive scroll reset on route change
    const forceScrollTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      if (window.pageYOffset !== 0) {
        window.pageYOffset = 0;
      }
      
      if (document.scrollingElement) {
        document.scrollingElement.scrollTop = 0;
      }
    };

    // Immediate scroll reset
    forceScrollTop();
    
    // Multiple timing strategies
    requestAnimationFrame(forceScrollTop);
    setTimeout(forceScrollTop, 0);
    setTimeout(forceScrollTop, 1);
    
  }, [location.pathname]);

  return null;
}

function App() {
  useEffect(() => {
    // Disable scroll restoration globally and permanently
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Override any browser scroll restoration
    window.addEventListener('beforeunload', () => {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
    });
    
    // Force scroll to top on app load
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Prevent any popstate scroll restoration
    window.addEventListener('popstate', (e) => {
      e.preventDefault();
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }, 0);
    });
    
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/category/:categorySlug" element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
