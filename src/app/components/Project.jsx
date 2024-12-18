'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/app/lib/supabaseClient';
import Link from 'next/link';

export default function Gallery() {
  const [mainCGC, setMainCGC] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Fetch the list of images from Supabase storage
        const { data: imageData, error: imageError } = await supabase.storage.from('LochmannWeb').list('');

        if (imageError) {
          throw imageError;
        }

        // Filter out images that have `_angle` in their name to show only the main images
        const galleryImages = imageData.filter((image) =>
          image.name.indexOf('_PROTOTYPE') === -1 && image.name.indexOf('_WEB') === -1 && image.name.indexOf('_HEADER') === -1 && image.name.indexOf('_MOBIL') === -1 && image.name !== '.emptyFolderPlaceholder'
        );

        setMainCGC(galleryImages);

        // Fetch metadata for the main images
        const imageBaseNames = mainImages.map(image => image.name.split('.')[0]);
        const { data: metadata, error: metadataError } = await supabase
          .from('LW')
          .select('*')
          .in('image', imageBaseNames);

        if (metadataError) {
          throw metadataError;
        }

        // Combine metadata with images
        const mainImagesWithMetadata = mainImages.map(image => {
          const baseName = image.name.split('.')[0];
          const metadataItem = metadata.find(item => item.image === baseName);
          return {
            ...image,
            metadata: metadataItem || {}
          };
        });

        setMainCGC(mainImagesWithMetadata);
      } catch (error) {
        // setFetchError('Error fetching images or metadata');
        console.error('Error:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      {mainCGC.length > 0 ? (
        mainCGC.map((image) => (
          <div key={image.name}>
            <Link href={`/MyWork/${encodeURIComponent(image.name)}`}>
              <img
                src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/LochmannWeb/${image.name}`}
                alt={image.name}
                width={500}
                height={500}
              />
            </Link>
          </div>
        ))
      ) : (
        <p>No images found or error occurred.</p>
      )}
      {fetchError && <p className="text-red-500">{fetchError}</p>}
    </>
  );
}
