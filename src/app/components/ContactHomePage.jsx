
import React from 'react';
import { ContactFormularData } from '../data/ContactFormular'
import { HomePageContactFormular } from '../data/ContactFormular'
import { useForm, ValidationError } from '@formspree/react';
import "@fontsource/keania-one";
import styled from '@emotion/styled';

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

const Header = styled.div({
    [`@media (min-width: ${breakpoints.md})`]: {
        textAlign: 'center',
    }
  });

const Title = styled.div({
    fontFamily: '"Keania One", sans-serif',
    fontSize: '40px',
    lineHeight: '3rem',
    backgroundImage: 'linear-gradient(90deg, #fff, #A100FF)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    backgroundClip: 'text',
    [`@media (min-width: ${breakpoints.md})`]: {
        fontSize: '40px',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
        fontSize: '40px',
    }
  });

const Content = styled.div({
    fontSize: '20px',
    backgroundImage: 'linear-gradient(90deg, gray, white)',
    backgroundClip: 'text',
    [`@media (min-width: ${breakpoints.md})`]: {
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
    }
  });

function ContactForm() {
  const [state, handleSubmit] = useForm("mldrldzl");
  if (state.succeeded) {
      return <p className='font-keania md:text-2xl m-auto md:r-44 md:mt-48'>Looking forward to work with you!</p>;
  }
  return (
    <form className='grid gap-4 md:mt-0 p-8 md:p-20 lg:m-auto' onSubmit={handleSubmit}>

       <Header>
        <Title>{HomePageContactFormular.title}</Title>
        <Content>{HomePageContactFormular.subheader}</Content>
       </Header>

      <div className='grid'>
        <label htmlFor="text" className='font-keania'>
          Company name
        </label>
        <input
          id="text"
          type="text" 
          name="text"
          className='bg-input border-2 border-gray text-white text-xs p-2'
          placeholder='If the website exist'
        />
        <ValidationError 
          prefix="Text" 
          field="text"
          errors={state.errors}
        />
      </div>

      <div className='grid'>
        <label htmlFor="text" className='font-keania'>
          Full name
        </label>
        <input
          id="text"
          type="text" 
          name="text"
          className='bg-input border-2 border-gray text-white text-xs p-2'
          placeholder='John James'
        />
        <ValidationError 
          prefix="Text" 
          field="text"
          errors={state.errors}
        />
      </div>

      <div className='grid'>
        <label htmlFor="tel" className='font-keania'>
          Phone number
        </label>
        <input
          id="tel"
          type="tel" 
          name="tel"
          className='bg-input border-2 border-gray text-white text-xs p-2'
          placeholder='+XX XX XX XX XX'
        />
        <ValidationError 
          prefix="Tel" 
          field="tel"
          errors={state.errors}
        />
      </div>

      <div className='grid'>
        <label htmlFor="email" className='font-keania' >
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className='bg-input border-2 border-gray text-white text-xs p-2'
          placeholder='example@example.com'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>

      <div className='grid'>
        <label htmlFor="message" className='font-keania' >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className='bg-input border-2 border-gray text-white text-xs p-2'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>

      <div className='m-auto md:m-auto lg:m-auto'>
        <button type="submit" className='font-keania bg-white hover:bg-gray hover:text-white text-black p-2 pl-32 pr-32 lg:pl-20 lg:pr-20 mt-3' disabled={state.submitting}>
          Send
        </button>
      </div>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
