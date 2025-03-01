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

  const [info, setInfo] = useState({
    members: 0,
    events: 0,
    participants: 0,
    visitCount: 0,
  });
  // Update visit count
  const updateInfo = async () => {
    const db = database;
    const infoRef = ref(db, 'info');
    const host = window.location.hostname;

    try {
      const snapshot = await get(infoRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        const newCount = data.visitCount + 1;
        setInfo({ ...data, visitCount: newCount });
        // console.log('Total site visits:', newCount);
        // console.log('Info fetched:', data, info);
        if (host !== 'localhost') {
          await set(infoRef, { ...data, visitCount: newCount });
        } else {
          console.log('Visit count not updated for localhost');
        }
      } else {
        setInfo({ visitCount: 1 });
        console.log('Total site visits: 1');
        if (host !== 'localhost') {
          await set(infoRef, { ...info, visitCount: 1 });
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
      value={{ isMobile, scrollToSection, updateInfo, info }}
    >
      {children}
    </globalContext.Provider>
  );
};

export { globalContext, GlobalProvider };
