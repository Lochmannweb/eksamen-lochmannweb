"use client"

import { MyWorkHeader } from "@/app/data/MyWorkData"
import React from 'react'
import styled from "styled-components"

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
  paddingBottom: '5rem',
  color: 'hsl(0 0% 100% / 0)',
  backgroundImage: 'linear-gradient(90deg, gray, white)',
  backgroundClip: 'text',
  [`@media (min-width: ${breakpoints.md})`]: {
    paddingLeft: '10rem',
    paddingRight: '10rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    textAlign: 'center',
    paddingLeft: '35rem',
    paddingRight: '35rem',
    fontSize: '15px',
    marginTop: '-21rem',
    paddingBottom: '20rem',
  },
});

const Aboutpage = () => {

  return (
    <>
      <Content>
        {MyWorkHeader.content1} <br /> <br />
        {MyWorkHeader.content2} <br /> <br />
        {MyWorkHeader.content3}
      </Content>
    </>
  )
}
 
export default Aboutpage