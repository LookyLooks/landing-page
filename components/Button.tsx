'use client';

import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "./Badge";

interface ButtonProps {
    variant: "primary" | "secondary" | "default" | "text";
    showArrow: boolean;
    className?: string;
    children: React.ReactNode;
    badgeIcon?: string;
    isCardButton?: boolean;  // New prop
}

export const Button: React.FC<ButtonProps> = ({ 
    variant, 
    showArrow, 
    className = "", 
    children,
    badgeIcon = "/ph_arrow-down-light.svg",
    isCardButton = false  // Default to false
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const getBackgroundColor = () => {
        if (isHovered) {
            return variant === "primary" ? "bg-backgroundprimary-hover" :
                   variant === "secondary" ? "bg-backgroundsecondary-hover" :
                   variant === "text" ? "" :
                   "bg-backgroundmuted-hover";
        }
        return variant === "primary" ? "bg-backgroundprimary" :
               variant === "secondary" ? "bg-backgroundsecondary" :
               variant === "text" ? "" :
               "bg-backgroundmuted";
    };

    const getTextColor = () => {
        return variant === "primary" ? "text-textinverse" : "text-textdefault";
    };

    const getBorderClasses = () => {
        return ["default", "primary"].includes(variant) ? "border border-solid border-borderdefault" : "";
    };

    const getArrowIcon = () => {
        if (isCardButton && isHovered) {
            return "/ph_arrow-right-light.svg";
        }
        switch (variant) {
            case "primary":
                return isHovered ? "/ph_arrow-right-dark.svg" : "/ph_arrow-up-right-dark.svg";
            case "secondary":
            case "default":
            case "text":
                return isHovered ? "/ph_arrow-right-light.svg" : "/ph_arrow-up-right-light.svg";
            default:
                return "/ph_arrow-up-right-light.svg"; // fallback
        }
    };

    if (variant === "text") {
        return (
            <button 
                className={`inline-flex items-center gap-4 relative ${className}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Badge
                    style="default"
                    size="default"
                    icon={isCardButton && isHovered ? "/ph_arrow-right-light.svg" : badgeIcon}
                    className={isHovered ? "bg-backgroundmuted-hover" : ""}
                />
                <span className="font-text-meta w-fit tracking-[var(--text-meta-letter-spacing)] [font-style:var(--text-meta-font-style)] text-[length:var(--text-meta-font-size)] text-textdefault font-[number:var(--text-meta-font-weight)] leading-[var(--text-meta-line-height)] whitespace-nowrap relative">
                    {children}
                </span>
            </button>
        );
    }

    return (
        <button
            className={`inline-flex items-center px-4 py-2.5 rounded-sm justify-center backdrop-blur-[30px] backdrop-brightness-[100%] relative
                ${getBackgroundColor()}
                ${getBorderClasses()}
                ${showArrow ? "gap-1" : "gap-2"}
                ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className={`font-text-meta w-fit mt-[-1.00px] tracking-[var(--text-meta-letter-spacing)] text-[length:var(--text-meta-font-size)] [font-style:var(--text-meta-font-style)] relative font-[number:var(--text-meta-font-weight)] whitespace-nowrap leading-[var(--text-meta-line-height)] ${getTextColor()}`}>
                {children}
            </span>
            {showArrow && (
                <Image 
                    src={getArrowIcon()}
                    alt="Arrow"
                    width={16}
                    height={16}
                />
            )}
        </button>
    );
};