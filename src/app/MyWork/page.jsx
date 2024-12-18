"use client"

import React from 'react'
import Header from '../components/MyWorkComponent/Header';
import StepByStep from '../components/MyWorkComponent/StepByStep';
import styled from '@emotion/styled';
import WorkPageProjects from '@/app/components/WorkPageProjects'
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const breakpoints = {
  md: '768px', 
  lg: '1024px',
};

const Container = styled.div({
  paddingTop: '5rem',
  paddingBottom: '5rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
});

const Aboutpage = () => {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log('Supabase ANON KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  return (
    <>
    {(!isMobile && 
      <img className="mt-56 -mb-52 md:mb-0 md:-mt-12" src="/test-follow-dbg.png" alt="bg" width={2000} /> 
    )}
    {(isTablet && 
      <img src="/test-follow-mbg.png" alt="mobil" width={2000} /> 
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