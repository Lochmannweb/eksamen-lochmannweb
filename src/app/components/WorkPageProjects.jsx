import React from 'react';
import styled from '@emotion/styled';
import { RecentWorkData } from '../data/MyWorkData';
import "@fontsource/keania-one";
import Project from './Project';

const breakpoints = {
  md: '768px', 
  lg: '1024px',
};

const Container = styled.div({
  overflow: 'hidden', 
  position: 'relative', 
  marginTop: '5rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    justifyItems: 'center',
    marginTop: '12rem',
  },
});

const Title = styled.div({
  fontSize: '30px',
  fontFamily: '"Keania One", sans-serif',
  borderBottomColor: '#A100FF',
  borderWidth: 'thin',
  textAlign: 'start',
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
    justifySelf: 'center',
    marginBottom: '2rem',
    textAlign: 'center',
    borderColor: '#A100FF',
    borderRadius: '0px 100px',
    fontSize: '35px',
    width: '90%',
    padding: '1rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    marginBottom: '2rem',
    textAlign: 'center',
    borderColor: '#A100FF',
    borderRadius: '0px 100px',
    fontSize: '35px',
    width: '45%',
    padding: '1rem',
  },
});

const ImageGrid = styled.div({
  display: 'grid',
  gap: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '3rem',
    marginTop: '2rem',
    width: '45%',
    justifySelf: 'center',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    marginBottom: '5rem',
    display: 'flex',
    // width: '80%'
  },
});

function LatestProjects() {
  return (
    <>
      <Container>
        <Title>{RecentWorkData.title}</Title>
        <ImageGrid>
          <Project />
        </ImageGrid>
      </Container>
    </>
  );
}

export default LatestProjects;
