"use client";

import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import styled from '@emotion/styled';

const breakpoints = {
    md: '768px', // tablet
    lg: '1024px', // desktop
};

const SplineContainer = styled.div({
    width: '50%',
    height: '100vh',
    marginTop: '0rem',
    [`@media (min-width: ${breakpoints.md})`]: {
        marginLeft: 'auto',
        display: 'flex',
        marginRight: '11rem',
    },
});

const SplineFigure = () => {
    const [isSplineActive, setIsSplineActive] = useState(false);

    // Håndter "mousedown" for at aktivere figuren
    const handleMouseDown = () => {
        setIsSplineActive(true);
    };

    // Håndter "mouseup" for at deaktivere figuren
    const handleMouseUp = () => {
        setIsSplineActive(false);
    };

    return (
        <SplineContainer
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            style={{ overflow: isSplineActive ? 'auto' : 'hidden' }}
        >
            <Spline 
                className="Logo"
                scene="https://prod.spline.design/kV7kZrZejl6JXN3C/scene.splinecode"
                style={{ pointerEvents: isSplineActive ? 'auto' : 'none' }}
            />
        </SplineContainer>
    );
};

export default SplineFigure;

