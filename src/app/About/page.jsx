"use client"

import React from 'react'
import styled from '@emotion/styled'; 
import MyStory from '../components/About/MyStory';
import UxUiServices from '../components/UxUiServices';
import CodeServices from '../components/CodeServices';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const breakpoints = {
  md: '768px', 
  lg: '1024px',
};

const Container = styled.div({
  marginTop: '-2rem',
  padding: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginTop: '0rem',
  },
})

const Aboutpage = () => {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
    {(!isMobile && 
      <img className="mt-56 -mb-52 md:mb-0 md:-mt-12" src="/test-journey-dbg.png" alt="bg" width={2000} /> 
    )}

    {(isTablet && 
      <img src="/test-journey-mbg.png" alt="mobil" width={2000} /> 
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