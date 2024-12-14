

import React, { useState } from 'react';
import Spline from '@splinetool/react-spline/next';
import styled from '@emotion/styled';

const breakpoints = {
    md: '768px', 
    lg: '1024px', 
};

const SplineContainer = styled.div({
    marginTop: '0rem',
    width: '100%',
    height: '100vh',
    [`@media (min-width: ${breakpoints.md})`]: {
        display: 'flex',
        right: '0',
    },
});

const AbstractHeader = () => {
    const [isSplineActive] = useState(false);

    return (
        <SplineContainer
            style={{ overflow: isSplineActive ? 'auto' : 'hidden' }}
        >
            <Spline 
                className="Figur"
                scene="https://prod.spline.design/azvPzC0sRGaBdBYW/scene.splinecode" 
                style={{ pointerEvents: isSplineActive ? 'auto' : 'none' }}
            />
        </SplineContainer>
    );
};

export default AbstractHeader;
