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
  fontSize: '20px',
  display: 'grid',
  margin: 'auto',
  marginTop: '-27rem',
  padding: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginTop: '-30rem',
    textAlign: 'center',
    marginTop: '10rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    marginTop: '-32rem',
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
    lineHeight: '0rem',
    marginBottom: '0rem',
    fontSize: '30px',
    },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '59px',
    },
});

const ContentContainer = styled.div({
  display: 'grid',
  gap: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    },
});

const Content = styled.div({
  fontSize: '15px',
  borderWidth: 'thin',
  borderColor: '#A100FF',
  borderRadius: '25px',
  padding: '0.5rem',
  // color: 'gray',
  textAlign: 'start',
  color: 'hsl(0 0% 100% / 0)',
  backgroundImage: 'linear-gradient(90deg, white, gray)',
  backgroundClip: 'text',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
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
      <img className="mt-56 -mb-52 md:mb-0 md:-mt-12" src="/Header-bg.png" alt="bg" width={2000} /> 
    )}

    {(isTablet && 
      <img className="-mt-12 -mb-52 md:mb-0 md:mt-12" src="/header-mobil-bg.png" alt="mobil" width={2000} /> 
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
