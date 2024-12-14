

import React from 'react'
import styled from '@emotion/styled';
import { ContactFormularData } from '../data/ContactFormular';
import Image from 'next/image';

const breakpoints = {
    md: '768px',
    lg: '1024px',
  };

  const Container = styled.div({
    color: 'white',
    margin: '2rem',
    filter: 'drop-shadow(0 3mm 4mm #000)',
    background: '#090909',
    borderRadius: '15px',
    padding: '1rem',
    [`@media (min-width: ${breakpoints.md})`]: {
        display: 'grid',
        margin: 'auto',
        width: '70rem',
        marginTop: '5rem',
        padding: '3rem',
    },
  });

  const Grid = styled.div({
    padding: '1rem',
    display: 'grid',
    gap: '3rem',
    [`@media (min-width: ${breakpoints.md})`]: {
        display: 'flex',
        justifyContent: 'space-between'
    },
  });


  const Title = styled.div({
    fontSize: '25px',
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '30px',
    },
  });

  const Rubrik = styled.div({
    fontSize: '13px',
    color: '#A96F59', 
    [`@media (min-width: ${breakpoints.md})`]: {
    },
  });


function ContactBox() {
  return (
    <>
     <Container>
        <Grid>
            <div>
                <Title><strong>{ContactFormularData.title}</strong></Title>
                <Rubrik>{ContactFormularData.title2}</Rubrik>
            </div>
            <div>
              <a className='md:flex md:mr-24' href="/Contact" prefetch={false}><img src="/kontakt-knap.png" alt="knap" width={250} height={50} /></a>
            </div>
        </Grid>
     </Container>
    </>
  )
}

export default ContactBox
