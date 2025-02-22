import React, { createContext, useState, useEffect } from 'react';
import { database } from '../firebase/config';
import { ref, get, set } from 'firebase/database';

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

  const [visitCount, setVisitCount] = useState(0);
  // Update visit count
  const updateVisitCount = async () => {
    const db = database;
    const visitCountRef = ref(db, 'visitCount');
    const host = window.location.hostname;

    try {
      const snapshot = await get(visitCountRef);
      if (snapshot.exists()) {
        const currentCount = snapshot.val();
        const newCount = currentCount + 1;
        setVisitCount(newCount);
        console.log(`Total site visits: ${newCount}`);
        if (host !== 'localhost') {
          await set(visitCountRef, newCount);
        } else {
          console.log('Visit count not updated for localhost');
        }
      } else {
        setVisitCount(1);
        console.log('Total site visits: 1');
        if (host !== 'localhost') {
          await set(visitCountRef, 1);
        } else {
          console.log('Visit count not updated for localhost');
        }
      }
    } catch (error) {
      console.error('Error fetching visit count:', error);
    }
  };

  return (
    <globalContext.Provider
      value={{ isMobile, scrollToSection, updateVisitCount, visitCount }}
    >
      {children}
    </globalContext.Provider>
  );
};

export { globalContext, GlobalProvider };
