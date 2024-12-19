import React from 'react'
import styled from '@emotion/styled';
import { FeedbackData } from '../data/FeedBackData';
import "@fontsource/keania-one";

const breakpoints = {
    md: '768px', 
    lg: '1024px',
  };

  const Container = styled.div({
    padding: '2rem',
    textAlign: 'center',
    marginTop: '3rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      paddingTop: '4rem',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      padding: '5rem',
      marginLeft: '24rem',
      marginRight: '24rem',
      marginTop: '3rem',
    },
  });

  const Title = styled.div({
    fontSize: '30px',
    fontFamily: '"Keania One", sans-serif',
    borderBottomColor: '#A100FF',
    borderWidth: 'thin',
    textAlign: 'start',
    borderRadius: '0px',
    marginBottom: '1rem',

    // Scroll text animation
    color: 'hsl(0 0% 100% / 0)',
    backgroundImage: 'linear-gradient(90deg, white, #A100FF)',
    backgroundSize: '50% 100%',
    backgroundRepeat: 'no-repeat',
    animation: 'scroll-reveal linear forwards',
    animationTimeline: 'view()',
    backgroundClip: 'text',
    [`@media (min-width: ${breakpoints.md})`]: {
      textAlign: 'center',
      borderColor: '#A100FF',
      borderRadius: '0px 100px',
      fontSize: '40px',
      marginTop: '0rem',
    },
  });

  const Subheader = styled.div({
    textAlign: 'start',  
    fontSize: '18px',
    color: 'hsl(0 0% 100% / 0)',
    backgroundImage: 'linear-gradient(90deg, gray, white)',
    backgroundClip: 'text',
    [`@media (min-width: ${breakpoints.md})`]: {
      textAlign: 'center',  
      fontSize: '20px',
      marginBottom: '3rem', 
    },
  });

  const Content = styled.div({
    color: 'white',
    display: 'grid',
    gap: '3rem',
    marginTop: '3rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      display: 'flex',
      justifySelf: 'center',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      justifyContent: 'center',
      gap: '10rem',
    },
  });
  
  const FeedBackContent = styled.div({
    display: 'grid',
    color: 'white',
    [`@media (min-width: ${breakpoints.md})`]: {
    },
  });

  const FeedBackContentTtitle = styled.div({
    color: 'hsl(0 0% 100% / 0)',
    backgroundImage: 'linear-gradient(90deg, white, #A100FF)',
    backgroundSize: '50% 100%',
    backgroundRepeat: 'no-repeat',
    animation: 'scroll-reveal linear forwards',
    animationTimeline: 'view()',
    backgroundClip: 'text',
    fontFamily: '"Keania One", sans-serif',
    textAlign: 'center',  
    fontSize: '20px',
    [`@media (min-width: ${breakpoints.md})`]: {
    },
  });

  const AniContent = styled.div({
    fontSize: '15px',
     backgroundImage: 'linear-gradient(90deg,  white, #A100FF)',
     backgroundClip: 'text',
     color: 'hsl(0 0% 100% / 0)',
     [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '15px',
    },
  })

function Feedback() {

  return (
    <>
      <Container>
        <div>
          <Title>{FeedbackData.Title}</Title>
          <Subheader>{FeedbackData.Subheader}</Subheader>
        </div>
        <Content>
          <FeedBackContent>
            <img className='m-auto' src="/settings.svg" alt="svg" width={50} />
            <FeedBackContentTtitle className=' md:text-xl md:mt-5'>{FeedbackData.Tech.title}</FeedBackContentTtitle> 
            <AniContent className='text-sm mt-2'>{FeedbackData.Tech.feedback}</AniContent>
          </FeedBackContent>

          <FeedBackContent>
            <img className='m-auto' src="/chat_1.svg" alt="svg" width={50} />
            <FeedBackContentTtitle className=' md:text-xl md:mt-5'>{FeedbackData.Feedback.title}</FeedBackContentTtitle>
            <AniContent  className='text-sm mt-2'>{FeedbackData.Feedback.feedback}</AniContent>
          </FeedBackContent>

          <FeedBackContent>
            <img className='m-auto' src="/lowest-price.svg" alt="svg" width={50} />
            <FeedBackContentTtitle className=' md:text-xl md:mt-5'>{FeedbackData.Offer.title}</FeedBackContentTtitle>
            <AniContent className='text-sm mt-2'>{FeedbackData.Offer.feedback}</AniContent>
          </FeedBackContent>
        </Content>
      </Container>
    </>
  )
}

export default Feedback