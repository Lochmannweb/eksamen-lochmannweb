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
      width: '30%',
      right: '23rem',
      margin: 'unset',
      position: 'absolute',
    },
  });

function ContactForm() {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
    {(!isMobile && 
      <img className="mt-56 -mb-52 md:-mb-28 md:-mt-7" src="/test-contact-dbg.png" alt="bg" width={2000} /> 
    )}

    {(isTablet && 
      <img src="/test-contact-mbg.png" alt="mobil" width={2000} /> 
    )}
      <Container>
        <Contact />
      </Container>
    </>
  );
}

export default ContactForm;
