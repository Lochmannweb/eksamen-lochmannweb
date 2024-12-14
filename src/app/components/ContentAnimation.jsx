import React, { useState, useEffect } from "react";
import styled from '@emotion/styled';

const Container = styled.div({

});

const Content = styled.div({
    fontSize: '15px',
    lineHeight: '2rem',
    textAlign: 'center',
    wordSpacing: '0.3rem',
    transition: 'color 0.3s ease-in-out',
});

const ContentAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const text = "Når man scroller ned henover denne tekst, vil den skifte farve ord for ord for at vække interesse og engagement hos læseren.";
  const words = text.split(" ");

  return (
    <Container>
      <div>
        <Content>
          {words.map((word, index) => {
            const hue = Math.floor((scrollPosition * 360 + index * 10) % 360);
            return (
              <span key={index} style={{ color: `hsl(${hue}, 100%, 50%)` }}>
                {word}{" "}
              </span>
            );
          })}
        </Content>
      </div>
    </Container>
  );
};

export default ContentAnimation;
