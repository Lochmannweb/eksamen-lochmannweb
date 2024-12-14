import React from "react";
import { ForsideData } from "../data/ForsideData";
import styled from '@emotion/styled';
import "@fontsource/keania-one";
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

const Container = styled.div({
  display: 'grid',
  position: 'absolute',
  paddingTop: '4rem',
  textAlign: 'start',
  padding: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    paddingLeft: '15rem',
    paddingTop: '10rem',
    textAlign: 'center',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    paddingLeft: '23rem',
    paddingTop: '12rem',
    textAlign: 'center',
  },
});

const HeaderTitle = styled.div({
  fontFamily: '"Keania One", sans-serif',
  fontSize: '40px',
  margin: 'auto',
  marginTop: '-3rem',
  lineHeight: '3rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '30px',
    marginTop: '0rem',
    },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '59px',
    lineHeight: '4.5rem',
    },
});

const Content = styled.div({
  fontSize: '15px',
  marginBottom: '3rem',
  textAlign: 'start',
  color: 'hsl(0 0% 100% / 0)',
  backgroundImage: 'linear-gradient(90deg, gray, white)',
  backgroundClip: 'text',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '15px',
    marginBottom: '3rem',
    textAlign: 'center',
    },
});

const HighlightedText = styled.span({
  color: '#A100FF', 
});

export default function Header() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const highlightWords = ["elevate", "your", "website"]; 
  const subheaderText = ForsideData.subheader.split(" ").map((word, index) => {
    const cleanWord = word.replace(/[.,!?]/g, ""); 
    return highlightWords.includes(cleanWord) ? (
      <HighlightedText key={index}>{word}</HighlightedText>
    ) : (
      word
    );
  }).reduce((prev, curr) => [prev, ' ', curr]);

  return (
    <>
    {(!isMobile && 
      <img className="mt-56 -mb-52 md:mb-0 md:-mt-12" src="/Header-bg.png" alt="bg" width={2000} /> 
    )}

    {(isTablet && 
      <img className="-mt-3 -mb-52 md:mb-0 md:-mt-12" src="/header-mobil-bg.png" alt="bg" width={2000} /> 
    )}
    <Container>
        <HeaderTitle>{subheaderText}</HeaderTitle>
        <Content>{ForsideData.content}</Content>
    </Container>
    </>
  );
}
