'use client';

import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from 'styled-components';
// import { useTheme } from '@mui/material/styles';

const RoterneBanner = styled.div({
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: '100%',
    backgroundColor: '#f1f1f1',
    padding: '10px 0',
    boxSizing: 'border-box',
    position: 'relative',
});

const scrollAnimation = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const BannerContent = styled.div`
  display: inline-block;
  padding-left: 100%;
  animation: ${scrollAnimation} 10s linear infinite;
  font-size: 1.5em;
  color: #000;
`;

function App() {
//   const theme = useTheme();

  return (
    <>
    <RoterneBanner>
        <BannerContent>
            <p>JavaScript</p>
        </BannerContent>
        <BannerContent>
            <p>Typescript</p>
        </BannerContent>
    </RoterneBanner>
    </>
  );
}

export default App;
