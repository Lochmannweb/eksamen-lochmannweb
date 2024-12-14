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
    fontSize: '18px',
    backgroundColor: '#A100FF',
    fontFamily: 'emoji',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    margin: 'auto',
    width: '80%',
    borderRadius: '0px 70px',
    fontFamily: '"Keania One", sans-serif',
    [`@media (min-width: ${breakpoints.md})`]: {
        fontSize: '30px',
        width: '65%',
        padding: '2rem',
      },
    [`@media (min-width: ${breakpoints.lg})`]: {
        width: '45%',
      },
});

const Content = styled.div({
    fontSize: '10px',
    color: '#aaa',
    padding: '2rem',
    textAlign: 'center',
    margin: 'auto',
    width: '90%',
    marginTop: '-1rem',
    [`@media (min-width: ${breakpoints.md})`]: {
        fontSize: '15px',
        width: '70%',
        padding: '4rem',
        marginTop: '-2rem',
      },
    [`@media (min-width: ${breakpoints.lg})`]: {
        width: '50%',
      },
  });

const Button = styled.div({
    borderRadius: '50px',
    width: '50%',
    padding: '0.3rem',
    margin: 'auto',
    marginTop: '3rem',
    marginBottom: '3rem',
    textAlign: 'center',
    fontFamily: '"Keania One", sans-serif',
    backgroundColor: 'white',
    color: 'black',
    [`@media (min-width: ${breakpoints.md})`]: {
        width: '25%',
        padding: '0.5rem',
        fontSize: '15px',
      },
    [`@media (min-width: ${breakpoints.lg})`]: {
        width: '12%',
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