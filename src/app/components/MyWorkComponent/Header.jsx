"use client"

import { MyWorkHeader } from "@/app/data/MyWorkData"
import React from 'react'
import styled from "styled-components"

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

const Content = styled.div({
  fontSize: '12px',
  display: 'grid',
  gap: '0rem',
  color: '#aaa',
  textAlign: 'center',
  marginTop: '-5rem',
  paddingBottom: '5rem',
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
        {MyWorkHeader.content1}
        {MyWorkHeader.content2}
        {MyWorkHeader.content3}
      </Content>
    </>
  )
}
 
export default Aboutpage