"use client"

import React from 'react';
import styled from '@emotion/styled';
import { TechData } from '../data/TechData';
import "@fontsource/keania-one";

const breakpoints = {
    md: '768px', 
    lg: '1024px', 
  };

const Container = styled.div({
  display: 'grid',
  marginTop: '12rem',
  padding: '2rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      marginTop: '5rem',
      },
      [`@media (min-width: ${breakpoints.md})`]: {
        marginTop: '10rem',
        },
});

const HeaderContent = styled.div({
  margin: 'auto',
  alignContent: 'start',
  [`@media (min-width: ${breakpoints.md})`]: {
    alignContent: 'center',
    padding: '4rem',
    width: '100%',
    marginTop: '-5rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    alignContent: 'center',
    padding: '4rem',
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
  // padding: '0.3rem',
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
    textAlign: 'center',
    borderRadius: '0px 70px',
    borderColor: '#A100FF',
    fontSize: '40px',
  },
});

const Subheader = styled.div({
  textAlign: 'start',  
  fontSize: '15px',
  color: 'hsl(0 0% 100% / 0)',
  backgroundImage: 'linear-gradient(90deg, gray, white)',
  backgroundClip: 'text',
  [`@media (min-width: ${breakpoints.md})`]: {
    textAlign: 'center',  
    fontSize: '20px',
  },
})


const Expertise = styled.div({
  display: 'grid',
  gap: '2rem',
  padding: '2rem',
  margin: 'auto',
  [`@media (min-width: ${breakpoints.md})`]: {
    padding: '2rem',
    marginTop: '-3rem',
    display: 'flex',
    gap: '5rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    padding: '0rem',
    display: 'flex',
    gap: '5rem',
  },
})

const ExpertiseContent = styled.div({
  alignItems: 'center',
  display: 'flex',
  gap: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    gap: '1rem',
  },
})

const ExpertiseContentText = styled.div({
  fontFamily: '"Keania One", sans-serif',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
})

const Button = styled.div({
  padding: '0.5rem',
  borderRadius: '20px',
  textAlign: 'center',
  fontSize: '15px',
  marginTop: '1rem',
  width: '80%',
  margin: 'auto',
  color: 'white',
  filter: 'drop-shadow(0 0 0.75rem #A100FF)',
  backgroundImage: 'linear-gradient(90deg, black, #A100FF)',
  fontFamily: '"Keania One", sans-serif',
  ':hover': {
    backgroundImage: 'linear-gradient(180deg, black, #A100FF)',
  },
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
    margin: 'auto',
    width: '20%',
    marginBottom: '8rem',
    marginTop: '2rem',
    width: '40%',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '15%',
    borderRadius: '15px',
    marginTop: '3rem',
    fontSize: '20px',
    
  }
});

function App() {

  return (
    <>
    <Container>
      <HeaderContent>
        <Title>{TechData.title}</Title>
        <Subheader>
          <span>{TechData.subheader}</span> <br />
          <span>{TechData.subheader2}</span>
        </Subheader>
      </HeaderContent>
      <Expertise>
        <ExpertiseContent>
          <img src="/react-icon.svg" alt="svg" width={60} />
          <ExpertiseContentText>{TechData.Kode.title}</ExpertiseContentText>
        </ExpertiseContent>

        <ExpertiseContent>
          <img src="/spline.png" alt="png" width={60}  />
          <ExpertiseContentText>{TechData.Ani.title}</ExpertiseContentText>
        </ExpertiseContent>

        <ExpertiseContent>
          <img src="js-icon.svg" alt="svg" width={50} />
          <ExpertiseContentText>{TechData.Js.title}</ExpertiseContentText>
        </ExpertiseContent>

        <ExpertiseContent>
          <img src="/tailwind-css.svg" alt="svg" width={60} />
          <ExpertiseContentText>{TechData.TW.title}</ExpertiseContentText>
        </ExpertiseContent>
      </Expertise>
      <Button><a href="/About">See All Services</a></Button>
    </Container>
    </>
  );
}

export default App;
