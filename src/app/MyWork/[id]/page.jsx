'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/app/lib/supabaseClient';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

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
    marginTop: '-8rem',
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

const ContentDatasSubheader = styled.div({
  fontSize: '20px',
  fontFamily: '"Keania One", sans-serif',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '25px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '25px',
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
    marginTop: '2rem',
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
  width: '100%',
  ':hover': {
    backgroundImage: 'linear-gradient(180deg, white, gray)',
  },
  fontFamily: '"Keania One", sans-serif',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '40%',
    right: '0',
    marginBottom: '2rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
  },
});

export default function ImageAndDataPage({ params }) {
  const [fetchError, setFetchError] = useState(null);
  const [selectedLW, setSelectedLW] = useState(null);
  const [selectedHeaderImage, setSelectedHeaderImage] = useState(null);
  const [selectedMobileHeaderImage, setSelectedMobileHeaderImage] = useState(null);
  const [selectedPrototypeImage, setSelectedPrototypeImage] = useState(null);
  const [selectedWebImage, setSelectedWebImage] = useState(null);
  const [loadingLW, setLoadingLW] = useState(false);

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
  
        // Hent _MOBIL billedet
        const { data: mobileHeaderData, error: mobileHeaderError } = await supabase.storage
          .from('LochmannWeb')
          .download(`${imageBaseName}_MOBIL`);
  
        if (mobileHeaderError) throw mobileHeaderError;
        setSelectedMobileHeaderImage(URL.createObjectURL(mobileHeaderData));
  
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
    {(!isMobile && 
        <HeaderImage>
          {selectedHeaderImage && (
            <img src={selectedHeaderImage} alt={`${params.id}_HEADER`} width={2000} />
          )}
        </HeaderImage>
      )}

      {(isMobile && 
        <HeaderImage>
          {selectedMobileHeaderImage && (
            <img src={selectedMobileHeaderImage} alt={`${params.id}_MOBIL`} width={2000} />
          )}
        </HeaderImage>
      )}

      <Content>
        {selectedLW && (
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
                  <ContentDatasSubheader>{selectedLW.designcolor}</ContentDatasSubheader>
                  <ContentDataDesc>{selectedLW.designcolorcontent}</ContentDataDesc>
                </div>

                <div>
                  <ContentDatasSubheader>{selectedLW.designnavigation}</ContentDatasSubheader>
                  <ContentDataDesc>{selectedLW.designnavigationcontent}</ContentDataDesc>
                </div>

                <div>
                  <ContentDatasSubheader>{selectedLW.designsektioner}</ContentDatasSubheader>
                  <div>
                    <ContentDataDesc>{selectedLW.designsektionhome}</ContentDataDesc>
                    <ContentDataDesc>{selectedLW.designsektionabout}</ContentDataDesc>
                    <ContentDataDesc>{selectedLW.designsektioninfo}</ContentDataDesc>
                    <ContentDataDesc>{selectedLW.designsektionkontakt}</ContentDataDesc>
                  </div>
                </div>

                <div>
                  <ContentDatasSubheader>{selectedLW.designimages}</ContentDatasSubheader>
                  <ContentDataDesc>{selectedLW.designimagescontent}</ContentDataDesc>
                </div>

                <div>
                  <ContentDatasSubheader>{selectedLW.designtypo}</ContentDatasSubheader>
                  <ContentDataDesc>{selectedLW.designtypocontent}</ContentDataDesc>
                </div>

                <div>
                  <ContentDatasSubheader>{selectedLW.designicon}</ContentDatasSubheader>
                  <ContentDataDesc>{selectedLW.designiconcontent}</ContentDataDesc>
                </div>
              </div>
            </div>
          </>
        )}
  
        <ProTypeImage>
          {selectedPrototypeImage ? (
            <img src={selectedPrototypeImage} className='m-auto' alt={`${params.id}_PROTOTYPE`} width={1000} />
          ) : (
            <div>Loading...</div>
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
            {selectedWebImage && (
              <img src={selectedWebImage} alt={`${params.id}_WEB`} width={800} />
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
