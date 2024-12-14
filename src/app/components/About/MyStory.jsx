"use client"

// import { AboutData } from "@/app/data/AboutData"
import Image from "next/image"
import React from 'react'
import styled from '@emotion/styled';
import { AboutData } from '@/app/data/AboutData'
import "@fontsource/keania-one";

const breakpoints = {
  md: '768px', 
  lg: '1024px',
};

const Container = styled.div({
  margin: 'auto',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '0rem',
    width: '80%',
    gap: '2rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    marginTop: '0rem',
    width: '50%',
  },
});

const ImageContainer = styled.div({
  margin: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginBottom: '3rem',
  },
});

const Content = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '80%',
    alignItems: 'center',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '50%',
  },
});

const Title = styled.div({
  fontSize: '25px',             
  backgroundColor: '#A100FF',
  padding: '0.3rem',
  borderRadius: '0px 70px',
  color: 'white',
  fontFamily: '"Keania One", sans-serif',
  margin: 'auto',
  textAlign: 'center',
  marginBottom: '2rem',
  padding: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '80%',
    marginBottom: '4rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '40px',
    width: '50%',
  },
});

const Text = styled.div({
  fontSize: '15px',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
});

const MyStory = () => {
  
  return ( 
    <>
      <Title>{AboutData.title}</Title>
      <Container> 
        <Content>
          <Text>
            {AboutData.subheder1} <br /> <br />
            {AboutData.subheder2} <br /> <br />
            {AboutData.subheder3} <br /> <br />
          </Text>
        </Content>
        <ImageContainer>
          <img src="/pf.jpg" alt="jpg" width={300} />
        </ImageContainer>
      </Container>
    </>
  )
}

export default MyStory
