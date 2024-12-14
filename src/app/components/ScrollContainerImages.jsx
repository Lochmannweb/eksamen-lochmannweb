import React from 'react'
import { RecentWorkData } from '../data/MyWorkData';
import styled from '@emotion/styled';

const breakpoints = {
  md: '768px', 
  lg: '1024px',
};

const ScrollContainer = styled.div({
    display: 'flex',
    gap: '20px',
    padding: '1rem',
    position: 'relative', // Sørg for, at animation er indenfor Container
    animation: 'scrollLeft 100s linear infinite',
    '&:hover': {
      animationPlayState: 'paused',
    },
    '@keyframes scrollLeft': {
      '100%': {
        transform: 'translateX(0%)',
      },
      '100%': {
        transform: 'translateX(-400%)',
      },
    },
  });

const ProjectImage = styled.img({
  borderRadius: '20px',
  [`@media (min-width: ${breakpoints.md})`]: {
    height: '200px',
  },
});

function ScollContainerImages() {
  return (
    <>
        <ScrollContainer>
            {RecentWorkData.projects.map((project, index) => (
              <ProjectImage
                key={index}
                src={project.image}
                alt={`Project ${index}`}
              />
            ))}
            {RecentWorkData.projects.map((project, index) => (
              <ProjectImage
                key={`${index}-duplicate`}
                src={project.image}
                alt={`Project duplicate ${index}`}
              />
            ))}
            {RecentWorkData.projects.map((project, index) => (
              <ProjectImage
                key={`${index}-duplicate`}
                src={project.image}
                alt={`Project duplicate ${index}`}
              />
            ))}
        </ScrollContainer>
    </>
  )
}

export default ScollContainerImages