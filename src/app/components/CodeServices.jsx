"use client"

// import { AboutData } from "@/app/data/AboutData"
// import Image from "next/image"
import React from 'react'
import styled from '@emotion/styled';
import { ServicesData } from '@/app/data/ServicesData'
import Image from 'next/image';
import "@fontsource/keania-one";

const breakpoints = {
  md: '768px', 
  lg: '1024px',
};

const Title = styled.div({
  backgroundColor: '#A100FF',
  padding: '0.3rem',
  borderRadius: '0px 70px',
  color: 'white',
  margin: 'auto',
  fontSize: '25px',
  padding: '1rem',
  textAlign: 'center',
  marginBottom: '1rem',
  fontFamily: '"Keania One", sans-serif',
  [`@media (min-width: ${breakpoints.md})`]: {
   fontSize: '40px',
   marginTop: '0rem',
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
      justifyContent: 'center',
      marginTop: '3rem',
      width: '80%',
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
  [`@media (min-width: ${breakpoints.md})`]: {
    marginBottom: '1rem',
    fontSize: '15px',
  },
});


const MyStory = () => {

  return (
    <>
    <Title>{ServicesData.Kode.title}</Title>
    <Container>
      <Content>
        <ContentSubheder>{ServicesData.Kode.content}</ContentSubheder>
        <li className='md:text-base'>{ServicesData.Kode.services1}</li>
        <li className='md:text-base'>{ServicesData.Kode.services2}</li>
        <li className='md:text-base'>{ServicesData.Kode.services3}</li>
        <li className='md:text-base'>{ServicesData.Kode.services4}</li>
        <li className='md:text-base'>{ServicesData.Kode.services5}</li>
        <li className='md:text-base'>{ServicesData.Kode.services6}</li>
        <li className='md:text-base'>{ServicesData.Kode.services7}</li>
      </Content>
      <ImageContainer>
        {/* <Image className='m-auto' src="/uxuidesign.png" alt="img" srcset="" width={300} height={300} /> */}
      </ImageContainer>
    </Container>
    </>
  )
}

export default MyStory
