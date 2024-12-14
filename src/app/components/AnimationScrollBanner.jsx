"use client"

import React, { useEffect, useRef } from "react";
import styled from '@emotion/styled';

const Container = styled.div({
    marginTop: '-22rem',
}); 

const BannerTop = styled.div({
    fontSize: '20px',
    display: 'flex',
    gap: '20px',
    borderColor: '#CA8669',
    borderWidth: 'thin',
    rotate: '-5deg',
    padding: '1rem',
    backgroundColor: '#0B0B0B',
    marginLeft: '-1rem',
    marginRight: '-1rem',
}); 

const BannerBottom = styled.div({
    fontSize: '20px',
    display: 'flex',
    gap: '20px',
    borderColor: '#CA8669',
    borderWidth: 'thin', 
    rotate: '10deg',
    padding: '1rem',
    backgroundColor: '#0B0B0B',
    marginLeft: '-2rem',
    marginRight: '-2rem',
}); 

const ScrollAniBanner = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollSpeed = 1; // Pixels per frame

    const animateScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        // Reset scroll position for infinite effect
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      requestAnimationFrame(animateScroll);
    };

    animateScroll(); // Start animation
    return () => cancelAnimationFrame(animateScroll); // Cleanup
  }, []);

  return (
    <Container className="scroll-container" ref={scrollRef}>
      <BannerTop className="scroll-content">
        <div className="scroll-item item1">Online Shops</div>
        <div className="scroll-item item2">Branding</div>
        <div className="scroll-item item3">Events</div>
        <div className="scroll-item item4">Redesign</div>
        {/* Duplicate items for seamless scroll */}
        <div className="scroll-item item1">Online Shops</div>
        <div className="scroll-item item2">Branding</div>
        <div className="scroll-item item3">Events</div>
        <div className="scroll-item item4">Redesign</div>

        <div className="scroll-item item1">Online Shops</div>
        <div className="scroll-item item2">Branding</div>
        <div className="scroll-item item3">Events</div>
        <div className="scroll-item item4">Redesign</div>
        {/* Duplicate items for seamless scroll */}
        <div className="scroll-item item1">Online Shops</div>
        <div className="scroll-item item2">Branding</div>
        <div className="scroll-item item3">Events</div>
        <div className="scroll-item item4">Redesign</div>

        <div className="scroll-item item1">Online Shops</div>
        <div className="scroll-item item2">Branding</div>
      </BannerTop>
      <BannerBottom className="scroll-content">
      <div className="scroll-item item1">Online Shops</div>
        <div className="scroll-item item2">Branding</div>
        <div className="scroll-item item3">Events</div>
        <div className="scroll-item item4">Redesign</div>
        {/* Duplicate items for seamless scroll */}
        <div className="scroll-item item1">Online Shops</div>
        <div className="scroll-item item2">Branding</div>
        <div className="scroll-item item3">Events</div>
        <div className="scroll-item item4">Redesign</div>

        <div className="scroll-item item1">Online Shops</div>
        <div className="scroll-item item2">Branding</div>
        <div className="scroll-item item3">Events</div>
        <div className="scroll-item item4">Redesign</div>
        {/* Duplicate items for seamless scroll */}
        <div className="scroll-item item1">Online Shops</div>
        <div className="scroll-item item2">Branding</div>
        <div className="scroll-item item3">Events</div>
        <div className="scroll-item item4">Redesign</div>

        <div className="scroll-item item1">Online Shops</div>
        <div className="scroll-item item2">Branding</div>
        {/* Duplicate items for seamless scroll */}
      </BannerBottom>
    </Container>
  );
};

export default ScrollAniBanner;



