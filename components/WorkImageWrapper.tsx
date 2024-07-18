import React from "react";
import { Badge } from "./Badge";
import Image from "next/image";
import { WorkInfoBar } from "./WorkInfoBar";

interface WorkImageWrapperProps {
    imageSrc: string;
    title: string;
    category: string;
    className?: string;
}

export const WorkImageWrapper: React.FC<WorkImageWrapperProps> = ({ 
    imageSrc, 
    title, 
    category,
    className = ""
}) => {
    return (
        <div className={`relative w-full aspect-[4/3] border border-solid border-borderdefault overflow-hidden ${className}`}>
            <Image
                src={imageSrc}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="z-0"
            />
            <div className="absolute inset-0 bg-[url(/noise.jpg)] bg-[100%_100%] z-10">
                <WorkInfoBar 
                    title={title}
                    category={category}
                    className="absolute bottom-8 left-8"
                />
                <Badge
                    className="!absolute !left-1/2 !top-1/2 !transform !-translate-x-1/2 !-translate-y-1/2"
                    icon="/ph_arrow-up-right-light.svg"
                    size="default"
                    style="default"
                />
            </div>
        </div>
    );
};