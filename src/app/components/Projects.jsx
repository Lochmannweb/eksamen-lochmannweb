import React from 'react';
import styled from '@emotion/styled';
import { RecentWorkData } from '../data/MyWorkData';
import "@fontsource/keania-one";
import { keyframes } from '@emotion/react';

const breakpoints = {
  md: '768px', 
  lg: '1024px',
};

const Container = styled.div({
  overflow: 'hidden', 
  position: 'relative', 
  padding: '2rem',
  margin: 'auto',
  [`@media (min-width: ${breakpoints.md})`]: {
    padding: '10rem',
    marginTop: '0rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '90%',
    padding: '15rem',
    marginTop: '5rem',
  },
});

const HeaderContent = styled.div({
  marginBottom: '1rem',
  marginTop: '4rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginTop: '0rem',
    marginBottom: '0rem',
  },
})

const Title = styled.div({
  fontSize: '25px',
  fontFamily: '"Keania One", sans-serif',
  borderColor: '#A100FF',
  borderWidth: 'thin',
  textAlign: 'center',
  padding: '0.3rem',
  borderRadius: '0px 100px',
  marginBottom: '1rem',
  margin: 'auto',

  // scroll animation text
  color: 'hsl(0 0% 100% / 0)',
  backgroundImage: 'linear-gradient(90deg, white, #A100FF)',
  backgroundSize: '30% 100%',
  backgroundRepeat: 'no-repeat',
  animation: 'scroll-reveal linear forwards',
  animationTimeline: 'view()',
  backgroundClip: 'text',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '40px',
    marginTop: '-14rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '80%',
  },
});

const scrollReveal = keyframes`
  to {
    background-size: 100% 100%;
  }
`;

const ImageGrid = styled.div({
  display: 'grid',
  gap: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    gap: '0rem',
    gridTemplateColumns: '1fr 1fr',
    marginBottom: '3rem',
    padding: '2rem',
  },
});

const Button = styled.div({
  borderWidth: 'thin',
  backgroundColor: 'white',
  color: 'black',
  margin: 'auto',
  width: '60%',
  padding: '0.3rem',
  borderRadius: '25px',
  textAlign: 'center',
  marginTop: '2rem',
  fontFamily: '"Keania One", sans-serif',
  ':hover': {
    backgroundColor: 'black', 
    color: 'white',
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
          <Title><span>{RecentWorkData.title}</span></Title>
        </HeaderContent>
        <ImageGrid>
          <img src="/foofest-desktop.png" alt="png" width={500} />
          <img src="/cgc-desktop.png" alt="png" width={550} />
        </ImageGrid>
        <Button>
          <a href="/MyWork">{RecentWorkData.button}</a>
        </Button>
      </Container>
    </>
  );
}

export default LatestProjects;
