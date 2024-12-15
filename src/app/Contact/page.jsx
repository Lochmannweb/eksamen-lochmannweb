'use client';

import React from 'react';
import Contact from '../components/Contact'
import styled from '@emotion/styled'; 
import "@fontsource/keania-one";
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

const Container = styled.div({
    display: 'grid',
    margin: 'auto',
    padding: '2rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      position: 'unset',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      top: '8rem',
      width: '40%',
      right: '18rem',
      margin: 'unset',
      position: 'absolute',
    },
  });

  const IMG = styled.div({

  });



function ContactForm() {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
    {(!isMobile && 
      <img className="mt-56 -mb-52 md:mb-0 md:-mt-12" src="/Header-bg.png" alt="bg" width={2000} /> 
    )}

    {(isTablet && 
      <img src="/contact-mbg.png" alt="mobil" width={2000} /> 
    )}
      <Container>
        <Contact />
      </Container>
    </>
  );
}

export default ContactForm;
