"use client"

// import { AboutData } from "@/app/data/AboutData"
// import Image from "next/image"
import React from 'react'
import styled from '@emotion/styled';
import { UXUIData } from '@/app/data/UXUIData'
import Image from 'next/image';
import "@fontsource/keania-one";

const breakpoints = {
  md: '768px', 
  lg: '1024px',
};

const Title = styled.div({
  fontSize: '30px',
  margin: 'auto',
  fontFamily: '"Keania One", sans-serif',
  borderBottomColor: '#A100FF',
  borderWidth: 'thin',
  textAlign: 'start',
  borderRadius: '0px',
  marginBottom: '1rem',
  marginTop: '5rem',

  // scroll animation text
  color: 'hsl(0 0% 100% / 0)',
  backgroundImage: 'linear-gradient(90deg, white, #A100FF)',
  backgroundSize: '50% 100%',
  backgroundRepeat: 'no-repeat',
  animation: 'scroll-reveal linear forwards',
  animationTimeline: 'view()',
  backgroundClip: 'text',
  [`@media (min-width: ${breakpoints.md})`]: {
    borderColor: '#A100FF',
    textAlign: 'center',
    borderRadius: '0px 100px',
   fontSize: '40px',
   marginTop: '4rem',
   width: '80%',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '40px',
    marginTop: '5rem',
    width: '50%',
   },
});

const Container = styled.div({
  margin: 'auto',
    [`@media (min-width: ${breakpoints.md})`]: {
      display: 'flex',
      justifyContent: 'start',
      marginTop: '3rem',
      width: '84%',
      [`@media (min-width: ${breakpoints.lg})`]: {
        marginTop: '3rem',
        width: '50%',
        gap: '2rem',
      },
    },
});

const ImageContainer = styled.div({
  margin: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '50%',
    height: '30vh',
  },
});

const Content = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '50%',
    padding: '1rem',
  },
});

const ContentTitle = styled.div({
  fontSize: '30px',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
});

const ContentSubheder = styled.div({
  fontSize: '15px',
  color: 'hsl(0 0% 100% / 0)',
  backgroundImage: 'linear-gradient(90deg, gray, white)',
  backgroundClip: 'text',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginBottom: '1rem',
    fontSize: '15px',
  },
});


const MyStory = () => {

  return (
    <>
    <Title>{UXUIData.Kode.title}</Title>
    <Container>
      <Content>
        <ContentSubheder>{UXUIData.Kode.content}</ContentSubheder>
        <ContentSubheder>{UXUIData.Kode.content2}</ContentSubheder> 
        <ContentSubheder>{UXUIData.Kode.content7}</ContentSubheder> 
        <li className='md:text-base'>{UXUIData.Kode.services1}</li>
        <li className='md:text-base'>{UXUIData.Kode.services2}</li>
        <li className='md:text-base'>{UXUIData.Kode.services3}</li>
        <li className='md:text-base'>{UXUIData.Kode.services4}</li>
        <li className='md:text-base'>{UXUIData.Kode.services5}</li>
        <li className='md:text-base'>{UXUIData.Kode.services6}</li>
        <li className='md:text-base'>{UXUIData.Kode.services7}</li>
        <li className='md:text-base'>{UXUIData.Kode.services8}</li>
      </Content>
    </Container>
    </>
  )
}

export default MyStory
