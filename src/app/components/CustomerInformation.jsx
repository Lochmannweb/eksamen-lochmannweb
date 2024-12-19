"use client"

import React from 'react';
import { CustomerInformationsData } from '../data/CustomerInformationsData';
import styled from '@emotion/styled';
import "@fontsource/keania-one";

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

const Container = styled.div({
    padding: '2rem',
    paddingBottom: '5rem',
    position: 'relative',
    [`@media (min-width: ${breakpoints.md})`]: {
      padding: '0rem',
      paddingBottom: '2rem',
      display: 'flex',
      justifyContent: 'center',
      gap: '9rem',
      width: '50%',
      margin: 'auto',
    },
  });

const Title = styled.div({
    fontSize: '15px',
    fontFamily: '"Keania One", sans-serif',
  });

const LinksContainer = styled.div ({
    lineHeight: '1.2rem',
    display: 'grid',
    marginBottom: '10px',
    color: 'grey',
  });


const CustomerInformation = () => {

  return (
    <>
      <Container> 
        <div>
          <Title>{CustomerInformationsData.contact.title}</Title>
            <LinksContainer>
             <a className='md:text-xs' href="https://www.instagram.com/lochmannweb" prefetch={false} >{CustomerInformationsData.contact.content2}</a>
             <a className='md:text-xs' href='/Contact'>{CustomerInformationsData.contact.content}</a>
            </LinksContainer>
        </div>
  
        <div>
          <Title>{CustomerInformationsData.about.title}</Title>
            <LinksContainer>
               <a className='md:text-xs' href='/About'>{CustomerInformationsData.about.content}</a>
               <a className='md:text-xs' href='/MyWork'>{CustomerInformationsData.about.content3}</a>
               <a className='md:text-xs' href='/MyWork'>{CustomerInformationsData.about.content4}</a>
               {/* <a className='md:text-xs' href='/'>{CustomerInformationsData.about.content2}</a> */}
            </LinksContainer>
        </div>
  {/*  */}
        {/* <div> */}
          {/* <Title>{CustomerInformationsData.Ressourcer.title}</Title> */}
            {/* <LinksContainer> */}
              {/* <a className='md:text-xs' href='/' >{CustomerInformationsData.Ressourcer.content2}</a> */}
              {/* <a className='md:text-xs' href='/Ressourcer'>{CustomerInformationsData.Ressourcer.content3}</a> */}
              {/* <a className='md:text-xs' href='/Ressourcer'>{CustomerInformationsData.Ressourcer.content4}</a> */}
              {/* <a className='md:text-xs' href='/Ressourcer'>{CustomerInformationsData.Ressourcer.content}</a> */}
            {/* </LinksContainer> */}
        {/* </div> */}
  {/*  */}
        {/* <div> */}
          {/* <Title>{CustomerInformationsData.Services.title}</Title> */}
          {/* <LinksContainer> */}
              {/* <a className='md:text-xs' href='/About'>{CustomerInformationsData.Services.content}</a> */}
              {/* <a className='md:text-xs' href='/Services'>{CustomerInformationsData.Services.content2}</a> */}
              {/* <a className='md:text-xs' href='/Services'>{CustomerInformationsData.Services.content3}</a> */}
              {/* <a className='md:text-xs' href='/Services'>{CustomerInformationsData.Services.content4}</a> */}
          {/* </LinksContainer> */}
        {/* </div> */}
      </Container>
    </>
  );
}

export default CustomerInformation;
