"use client"

import React, { useEffect, useState } from 'react'
import { faqData } from '../data/faqData'

const styles = {
  container: (isMobile, isTablet) => ({
    paddingLeft: isMobile ? '1rem' : isTablet ? '7rem' : '0rem',
    paddingRight: isMobile ? '1rem' : isTablet ? '7rem' : '0rem',
    // paddingBottom: isMobile ? '3rem' : isTablet ? '3rem' : '5.5rem',
    // paddingTop: isMobile ? '2rem' : isTablet ? '2rem' : '0rem',
  }),
  faqTitle: (isMobile, isTablet) => ({
    fontSize: isMobile ? '20px' : isTablet ? '40px' : '40px',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '0.5rem',
  }),
  faqContainer: (isMobile, isTablet) => ({
    padding: isMobile ? '0rem' : isTablet ? '0rem' : '0rem',
    display: isMobile ? 'grid' : isTablet ? 'grid' : 'grid',
    gap: '1rem',
    // marginBottom: isMobile ? '1rem' : isTablet ? '' : '1rem',
    // paddingLeft: isMobile ? '1rem' : isTablet ? '' : '3rem',
  }),
  faq: (isMobile, isTablet) => ({
    backdropFilter: 'blur(20px)',
    borderColor: 'white',
    borderWidth: 'thin',
    padding: '1rem',
    paddingLeft: isMobile ? '1rem' : isTablet ? '1rem' : '2rem',
    lineHeight: '2rem',
    borderImage: 'linear-gradient(130deg, #840000, #FFF, #000, #FFF, #840000) 1', 
  }),
}

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h3 onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
        {question}
      </h3>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};

const FAQList = () => {
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

  const faqs = [
    { question: [faqData.faq1], answer: "JSX er en syntaxudvidelse til JavaScript." },
    { question: [faqData.faq2], answer: "Du kan bruge React ved at oprette komponenter." },
    { question: [faqData.faq3], answer: "Du kan bruge React ved at oprette komponenter." }
  ];

  return (
    <div style={styles.container(isMobile, isTablet)}>
      <h1 style={styles.faqTitle(isMobile, isTablet)}>{faqData.faqtitle}</h1>

      <div style={styles.faqContainer(isMobile, isTablet)}>
          {faqs.map((faq, index) => (
            <>
              <h2 style={styles.faq(isMobile, isTablet)}>
                <FAQ key={index} question={faq.question} answer={faq.answer} />
              </h2>
            </>
          ))}
      </div>
    </div>
  );
};

export default FAQList;
