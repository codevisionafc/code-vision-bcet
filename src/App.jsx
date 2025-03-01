import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { useContext, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Members from './pages/Members';
import Alumni from './pages/Alumni';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import AnimatedBackground from './components/AnimatedBackground';
import { analytics } from './firebase/config';
import { logEvent } from 'firebase/analytics';
import { globalContext } from './context/globalContext';

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
  }, []);
  return (
    <Router>
      <AnimatedBackground />
      <ScrollToTop />
      <CanonicalLink />
      <div className="min-h-screen font-poppins">
        <Navbar />
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
        <Footer />
      </div>
    </Router>
  );
}
