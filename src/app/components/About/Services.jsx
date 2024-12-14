"use client"

import { ServiceData } from "@/app/data/AboutData"
import React, { useEffect, useState } from 'react'

const styles = {
  container: (isMobile, isTablet) => ({
    display: isMobile ? "grid" : isTablet ? '' : "flex",
    justifyContent: "center",
    backdropFilter: "blur(20px)", 
    gap: '45px',
    border: "solid",
    borderWidth: "thin",
    padding: isMobile ? "1rem" : isTablet ? '1rem' : "3rem",
    borderImage: 'linear-gradient(130deg, #840000, #FFF, #000, #FFF, #840000) 1',
    marginBottom: '10rem',
    margin: isMobile ? '1rem' : isTablet ? '1rem' : '',
  }),
  imageContainer: (isMobile, isTablet) => ({
    marginTop: isMobile ? '2px' : isTablet ? '' : '8px',
    marginBottom: isMobile ? '2px' : isTablet ? '' : '8px',
  }),
  aboutTextContainer: {
    textAlign: 'start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: (isMobile, isTablet) => ({
    fontSize: isMobile ? '8px' : '10px',
  }),
  content: (isMobile, isTablet) => ({
    fontSize: isMobile ? '15px' : '20px',
  }),
};

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 600); // Mobile
      setIsTablet(width >= 600 && width < 900); // Tablet
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section style={styles.container(isMobile, isTablet)}>
        <div style={styles.aboutTextContainer}>
          <h1 style={styles.title(isMobile, isTablet)}>{ServiceData.title}</h1>        
          <h3 style={styles.content(isMobile, isTablet)}>{ServiceData.content}</h3>
        </div>
    </section>
  )
}

export default About
