"use client"

import React from 'react';
import styled from '@emotion/styled';
import { RecentWorkData } from '../data/MyWorkData';
import "@fontsource/keania-one";

const breakpoints = {
    md: '768px', 
    lg: '1024px', 
  };

const Container = styled.div({
  display: 'grid',
  marginTop: '8rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      marginTop: '16rem',
      },
});

const HeaderContent = styled.div({
  alignContent: 'start',
  padding: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    alignContent: 'center',
    width: '60%',
    marginTop: '-11rem',
  },
})

const Title = styled.div({
  fontSize: '30px',
  fontFamily: '"Keania One", sans-serif',
  borderBottomColor: '#A100FF',
  borderWidth: 'thin',
  textAlign: 'start',
  padding: '0.3rem',
  borderRadius: '0px',
  marginBottom: '1rem',

  // scroll animation text
  color: 'hsl(0 0% 100% / 0)',
  backgroundImage: 'linear-gradient(90deg, white, #A100FF)',
  backgroundSize: '50% 100%',
  backgroundRepeat: 'no-repeat',
  animation: 'scroll-reveal linear forwards',
  animationTimeline: 'view()',
  backgroundClip: 'text',
  [`@media (min-width: ${breakpoints.md})`]: {
    borderRadius: '0px 100px',
    textAlign: 'center',
    borderColor: '#A100FF',
    fontSize: '40px',
  },
});

const ImageGrid = styled.div({
  display: 'grid',
  gap: '1rem',
  padding: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '3rem',
    marginTop: '-2rem',
  },
});

const Button = styled.div({
  backgroundColor: 'white',
  color: 'black',
  margin: 'auto',
  width: '80%',
  padding: '0.3rem',
  borderRadius: '25px',
  textAlign: 'center',
  marginTop: '1rem',
  color: 'white',
  filter: 'drop-shadow(0 0 0.75rem #A100FF)',
  backgroundImage: 'linear-gradient(90deg, black, #A100FF)',
  fontFamily: '"Keania One", sans-serif',
  ':hover': {
    backgroundImage: 'linear-gradient(180deg, black, #A100FF)',
  },
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '30%',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '12%',
    padding: '0.3rem',
    borderRadius: '15px',
  },
});


function LatestProjects() {

  return (
    <>
    <Container>
      <HeaderContent>
        <Title>{RecentWorkData.title}</Title>
      </HeaderContent>
      <ImageGrid>
        <img src="/foofest-desktop.png" alt="png" width={500} />
        <img src="/cgc-desktop.png" alt="png" width={500} />
      </ImageGrid>
      <Button><a href="/MyWork">{RecentWorkData.button}</a></Button> 
    </Container>
    </>
  );
}

export default LatestProjects;
