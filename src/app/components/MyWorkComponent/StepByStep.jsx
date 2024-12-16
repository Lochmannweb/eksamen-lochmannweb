"use client"

import { StepByStep } from "@/app/data/MyWorkData"
import React from 'react'
import styled from '@emotion/styled';
import "@fontsource/keania-one";

const breakpoints = {
    md: '768px', 
    lg: '1024px', 
  };

const Container = styled.div({
    display: 'grid',
    gap: '2rem',
    margin: 'auto',
    [`@media (min-width: ${breakpoints.lg})`]: {
        gap: '4rem',
    },
});

const Title = styled.div({
  fontSize: '30px',
  margin: 'auto',
  fontFamily: '"Keania One", sans-serif',
  borderBottomColor: '#A100FF',
  borderWidth: 'thin',
  textAlign: 'start',
  borderRadius: '0px',
  marginBottom: '1rem',

  // scroll animation text
  color: 'hsl(0 0% 100% / 0)',
  backgroundImage: 'linear-gradient(90deg, white, #A100FF)',
  backgroundSize: '50% 100%',
  backgroundRepeat: 'no-repeat',
  animation: 'scroll-reveal linear forwards',
  animationTimeline: 'view()',
  backgroundClip: 'text',
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '35px',
      borderRadius: '0px 100px',
      borderColor: '#A100FF',
      textAlign: 'center',
      width: '90%',
      padding: '1rem',
      marginBottom: '-3rem',
      },
    [`@media (min-width: ${breakpoints.lg})`]: {
      width: '45%',
      },
});

const Content = styled.div({
    fontSize: '15px',
    textAlign: 'start',
    width: '90%',
    marginTop: '-1rem',
    color: 'hsl(0 0% 100% / 0)',
    backgroundImage: 'linear-gradient(90deg, gray, white)',
    backgroundClip: 'text',
    [`@media (min-width: ${breakpoints.md})`]: {
      margin: 'auto',
      marginTop: '4rem',
      textAlign: 'center',
      fontSize: '20px',
      width: '70%',
      marginBottom: '2rem',
      },
    [`@media (min-width: ${breakpoints.lg})`]: {
        width: '50%',
      },
  });

const Button = styled.div({
  padding: '0.5rem',
  marginTop: '3rem',
  borderRadius: '20px',
  textAlign: 'center',
  fontSize: '15px',
  color: 'white',
  filter: 'drop-shadow(0 0 0.75rem #A100FF)',
  backgroundImage: 'linear-gradient(90deg, black, #A100FF)',
  fontFamily: '"Keania One", sans-serif',
  ':hover': {
    backgroundImage: 'linear-gradient(180deg, black, #A100FF)',
  },
    [`@media (min-width: ${breakpoints.md})`]: {
      margin: 'auto',
      marginTop: '3rem',
      width: '25%',
      padding: '0.5rem',
      fontSize: '15px',
      width: '50%',
      },
    [`@media (min-width: ${breakpoints.lg})`]: {
      width: '15%',
      fontSize: '20px',
      },
  });

const Aboutpage = () => {

  return (
    <>
    <Container>
        <div> 
            <Title>{StepByStep.contact.title}</Title>
            <Content>{StepByStep.contact.content}</Content>
        </div>

        <div> 
            <Title>{StepByStep.tilbudKontrakt.title}</Title>
            <Content>{StepByStep.tilbudKontrakt.content}</Content>
        </div>

        <div> 
            <Title>{StepByStep.planlægning.title}</Title>
            <Content>{StepByStep.planlægning.content}</Content>
        </div>

        <div> 
            <Title>{StepByStep.udvikling.title}</Title>
            <Content>{StepByStep.udvikling.content}</Content>
        </div>

        <div> 
            <Title>{StepByStep.testAfWebsite.title}</Title>
            <Content>{StepByStep.testAfWebsite.content}</Content>
        </div>

        <div> 
            <Title>{StepByStep.vedligeholdelse.title}</Title>
            <Content>{StepByStep.vedligeholdelse.content}</Content>
        </div>
    </Container>  
     <Button><a href="/Contact">{StepByStep.button}</a></Button>
    </>
  )
}

export default Aboutpage