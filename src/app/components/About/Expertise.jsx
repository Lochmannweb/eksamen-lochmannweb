"use client"

import { ExpertiseData } from "../../data/ExpertiseData"
import React from 'react'
import styled from '@emotion/styled';

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

const Grid = styled.div({
    [`@media (min-width: ${breakpoints.md})`]: {
      display: 'grid',
      gap: '1rem',
      marginBottom: '5rem',
    },
});

const Container = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    paddingLeft: '5rem',
    paddingRight: '5rem',
    gap: '1rem',
    margin: 'auto',
  },
});

const Skills = styled.div({
  padding: '0.5rem',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  borderColor: '#CA8669',
  borderWidth: 'thin',
  borderRadius: '50px',
  fontSize: '15px',
  color: 'white',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
});

const Expertise = () => {

  return (
    <>
      <Grid>
        <Container>
          <Skills>{ExpertiseData.Js}</Skills>
          <Skills>{ExpertiseData.Ts}</Skills>
          <Skills>{ExpertiseData.Tailwind}</Skills>
          <Skills>{ExpertiseData.Css}</Skills>
          <Skills>{ExpertiseData.React}</Skills>
          <Skills>{ExpertiseData.Ani}</Skills> 
        </Container>

        <Container>
          <Skills>{ExpertiseData.Astro}</Skills>
          <Skills>{ExpertiseData.Ps}</Skills>
          <Skills>{ExpertiseData.Ai}</Skills>
          <Skills>{ExpertiseData.Uxui}</Skills>
          <Skills>{ExpertiseData.Html}</Skills>
        </Container>
      </Grid>
    </>
  )
}

export default Expertise
