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
  margin: 'auto',
  [`@media (min-width: ${breakpoints.md})`]: {
    padding: '10rem',
    marginTop: '0rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '90%',
    padding: '15rem',
    marginTop: '10rem',
  },
});

const Title = styled.div({
  fontSize: '25px',
  fontFamily: '"Keania One", sans-serif',
  textAlign: 'center',
  backgroundColor: '#A100FF',
  color: 'white',
  padding: '0.3rem',
  margin: 'auto',
  marginBottom: '2rem',
  borderRadius: '0px 70px',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '40px',
    width: '70%',
    marginTop: '-14rem',
    marginBottom: '3rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '80%',
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
        <Title>{RecentWorkData.title}</Title>
        <ImageGrid>
          <img src="/foofest-desktop.png" alt="png" width={500} />
          <img src="/cgc-desktop.png" alt="png" width={500} />
          {/* <img src="/foofest-desktop.png" alt="png" width={500} />
          <img src="/foofest-desktop.png" alt="png" width={500} /> */}
        </ImageGrid>
        <Button>
          <a href="/MyWork">{RecentWorkData.button}</a>
        </Button>
      </Container>
    </>
  );
}

export default LatestProjects;
