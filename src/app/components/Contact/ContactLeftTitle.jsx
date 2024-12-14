'use client';

import React, { useEffect, useState } from 'react';

const styles = {
  leftContainer: (isMobile, isTablet) => ({
    textAlign: 'center',
    paddingTop: isMobile ? '5rem' : isTablet ? '8rem' : '10.5rem',
    paddingBottom: isMobile ? '8rem' : isTablet ? '5rem' : '3rem',
  }),
  leftContainerTitle: (isMobile, isTablet) => ({
    fontSize: isMobile ? '15px' : isTablet ? '18px' : '20px',
  }),
  span: (isMobile, isTablet) => ({
    fontFamily: 'emoji',
    fontSize: isMobile ? '40px' : isTablet ? '55px' : '70px',
  }),
};

function ContactLeftTitle() {
  const [screenType, setScreenType] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setScreenType('mobile'); // Mobile
      } else if (width < 1024) {
        setScreenType('tablet'); // Tablet
      } else {
        setScreenType('desktop'); // Desktop
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = screenType === 'mobile';
  const isTablet = screenType === 'tablet';

  return (
    <>
      <div style={styles.leftContainer(isMobile, isTablet)}>
        <h1 style={styles.leftContainerTitle(isMobile, isTablet)}>
          LET&apos;S 
          <br /> 
          <span style={styles.span(isMobile, isTablet)}>ACHIEVE YOUR</span>
          <br /> 
          VISION
        </h1> 
      </div>
    </>
  );
}

export default ContactLeftTitle;
