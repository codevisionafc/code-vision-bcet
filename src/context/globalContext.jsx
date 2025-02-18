import React, { createContext, useState, useEffect } from 'react';

// Create the context
const globalContext = createContext();

// Create a provider component
const GlobalProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize(); // Set initial state based on screen size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Scroll to a section
  const scrollToSection = sectionRef => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <globalContext.Provider value={{ isMobile, scrollToSection }}>
      {children}
    </globalContext.Provider>
  );
};

export { globalContext, GlobalProvider };
