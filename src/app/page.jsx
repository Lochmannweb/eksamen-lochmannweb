"use client"

import React from 'react'
import Header from './components/Header'
import Tech from './components/Tech'
import styled from '@emotion/styled';
import Feedback from '@/app/components/Feedback'
import Projects from '@/app/components/Projects'
import ContactHomePage from '@/app/components/ContactHomePage'

const Container = styled.div({
  display: 'grid',
  paddingTop: '50px',
  paddingBottom: '50px',
  gap: '0px',
});

const Page = () => {

  return (
    <Container> 
      <Header/>
      <Tech/>
      <Projects/>
      <Feedback/>
      <ContactHomePage />
    </Container> 
  )
}

export default Page