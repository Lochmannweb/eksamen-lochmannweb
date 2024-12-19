"use client"

import React from 'react'
import { RessourcerData } from '../data/RessourcerData'
import styled from '@emotion/styled';

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

const Container = styled.div({
  padding: '2rem',
  display: 'grid',
  gap: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {

  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    paddingTop: '10rem',
    paddingBottom: '12rem',
    width: '50%',
    justifySelf: 'center',
  }
});

const Title = styled.div({
  fontSize: '30px',
  fontFamily: '"Keania One", sans-serif',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '40px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  }
});

const Subheader = styled.div({
  fontSize: '20px',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  }
});

const Content = styled.div({
  fontSize: '15px',
  color: 'gray',
  // backgroundImage: 'linear-gradient(90deg, gray, white)',
  // WebkitBackgroundClip: 'text',
  // color: 'transparent',
  // backgroundClip: 'text',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  }
});


const Ressourcer = () => {

  return (
    <Container>
        <div>
            <Title >{RessourcerData.title}</Title>
        </div>

        {/* <div>
            <Subheader>{RessourcerData.vejledning.title}</Subheader> 
            <Content>{RessourcerData.vejledning.content1}</Content> <br /> 
            <Content>{RessourcerData.vejledning.content2}</Content>
        </div> */}

        {/* <div>
            <Subheader>{RessourcerData.questions.title}</Subheader>
            <Content>{RessourcerData.questions.content1}</Content> <br /> 
            <Content>{RessourcerData.questions.content2}</Content>
        </div> */}

        <div>
            <Subheader>{RessourcerData.ContractsAndTerms.title}</Subheader>
            <Content>{RessourcerData.ContractsAndTerms.content1}</Content> <br /> 
            <Content>{RessourcerData.ContractsAndTerms.content2}</Content>
        </div>

        <div>
            <Subheader>{RessourcerData.GdprAndPrivacyPolicy.title}</Subheader>
            <Content>{RessourcerData.GdprAndPrivacyPolicy.content1}</Content> <br /> 
            <Content>{RessourcerData.GdprAndPrivacyPolicy.content2}</Content>
        </div>
    </Container>
  )
}

export default Ressourcer