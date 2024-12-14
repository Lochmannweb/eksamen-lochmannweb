"use client"

import React, { useEffect, useState } from 'react'
import { ProcesStagesData } from '../data/ProcesStagesData'

const styles = {
  container: (isMobile, isTablet) => ({
    display: isMobile ? '' : isTablet ? '' : 'flow',
    gap: isMobile ? '1rem' : isTablet ? '' : '3rem',
    margin: 'auto',
    borderWidth: 'thin',
    borderColor: 'white',
    borderImage: 'linear-gradient(130deg, #840000, #FFF, #000, #FFF, #840000) 1', 
    padding: isMobile ? '1rem' : isTablet ? '1rem' : '2rem',
    margin: isMobile ? '1rem' : isTablet ? '7rem' : '0rem',
    marginTop: isMobile ? '' : isTablet ? '' : '',
    marginBottom: isMobile ? '5rem' : isTablet ? '5rem' : '6rem',
    backdropFilter: 'blur(20px)',
  }),
  title: (isMobile, isTablet) => ({
    fontSize: isMobile ? '10px' : isTablet ? '' : '20px',
  }), 
}

const ProcesStage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 799);
      setIsTablet(width >= 799 && width < 1200);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
 
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={styles.container(isMobile, isTablet)}>
      <div>
        <h1 style={styles.title(isMobile, isTablet)}>{ProcesStagesData.title}</h1>
        <hr />
        <h2>{ProcesStagesData.content}</h2>
      </div>

      <div>
        <div>
          <h1>{ProcesStagesData.project1.number}</h1>
          <h3>{ProcesStagesData.project1.title}</h3>
        </div>

        <div>
          <h1>{ProcesStagesData.project2.number}</h1>
          <h3 >{ProcesStagesData.project2.title}</h3>
        </div>

        <div>
          <h1 >{ProcesStagesData.project3.number}</h1>
          <h3 >{ProcesStagesData.project3.title}</h3>
        </div>
      </div>
    </div>
  )
}

export default ProcesStage