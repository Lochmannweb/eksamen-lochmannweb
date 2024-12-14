"use client"

import React, { useEffect, useState } from 'react'
import { RessourcerData } from '../data/RessourcerData'

const getClasses = (isMobile) => ({
  container: {
    display: 'grid',
    gap: isMobile ? '1.5rem' : '2rem',
    padding: isMobile ? '2rem' : '8rem',
},
title: {
    fontSize: isMobile ? '1.8rem' : '3rem',
},
emner: {
    fontSize: isMobile ? '15px' : '20px',
    paddingBottom: isMobile ? '' : '0.5rem',
},
content: {
    fontSize: isMobile ? '10px' : '15px',
},
  });

const Ressourcer = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Check if window exists (only on the client side)
      const handleResize = () => {
        setIsMobile(window.innerWidth < 599);
      };
  
      handleResize(); // Set initial value
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const classes = getClasses(isMobile);

  return (
    <div style={classes.container}>
        <div>
            <h1 style={classes.title}>{RessourcerData.title}</h1>
        </div>

        <div>
            <h2 style={classes.emner}>{RessourcerData.vejledning.title}</h2>
            <li style={classes.content}>{RessourcerData.vejledning.content1}</li>
            <li style={classes.content}>{RessourcerData.vejledning.content2}</li>
        </div>

        <div>
            <h2 style={classes.emner}>{RessourcerData.questions.title}</h2>
            <li style={classes.content}>{RessourcerData.questions.content1}</li>
            <li style={classes.content}>{RessourcerData.questions.content2}</li>
        </div>

        <div>
            <h2 style={classes.emner}>{RessourcerData.ContractsAndTerms.title}</h2>
            <li style={classes.content}>{RessourcerData.ContractsAndTerms.content1}</li>
            <li style={classes.content}>{RessourcerData.ContractsAndTerms.content2}</li>
        </div>

        <div>
            <h2 style={classes.emner}>{RessourcerData.GdprAndPrivacyPolicy.title}</h2>
            <li style={classes.content}>{RessourcerData.GdprAndPrivacyPolicy.content1}</li>
            <li style={classes.content}>{RessourcerData.GdprAndPrivacyPolicy.content2}</li>
        </div>
    </div>
  )
}

export default Ressourcer