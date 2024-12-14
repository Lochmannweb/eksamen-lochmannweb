'use client';

import React from 'react';
import styled from '@emotion/styled';
import { RecentWorkData } from '../data/MyWorkData';
import CardAnimationProject from '@/app/components/CardAnimationProject'

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

const Container = styled.div({
  padding: '20px',
  display: 'grid',
  gap: '10px',
  [`@media (min-width: ${breakpoints.md})`]: {
    borderTopLeftRadius: '10rem',
    borderTopRightRadius: '10rem',
    background: 'linear-gradient(#02130E, #000000)',
    marginTop: '-8rem',
    padding: '8rem',
    boxShadow: '0px -41px 82px -59px #bfffd678',
  },
});

const BackContainer = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
    // background: 'black',
    padding: '5rem',
    width: '70%',
    margin: 'auto',
    borderRadius: '50px',
  },
});

const ImageContainer = styled.div({
  display: 'grid',
  gap: '15px',
  justifyContent: 'center',
  gridTemplateColumns: '1fr',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
  },
});

const ProjectTitle = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '25px',
    paddingTop: '3rem',
  },
});

const Title = styled.div({
  fontSize: '20px',
  fontFamily: 'fantasy',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '50px', 
    marginBottom: '80px',
    paddingLeft: '10rem',
  },
});

function App() {

  return (
    <Container> 
      <div>
        <Title className='text-3xl'>{RecentWorkData.title}</Title>
      </div>
      <BackContainer>
        <ImageContainer>
          <CardAnimationProject />
        </ImageContainer>
      </BackContainer>
    </Container>
  );
}

export default App;
