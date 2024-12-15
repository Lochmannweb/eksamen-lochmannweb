"use client"

import React from 'react'
import Header from '../components/MyWorkComponent/Header';
import StepByStep from '../components/MyWorkComponent/StepByStep';
import styled from '@emotion/styled';
import WorkPageProjects from '@/app/components/WorkPageProjects'
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const Container = styled.div({
  paddingTop: '5rem',
  paddingBottom: '5rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
});

const Aboutpage = () => {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
    {(!isMobile && 
      <img className="mt-56 -mb-52 md:mb-0 md:-mt-12" src="/followproces-bg.png" alt="bg" width={2000} /> 
    )}
    {(isTablet && 
      <img src="/follow-proces-mbg.png" alt="mobil" width={2000} /> 
    )}
      <Container>
        <Header />  
        <StepByStep />
        <WorkPageProjects />
      </Container>
    </>
  )
}

export default Aboutpage