"use client";

import React, { useState } from 'react';
import AbstractHeader from '@splinetool/react-spline/next';
import styled from '@emotion/styled';

const breakpoints = {
    md: '768px', 
    lg: '1024px', 
};

const SplineContainer = styled.div({
    width: '100%',
    height: '100vh',
    marginTop: '0rem',
    [`@media (min-width: ${breakpoints.md})`]: {
        marginLeft: 'auto',
        display: 'flex',
    },
});

const SplineFigure = () => {
    const [isSplineActive] = useState(false);

    return (
        <SplineContainer
            style={{ overflow: isSplineActive ? 'auto' : 'hidden' }}
        >
            <AbstractHeader 
                className="Figur"
                scene="https://prod.spline.design/ORfI7lJVujRKigJo/scene.splinecode"
                style={{ pointerEvents: isSplineActive ? 'auto' : 'none' }}
            />
        </SplineContainer>
    );
};

export default SplineFigure;
