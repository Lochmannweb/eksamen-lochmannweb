'use client';

import React from 'react';
import Contact from '../components/Contact'
import styled from '@emotion/styled'; 

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

  return (
    <>
      <IMG>
        <img src="/contact.png" alt="png" width={2000} />
      </IMG>
      <Container>
        <Contact />
      </Container>
    </>
  );
}

export default ContactForm;
