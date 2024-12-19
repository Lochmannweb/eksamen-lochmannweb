"use client"

import React from 'react'
import { ServicesData } from '../data/ServicesData'
import styled from '@emotion/styled';

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

const Container = styled.div({
  padding: '2rem',
  display: 'grid',
  gap: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {

  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    paddingTop: '10rem',
    paddingBottom: '7rem',
    width: '50%',
    justifySelf: 'center',
  }
});

const Title = styled.div({
  fontSize: '30px',
  fontFamily: '"Keania One", sans-serif',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '40px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  }
});

const Subheader = styled.div({
  fontSize: '20px',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  }
});

const Content = styled.div({
  fontSize: '15px',
  color: 'gray',
  // backgroundImage: 'linear-gradient(90deg, gray, white)',
  // WebkitBackgroundClip: 'text',
  // color: 'transparent',
  // backgroundClip: 'text',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  }
});


const Ressourcer = () => {

  return (
    <Container>
        <div>
            <Title >{ServicesData.title}</Title>
        </div>

        <div>
            <Subheader>{ServicesData.WebsiteDevelopment.title}</Subheader>
            <Content>{ServicesData.WebsiteDevelopment.content1}</Content> <br /> 
            <Content>{ServicesData.WebsiteDevelopment.content2}</Content> <br /> 
            <Content>{ServicesData.WebsiteDevelopment.content3}</Content>
        </div>

        <div>
            <Subheader>{ServicesData.WebsiteRedesign.title}</Subheader>
            <Content>{ServicesData.WebsiteRedesign.content1}</Content> <br /> 
            <Content>{ServicesData.WebsiteRedesign.content2}</Content>
        </div>

        <div>
            <Subheader>{ServicesData.UXUIDesign.title}</Subheader>
            <Content>{ServicesData.UXUIDesign.content1}</Content> <br /> 
            <Content>{ServicesData.UXUIDesign.content2}</Content>
        </div>

        <div>
            <Subheader>{ServicesData.SEOSpeedOptimization.title}</Subheader>
            <Content>{ServicesData.SEOSpeedOptimization.content1}</Content> <br />
            <Content>{ServicesData.SEOSpeedOptimization.content2}</Content>
        </div>

        {/* <div>
            <Subheader>{ServicesData.SupportMaintenance.title}</Subheader>
            <Content>{ServicesData.SupportMaintenance.content1}</Content> <br />
            <Content>{ServicesData.SupportMaintenance.content2}</Content>
        </div> */}
    </Container>
  )
}

export default Ressourcer