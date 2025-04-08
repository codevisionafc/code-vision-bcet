import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { useContext, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AnimatedBackground from './components/AnimatedBackground';
import { analytics } from './firebase/config';
import { logEvent } from 'firebase/analytics';
import { globalContext } from './context/globalContext';

// Lazy load other routes
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Events = lazy(() => import('./pages/Events'));
const Members = lazy(() => import('./pages/Members'));
const Alumni = lazy(() => import('./pages/Alumni'));
const Gallery = lazy(() => import('./pages/Gallery'));
const ContactUs = lazy(() => import('./pages/ContactUs'));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  if (pathname.startsWith('/events/')) return null;
  useEffect(() => {
    window.scrollTo(0, 0);
    logEvent(analytics, 'page_view', { page_path: pathname });
  }, [pathname]);

  return null;
}

// Dynamic Canonical Link
function CanonicalLink() {
  const { pathname } = useLocation();
  const canonicalUrl = `${import.meta.env.VITE_FIREBASE_BASE_URL}${pathname}`;

  useEffect(() => {
    const link =
      document.querySelector("link[rel='canonical']") ||
      document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonicalUrl);
    document.head.appendChild(link);
  }, [canonicalUrl]);

  return null;
}

export default function App() {
  const gContext = useContext(globalContext);
  const { updateInfo } = gContext;

  useEffect(() => {
    updateInfo();

    // Preload components
    // import('./pages/AboutUs');
    // import('./pages/Events');
    // import('./pages/Members');
    // import('./pages/Alumni');
    // import('./pages/Gallery');
  }, []);

  return (
    <Router>
      <AnimatedBackground />
      <ScrollToTop />
      <CanonicalLink />
      <div className="min-h-screen font-poppins">
        <Navbar />
        <Suspense fallback={<LazyLoader />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/events" element={<Events />} />
            <Route exact path="/events/:event" element={<Events />} />
            <Route exact path="/members" element={<Members />} />
            <Route exact path="/alumni" element={<Alumni />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

function LazyLoader() {
  return (
    <div className="flex justify-center items-center h-screen z-10">
      <svg
        className="size-12 animate-spin"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
    </div>
  );
}
