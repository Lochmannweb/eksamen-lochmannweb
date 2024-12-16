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
  margin: 'auto',
  marginTop: '-27rem',
  padding: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginTop: '-55rem',
    textAlign: 'center',
    padding: '4rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    marginTop: '-45rem',
  },
});

const HeaderTitle = styled.div({
  fontFamily: '"Keania One", sans-serif',
  fontSize: '45px',
  lineHeight: '3.5rem',
  backgroundImage: 'linear-gradient(90deg, #fff, #A100FF)',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  backgroundClip: 'text',
  marginBottom: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '60px',
    },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '70px',
    },
});

const ContentContainer = styled.div({
  display: 'grid',
  gap: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    },
   [`@media (min-width: ${breakpoints.lg})`]: {
     gridTemplateColumns: '1fr 1fr 1fr',
     },
});

const Content = styled.div({
  fontSize: '15px',
  borderWidth: 'thin',
  borderColor: '#A100FF',
  borderRadius: '25px',
  padding: '0.5rem',
  textAlign: 'start',
  color: 'hsl(0 0% 100% / 0)',
  backgroundImage: 'linear-gradient(90deg, white, gray)',
  backgroundClip: 'text',
  [`@media (min-width: ${breakpoints.md})`]: {
    margin: 'auto',
    textAlign: 'center',
    width: '90%',
    fontSize: '20px',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      margin: 'auto',
      textAlign: 'center',
      width: '100%',
      fontSize: '15px',
      },
});

// const HighlightedText = styled.span({ 
//   backgroundImage: 'linear-gradient(90deg, #fff, #A100FF)',
//   WebkitBackgroundClip: 'text',
//   color: 'transparent',
//   backgroundClip: 'text',
// });

export default function Header() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // const highlightWords = ["elevate", "your", "website"]; 
  // const subheaderText = ForsideData.subheader.split(" ").map((word, index) => {
  //   const cleanWord = word.replace(/[.,!?]/g, ""); 
  //   return highlightWords.includes(cleanWord) ? (
  //     <HighlightedText key={index}>{word}</HighlightedText>
  //   ) : (
  //     word
  //   );
  // }).reduce((prev, curr) => [prev, ' ', curr]);

  return (
    <>
    {(!isMobile && 
      <img className="mt-56 -mb-52 md:mb-0 md:-mt-12" src="/header-home-dbg.png" alt="bg" width={2000} /> 
    )}

    {(isTablet && 
      <img className="-mt-12 -mb-52 md:mb-0 md:-mt-72" src="/header-mobil-bg.png" alt="mobil" width={2000} /> 
    )}
    <Container>
        <HeaderTitle>{ForsideData.subheader}</HeaderTitle>
        <ContentContainer>
          <Content>{ForsideData.content}</Content>
          <Content>{ForsideData.content2}</Content>
          <Content>{ForsideData.content3}</Content>
        </ContentContainer>
    </Container>
    </>
  );
}
