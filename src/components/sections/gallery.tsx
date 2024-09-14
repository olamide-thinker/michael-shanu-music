"use client";
import Image from 'next/image';
import React from 'react';
import { LargeImage } from '../Comps/largeImage';
import { Button } from '../ui/button';
import { ref, listAll, getDownloadURL } from 'firebase/storage'; // Import necessary Firebase functions
import { storage } from '@/firebaseConnection/firebase';
import { Skeleton } from '../ui/skeleton';

const Gallery = () => {
  const [openImage, setOpenImage] = React.useState<string | null>(null); // State to track the open image URL
  const [imageUrls, setImageUrls] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [overlayClass, setOverlayClass] = React.useState<string>(''); // State to manage animation class


  React.useEffect(() => {
    async function fetchImageUrls() {
      try {
        // Reference to the folder in Firebase Storage
        const folderRef = ref(storage, '/Michael Shanu Music/galleryImage');
        
        // List all items in the folder
        const result = await listAll(folderRef);
        
        // Get URLs for each file in the folder
        const urls: string[] = await Promise.all(
          result.items.map((itemRef) => getDownloadURL(itemRef))
        );
        
        console.log(urls); // Check the array of image URLs
        setImageUrls(urls); // Update state with image URLs
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }finally{
        setLoading(false);
      }
    }

    fetchImageUrls();
  }, []);

  React.useEffect(() => {
    if (openImage) {
      // Add animation class when the image overlay is mounted
      setOverlayClass('zoom-out-animation');
    }
  }, [openImage]);

  return (
    <div className='p-8'>
      <h2 className='font-bold font-Rokkitt text-4xl'>Photo Gallery</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-8 w-full'>
      {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className='w-full min-w-[300px] h-[400px] rounded-2xl' /> // Show skeletons while loading
            ))
          : imageUrls.map((url, i) => (
          <div key={i} onClick={() => setOpenImage(url)}>
            <Image
              className='h-[400px] object-cover hover:border-2 border-white grayscale hover:grayscale-0 rounded-2xl'
              src={url} alt={`Image ${i + 1}`} width={500} height={500} />
          </div>
        ))}
      </div>

      {/* Overlay image */}
      {openImage && (
        <div
        onClick={() => setOpenImage(null)}
        className={`h-screen w-full bg-transparent/40 backdrop-blur-sm flex items-center justify-center fixed z-50 top-0 left-0 ${overlayClass}`}

        >
          
          <Button
            onClick={() => setOpenImage(null)}
            className='absolute right-4 top-4 z-50 '
          >
            Close
          </Button>
          <LargeImage img={openImage} />
        </div>
      )}
    </div>
  );
}

export default Gallery;
