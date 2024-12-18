'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/app/lib/supabaseClient';
import styled from '@emotion/styled';

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

const Container = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
});

const HeaderImage = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
});

const Content = styled.div({
  display: 'grid',
  padding: '2rem',
  gap: '0rem',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '50%',
    margin: 'auto',
  },
});

const Load = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
});

const ContentData = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
});

const ContentDataTitle = styled.div({
  fontSize: '20px',
  fontFamily: '"Keania One", sans-serif',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '30px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '35px',
  },
});

const ContentDataDesc = styled.div({
  fontSize: '15px',
  color: 'hsl(0 0% 100% / 0)',
  backgroundImage: 'linear-gradient(90deg, gray, white)',
  backgroundClip: 'text',
  marginBottom: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '20px',
  },
});

const ProTypeImage = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
});

const WebContentContainer = styled.div({
  display: 'grid',
  gap: '1rem',
  marginBottom: '3rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    gridTemplateColumns: '1fr 1fr',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
});

const WebImage = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
});

const WebButtom = styled.div({
  padding: '0.5rem',
  background: 'white',
  margin: 'auto',
  textAlign: 'center',
  color: 'black',
  borderRadius: '50px',
  ':hover': {
    backgroundImage: 'linear-gradient(180deg, white, gray)',
  },
  fontFamily: '"Keania One", sans-serif',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '40%',
    right: '0',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
});

export default function ImageAndDataPage({ params }) {
  const [fetchError, setFetchError] = useState(null);
  const [selectedLW, setSelectedLW] = useState(null);
  const [selectedHeaderImage, setSelectedHeaderImage] = useState(null);
  const [selectedPrototypeImage, setSelectedPrototypeImage] = useState(null);
  const [selectedWebImage, setSelectedWebImage] = useState(null);
  const [loadingLW, setLoadingLW] = useState(false);

  useEffect(() => {
    console.log("Fetching data for:", params.id); 
    const imageBaseName = params.id.split('.')[0].trim();

    const fetchData = async () => {
      try {
        // Hent _HEADER billedet
        const { data: headerData, error: headerError } = await supabase.storage
          .from('LochmannWeb')
          .download(`${imageBaseName}_HEADER`);

        if (headerError) throw headerError;
        setSelectedHeaderImage(URL.createObjectURL(headerData));

        // Hent _PROTOTYPE billedet
        const { data: prototypeData, error: prototypeError } = await supabase.storage
          .from('LochmannWeb')
          .download(`${imageBaseName}_PROTOTYPE`);

        if (prototypeError) throw prototypeError;
        console.error('Prototype error:', prototypeError); 
        setSelectedPrototypeImage(URL.createObjectURL(prototypeData));

        // Hent _WEB billedet
        const { data: webData, error: webError } = await supabase.storage
          .from('LochmannWeb')
          .download(`${imageBaseName}_WEB`);

        if (webError) throw webError;
        console.error('Web error:', webError);
        setSelectedWebImage(URL.createObjectURL(webData));

        // Hent LW data
        setLoadingLW(true);
        const { data: lwData, error: lwError } = await supabase
          .from('LW')
          .select('*')
          .ilike('title', `%${imageBaseName}%`);

        if (lwError) throw lwError;

        if (lwData && lwData.length > 0) {
          setSelectedLW(lwData[0]);
        } else {
          console.warn('Ingen LW data fundet for:', imageBaseName);
          setSelectedLW(null);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setFetchError('Kunne ikke hente data.');
      } finally {
        setLoadingLW(false);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <>
    <Container>
      <HeaderImage>
        {selectedHeaderImage ? (
          <img src={selectedHeaderImage} alt={`${params.id}_HEADER`} width={2000} />
        ) : (
          <div>Loading header image...</div>
        )}
      </HeaderImage>

      <Content>
        {loadingLW ? (
          <Load>Loading data...</Load>
        ) : selectedLW ? (
          <>
            <ContentData>
              <ContentDataTitle>{selectedLW.formål}</ContentDataTitle>
              <ContentDataDesc>{selectedLW.formåldescription}</ContentDataDesc>
            </ContentData>
  
            <div>
              <ContentDataTitle>{selectedLW.design}</ContentDataTitle>
              <ContentDataDesc>{selectedLW.designdescription}</ContentDataDesc>

              <div>
                <div>
                  <ContentDataTitle>{selectedLW.designcolor}</ContentDataTitle>
                  <ContentDataDesc>{selectedLW.designcolorcontent}</ContentDataDesc>
                </div>

                <div>
                  <ContentDataTitle>{selectedLW.designnavigation}</ContentDataTitle>
                  <ContentDataDesc>{selectedLW.designnavigationcontent}</ContentDataDesc>
                </div>

                <div>
                  <ContentDataTitle>{selectedLW.designsektioner}</ContentDataTitle>
                  <div>
                    <ContentDataDesc>{selectedLW.designsektionhome}</ContentDataDesc>
                    <ContentDataDesc>{selectedLW.designsektionabout}</ContentDataDesc>
                    <ContentDataDesc>{selectedLW.designsektioninfo}</ContentDataDesc>
                    <ContentDataDesc>{selectedLW.designsektionkontakt}</ContentDataDesc>
                  </div>
                </div>

                <div>
                  <ContentDataTitle>{selectedLW.designimages}</ContentDataTitle>
                  <ContentDataDesc>{selectedLW.designimagescontent}</ContentDataDesc>
                </div>

                <div>
                  <ContentDataTitle>{selectedLW.designtypo}</ContentDataTitle>
                  <ContentDataDesc>{selectedLW.designtypocontent}</ContentDataDesc>
                </div>

                <div>
                  <ContentDataTitle>{selectedLW.designicon}</ContentDataTitle>
                  <ContentDataDesc>{selectedLW.designiconcontent}</ContentDataDesc>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>No LW data available.</div>
        )}
  
        <ProTypeImage>
          {selectedPrototypeImage ? (
            <img src={selectedPrototypeImage} className='m-auto' alt={`${params.id}_PROTOTYPE`} width={1000} />
          ) : (
            <div>Loading prototype image...</div>
          )}
        </ProTypeImage>
  
        <WebContentContainer>
          <ContentData>
            {selectedLW && (
              <div>
                <ContentDataTitle>{selectedLW.websitename}</ContentDataTitle>
                <ContentDataDesc>{selectedLW.websitedescription}</ContentDataDesc>
              </div>
            )}
          </ContentData>
  
          <WebImage>
            {selectedWebImage ? (
              <img src={selectedWebImage} alt={`${params.id}_WEB`} width={800} />
            ) : (
              <div>Loading web image...</div>
            )}
          </WebImage>
        </WebContentContainer>

        <WebButtom>
            {selectedLW && (
                <a href={selectedLW.websitelink} target="_blank" rel="noopener noreferrer">{selectedLW.websitebutton}</a>
            )}
        </WebButtom>
      </Content>
    </Container>
  </>
  );
}
