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

  // scroll animtion text
  color: 'hsl(0 0% 100% / 0)',
  backgroundImage: 'linear-gradient(90deg, white, #A100FF)',
  backgroundSize: '30% 100%',
  backgroundRepeat: 'no-repeat',
  animation: 'scroll-reveal linear forwards',
  animationTimeline: 'view()',
  backgroundClip: 'text',
  [`@media (min-width: ${breakpoints.md})`]: {
    borderRadius: '0px 100px',
    borderColor: '#A100FF',
    textAlign: 'center',
    fontSize: '40px',
    marginTop: '0rem',
    width: '80%',
   },
  [`@media (min-width: ${breakpoints.lg})`]: {
   fontSize: '40px',
   marginTop: '0rem',
   width: '50%',
  },
});

const Container = styled.div({
  margin: 'auto',
  // fontFamily: '"Keania One", sans-serif',
    [`@media (min-width: ${breakpoints.md})`]: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '3rem',
      width: '80%',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '3rem',
      width: '50%',
      borderRadius: '20px',
      padding: '1rem',
      gap: '2rem',
    },
});

const ImageContainer = styled.div({
  margin: '1rem',
  marginBottom: '3rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '50%',
    height: '30vh',
  },
});

const Content = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '50%',
    marginTop: '0rem',
    padding: '0rem',
  },
});

const ContentTitle = styled.div({
  fontSize: '30px',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
});

const ContentSubheder = styled.div({
  color: 'hsl(0 0% 100% / 0)',
  backgroundImage: 'linear-gradient(90deg, gray, white)',
  backgroundClip: 'text',
  fontSize: '15px',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginBottom: '1rem',
    fontSize: '15px',
  },
});


const MyStory = () => {

  return (
    <>
    <Title>{UXUIData.UXUI.title}</Title>
    <Container>
      <Content>
        <ContentSubheder>{UXUIData.UXUI.content}</ContentSubheder> 
        <ContentSubheder>{UXUIData.UXUI.content2}</ContentSubheder> 
        <ContentSubheder>{UXUIData.UXUI.content3}</ContentSubheder> 
        <ContentSubheder>{UXUIData.UXUI.content4}</ContentSubheder> 
        <ContentSubheder>{UXUIData.UXUI.content5}</ContentSubheder> 
        {/* <li className='md:text-base'>{UXUIData.UXUI.services1}</li> */}
        {/* <li className='md:text-base'>{UXUIData.UXUI.services2}</li> */}
        <li className='md:text-base'>{UXUIData.UXUI.services3}</li>
        <li className='md:text-base'>{UXUIData.UXUI.services4}</li>
        <li className='md:text-base'>{UXUIData.UXUI.services5}</li>
      </Content>
      <ImageContainer>
        <Image className='m-auto' src="/uxuidesign.png" alt="img" srcset="" width={300} height={300} />
      </ImageContainer>
    </Container>
    </>
  )
}

export default MyStory
