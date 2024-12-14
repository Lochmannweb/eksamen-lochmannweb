"use client";

import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import styled from '@emotion/styled';

const breakpoints = {
    md: '768px', 
    lg: '1024px', 
};

const SplineContainer = styled.div({
  display: 'grid',
    [`@media (min-width: ${breakpoints.md})`]: {
        marginTop: '-9rem',
        display: 'flex',
      },
      [`@media (min-width: ${breakpoints.lg})`]: {
        width: '75%',
        height: '70vh',
        marginTop: '-9rem',
      },
});




const SplineFigure = () => {
    const [isSplineActive] = useState(false);

    return (
        <SplineContainer style={{ overflow: isSplineActive ? 'auto' : 'hidden' }}>
          <div>
            <Spline 
                className="Logo"
                scene="https://prod.spline.design/7Qe44u7tFbOXv2dT/scene.splinecode"
                style={{ pointerEvents: isSplineActive ? 'auto' : 'none' }}
            />
          </div>

          <div className='mt-20'>
            <h1>Overskift</h1>
            <p>test</p>
          </div>
        </SplineContainer>
    );
};

export default SplineFigure;

