"use client"

import React from 'react'
import { Categories } from '../data/Categories';
import styled from '@emotion/styled';

const breakpoints = {
    md: '768px', // tablet
    lg: '1024px', // desktop
  };

const Container = styled.div({
    gap: '1rem',
    display: 'grid',
    margin: 'auto',
    [`@media (min-width: ${breakpoints.md})`]: {
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
    },
});

const Emner = styled.div({
    borderWidth: 'thin',
    borderColor: '#59372A',
    borderRadius: '15px',
    padding: '0.3rem',
    margin: 'auto',
    [`@media (min-width: ${breakpoints.md})`]: {
        padding: '0.3rem',
        borderRadius: '15px',
    },
});

const Topic = styled.div({
  textAlign: 'center',
  padding: '0.5rem',
  fontSize: '15px',
  fontWeight: 'bold',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
},
});

function Designemner() {
  return (
    <>
      <Container>
        <Emner><Topic className='w-44 md:w-48'>{Categories.Branding}</Topic></Emner>
        <Emner><Topic className='w-44 md:w-48'>{Categories.Shop}</Topic></Emner>
        <Emner><Topic className='w-44 md:w-48'>{Categories.Redesign}</Topic></Emner>
        <Emner><Topic className='w-56 md:w-72'>{Categories.Designs}</Topic></Emner>
      </Container>
    </>
  )
}

export default Designemner