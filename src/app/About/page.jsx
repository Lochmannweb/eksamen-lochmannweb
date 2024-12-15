"use client"

import React from 'react'
import styled from '@emotion/styled'; 
import MyStory from '../components/About/MyStory';
import UxUiServices from '../components/UxUiServices';
import CodeServices from '../components/CodeServices';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const Container = styled.div({
  padding: '2rem',
})

const Aboutpage = () => {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
    {(!isMobile && 
      <img className="mt-56 -mb-52 md:mb-0 md:-mt-12" src="/about-header-bg.png" alt="bg" width={2000} /> 
    )}

    {(isTablet && 
      <img src="/journey-service-mbg.png" alt="mobil" width={2000} /> 
    )}
      <Container>
          <MyStory />
          <UxUiServices />
          <CodeServices />
      </Container>
    </>
  )
}

export default Aboutpage