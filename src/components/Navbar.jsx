import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// import logo from '../assets/logo.svg';
import logo from '../assets/logo.png';
import longLogo from '../assets/logo code vision.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navLinks = [
    'Home',
    'About Us',
    'Events',
    'Members',
    'Alumni',
    'Gallery',
    'Contact Us',
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed w-full bg-white/10 backdrop-blur-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title Section */}
          <Link className="flex items-center flex-shrink-0" to="/">
            <img
              src={logo}
              alt="CODE VISION Logo"
              className="h-10  w-auto rounded-lg"
            />
            <img
              src={longLogo}
              alt="CODE VISION Logo"
              className="h-8 w-auto px-1.5"
            />
            {/* <div className="ml-3">
              <h1 className="text-lg sm:text-xl font-bold whitespace-nowrap">
                CODE VISION
              </h1>
              <p className="text-xs sm:text-sm opacity-80 whitespace-nowrap">
                An adobe for coders
              </p>
            </div> */}
          </Link>

          {/* Desktop and Tablet Navigation */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {navLinks.map(link => (
              <Link
                key={link}
                to={
                  link === 'Home'
                    ? '/'
                    : `/${link.toLowerCase().replace(' ', '-')}`
                }
                className="nav-link text-sm xl:text-base whitespace-nowrap"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
            >
              <span className="mr-2 text-sm">Menu</span>
              <div className="flex flex-col space-y-1">
                <div className="w-4 h-0.5 bg-white"></div>
                <div className="w-4 h-0.5 bg-white"></div>
                <div className="w-4 h-0.5 bg-white"></div>
              </div>
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-5 h-0.5 bg-white mb-1"></div>
            <div className="w-5 h-0.5 bg-white mb-1"></div>
            <div className="w-5 h-0.5 bg-white"></div>
          </button>
        </div>

        {/* Mobile and Tablet Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/5 rounded-lg mb-2">
                {navLinks.map(link => (
                  <Link
                    key={link}
                    to={
                      link === 'Home'
                        ? '/'
                        : `/${link.toLowerCase().replace(' ', '-')}`
                    }
                    className="block px-3 py-2 rounded-md text-base hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
