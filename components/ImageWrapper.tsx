import React from "react";
import Image from "next/image";

export const ImageWrapper: React.FC = () => {
    return (
        <div className="w-full max-w-[880px] h-auto aspect-w-880 aspect-h-769 mix-blend-lighten relative">
            <Image
                src="/Image.jpeg"
                alt="Descriptive Alt Text"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
            />
        </div>
    );
};