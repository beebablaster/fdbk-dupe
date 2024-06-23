import React from 'react'
import ImageComponent from 'next/image';

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  fallback?: React.ReactNode;
}

export const ImageLoader: React.FC<Props> = ({ src, alt, priority, fallback }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  React.useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageLoaded(true);
  }, [src]);
  return (
    <>
      {imageLoaded ? (
        <ImageComponent 
          fill 
          className="object-cover rounded-md" 
          src={src} 
          alt={alt}
          priority={priority}
        />
      ) : fallback}
    </>
  )
}
