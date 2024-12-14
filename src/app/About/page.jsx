"use client"

import React from 'react'
import styled from '@emotion/styled'; 
import MyStory from '../components/About/MyStory';
import UxUiServices from '../components/UxUiServices';
import CodeServices from '../components/CodeServices';

const Container = styled.div({
  padding: '2rem',
})

const Aboutpage = () => {
  return (
    <>
    <img src="/about-header-bg.png" alt="png" width={2000} />
      <Container>
          <MyStory />
          <UxUiServices />
          <CodeServices />
      </Container>
    </>
  )
}

export default Aboutpage