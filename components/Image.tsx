import React from "react";

interface ImageProps {
  className?: string;
}

export const Image: React.FC<ImageProps> = ({ className = "" }) => {
    return (
        <div 
            className={`bg-[url(/image.jpeg)] bg-cover bg-center bg-no-repeat mix-blend-lighten ${className}`}
            role="img"
            aria-label="Web Designer and Developer"
        />
    );
};