import React from 'react';
import styled from '@emotion/styled';
import { RecentWorkData } from '../data/MyWorkData';
import "@fontsource/keania-one";

const breakpoints = {
  md: '768px', 
  lg: '1024px',
};

const Container = styled.div({
  overflow: 'hidden', 
  position: 'relative', 
  marginTop: '5rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '100%',
    padding: '15rem',
    marginTop: '5rem',
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
    textAlign: 'center',
    borderColor: '#A100FF',
    borderRadius: '0px 100px',
    fontSize: '40px',
    marginTop: '-5rem',
    marginBottom: '2rem',
  },
});

const ImageGrid = styled.div({
  display: 'grid',
  gap: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    gridTemplateColumns: '1fr 1fr 1fr',
    marginBottom: '5rem',
  },
});

function LatestProjects() {
  return (
    <>
      <Container>
        <Title>{RecentWorkData.title}</Title>
        <ImageGrid>
          <a href="https://foofest-eksamen-line.netlify.app/" prefetch={false}><img src="/foofest-desktop.png" alt="png" width={500} /></a>
          <a href="https://www.cgc-wargaming.dk/" prefetch={false}><img src="/cgc-desktop.png" alt="png" width={500} /></a>
        </ImageGrid>
      </Container>
    </>
  );
}

export default LatestProjects;
