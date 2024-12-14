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
  padding: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '100%',
    padding: '15rem',
    marginTop: '5rem',
  },
});

const Title = styled.div({
  fontSize: '25px',
  width: '60%',
  margin: 'auto',
  fontFamily: '"Keania One", sans-serif',
  borderColor: '#A100FF',
  borderWidth: 'thin',
  color: 'hsl(0 0% 100% / 0)',
  backgroundImage: 'linear-gradient(90deg, white, #A100FF)',
  backgroundSize: '30% 100%',
  backgroundRepeat: 'no-repeat',
  animation: 'scroll-reveal linear forwards',
  animationTimeline: 'view()',
  backgroundClip: 'text',
  textAlign: 'center',
  padding: '0.3rem',
  borderRadius: '0px 100px',
  marginBottom: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
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
          {/* <img src="/foofest-desktop.png" alt="png" width={500} />
          <img src="/foofest-desktop.png" alt="png" width={500} /> */}
        </ImageGrid>
      </Container>
    </>
  );
}

export default LatestProjects;
