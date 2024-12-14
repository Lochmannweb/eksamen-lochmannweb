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
  marginTop: '18rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      marginTop: '16rem',
      },
});

const HeaderContent = styled.div({
  margin: 'auto',
  alignContent: 'start',
  padding: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    alignContent: 'center',
    padding: '4rem',
    width: '60%',
    marginTop: '-10rem',
  },
})

const Title = styled.div({
  fontSize: '25px',
  fontFamily: '"Keania One", sans-serif',
  backgroundColor: '#A100FF',
  color: 'white',
  textAlign: 'center',
  padding: '0.3rem',
  borderRadius: '0px 70px',
  marginBottom: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '40px',
  },
});

const Subheader = styled.div({
  color: 'white',
  textAlign: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
})

const Expertise = styled.div({
  display: 'grid',
  gap: '2rem',
  padding: '2rem',
  margin: 'auto',
  [`@media (min-width: ${breakpoints.md})`]: {
    padding: '2rem',
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
  padding: '0.3rem',
  borderRadius: '20px',
  textAlign: 'center',
  width: '40%',
  borderWidth: 'thin',
  fontSize: '13px',
  marginTop: '1rem',
  margin: 'auto',
  color: 'black',
  backgroundColor: 'white',
  fontFamily: '"Keania One", sans-serif',
  [`@media (min-width: ${breakpoints.md})`]: {
    margin: 'auto',
    width: '20%',
    marginBottom: '8rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '10%',
    padding: '0.3rem',
    borderRadius: '15px',
    marginTop: '1rem',
    fontSize: '15px',
    
  }
});

function App() {

  return (
    <>
    <Container>
      <HeaderContent>
        <Title>{TechData.title}</Title>
        <Subheader>
          <p>{TechData.subheader}</p>
          <p>{TechData.subheader2}</p>
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
