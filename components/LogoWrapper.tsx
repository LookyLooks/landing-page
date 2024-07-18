import React from "react";
import Image from "next/image";

export const LogoWrapper: React.FC = () => {
    const logos = [
        { src: "/logo1.svg", width: 99, height: 24 },
        { src: "/logo2.svg", width: 80, height: 24 },
        { src: "/logo3.svg", width: 52, height: 24 },
        { src: "/logo4.svg", width: 80, height: 24 },
        { src: "/logo5.svg", width: 80, height: 24 },
        { src: "/logo6.svg", width: 35, height: 24 },
    ];

    return (
        <div className="flex items-center justify-between w-full h-[35px]">
            {logos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center">
                    <Image
                        src={logo.src}
                        alt={`Logo ${index + 1}`}
                        width={logo.width}
                        height={logo.height}
                    />
                </div>
            ))}
        </div>
    );
};