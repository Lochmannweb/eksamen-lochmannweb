"use client"

import { MyWorkHeader } from "@/app/data/MyWorkData"
import React from 'react'
import styled from "styled-components"
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

const Content = styled.div({
  fontSize: '15px',
  display: 'grid',
  gap: '0rem',
  textAlign: 'center',
  marginTop: '-5rem',
  paddingBottom: '2rem',

  // text animation
  color: 'hsl(0 0% 100% / 0)',
  backgroundImage: 'linear-gradient(90deg, gray, white)',
  backgroundClip: 'text',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
    paddingLeft: '8rem',
    paddingRight: '8rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    textAlign: 'center',
    paddingLeft: '30rem',
    paddingRight: '30rem',
    fontSize: '20px',
    marginTop: '-5rem',
    paddingBottom: '5rem',
  },
});

const Aboutpage = () => {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
    {(!isMobile && 
      <Content>
        {MyWorkHeader.content1} 
        {MyWorkHeader.content2} 
        {/* {MyWorkHeader.content3}  */}
      </Content>
     )}

    {(isTablet && 
      <Content>
        {MyWorkHeader.content1} <br /> <br />
        {MyWorkHeader.content2} <br /> <br />
        {/* {MyWorkHeader.content3}  */}
      </Content>
     )}
    </>
  )
}
 
export default Aboutpage


