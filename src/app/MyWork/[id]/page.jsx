'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/app/lib/supabaseClient';

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
    <div>
      {/* HEADER billedet */}
      <div>
        {selectedHeaderImage ? (
          <img src={selectedHeaderImage} alt={`${params.id}_HEADER`} width={2000} />
        ) : (
          <div>Loading header image...</div>
        )}
      </div>

    <div className='p-20'>
      {/* Fejlbesked */}
      {fetchError && (
        <div className="error-message">
          <p>{fetchError}</p>
        </div>
      )}

      {/* LW data */}
      {loadingLW ? (
        <div>Loading data...</div>
      ) : selectedLW ? (
        <>
          <div>
            <p><strong>{selectedLW.formål}</strong></p>
            <p>{selectedLW.formåldescription}</p>
          </div>

          <div>
            <p><strong>{selectedLW.design}</strong></p>
            <p>{selectedLW.designdescription}</p>
          </div>
        </>
      ) : (
        <div>No LW data available.</div>
      )}

      {/* PROTOTYPE billedet */}
      <div>
        {selectedPrototypeImage ? (
          <img src={selectedPrototypeImage} className='m-auto' alt={`${params.id}_PROTOTYPE`} width={1000} />
        ) : (
          <div>Loading prototype image...</div>
        )}
      </div>

      <div className='lg:flex'>
        {/* Websitename og websitedescription */}
        <div>
          {selectedLW && (
            <div>
              <h3>{selectedLW.websitename}</h3>
              <p>{selectedLW.websitedescription}</p>
            </div>
          )}
        </div>

        {/* WEB billedet */}
        <div>
          {selectedWebImage ? (
            <img src={selectedWebImage} alt={`${params.id}_WEB`} width={800} />
          ) : (
            <div>Loading web image...</div>
          )}
        </div>
      </div>
    </div>
    </div>
  </>
  );
}
