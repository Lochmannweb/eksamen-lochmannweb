'use client';

import React from 'react';
import styled from '@emotion/styled';
import { MyWorkDesignData } from '../../data/MyWorkData';
import Image from 'next/image';

const breakpoints = {
  md: '768px', // tablet
  lg: '1024px', // desktop
};

const Container = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
    paddingTop: '5rem',
    paddingBottom: '5rem',
  },
});

const ImageContainer = styled.div({
    display: 'grid',
    gap: '15px',
    gridTemplateColumns: '1fr',
    [`@media (min-width: ${breakpoints.md})`]: {
      justifyContent: 'start',
    },
});

const Images = styled.div({

});

const Header = styled.div({
  marginBottom: '20px',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '45px',
    marginBottom: '50px',
  },
});

function App() {

  return (
    <>
      <Container>
          <Header className='text-3xl'>{MyWorkDesignData.title2}</Header>
          <ImageContainer>
            <Images><Image className='rounded-lg ' src="/cgc-desktop.png" width={500} height={500} alt="" /></Images>
            <Images className='flex flex-row-reverse'><Image className='rounded-lg '  src="/foofest-desktop.png" width={500} height={500} alt="" /></Images>
          </ImageContainer>
      </Container>
    </>
  );
}

export default App;
