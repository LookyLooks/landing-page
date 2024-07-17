'use client';

import React, { useState } from "react";

interface Props {
    className?: string;
    children: React.ReactNode;
}

export const NavbarMenuItem: React.FC<Props> = ({ className = "", children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`inline-flex flex-col items-start gap-1 relative cursor-pointer ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="font-text-meta w-fit mt-[-1.00px] tracking-[var(--text-meta-letter-spacing)] text-[length:var(--text-meta-font-size)] [font-style:var(--text-meta-font-style)] text-textdefault font-[number:var(--text-meta-font-weight)] leading-[var(--text-meta-line-height)] whitespace-nowrap relative">
                {children}
            </div>
            <div
                className={`h-px bg-textdefault transition-all duration-200 ${
                    isHovered ? "w-full" : "w-0"
                }`}
            />
        </div>
    );
};