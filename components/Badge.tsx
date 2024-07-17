import React from "react";
import Image from "next/image";

interface BadgeProps {
    style: "primary" | "secondary" | "default";
    size: "default" | "x-small" | "small";
    className?: string;
    icon: string;
}

export const Badge: React.FC<BadgeProps> = ({
    style,
    size,
    className = "",
    icon = "/ph_twitter_logo_light.svg",
}) => {
    const getSizeClasses = () => {
        switch (size) {
            case "small":
                return "w-[38px] h-[38px]";
            case "x-small":
                return style === "secondary" ? "w-8 h-8" : "w-[30px] h-[30px]";
            case "default":
                return style === "default" ? "w-[46px] h-[46px]" : "w-11 h-11";
            default:
                return "w-[46px] h-[46px]";
        }
    };

    const getStyleClasses = () => {
        switch (style) {
            case "primary":
                return "bg-backgroundprimary px-3 py-1.5 gap-2.5";
            case "secondary":
                return "bg-backgroundsecondary px-3 py-2 gap-8";
            case "default":
                return "bg-backgroundmuted px-3 py-2 gap-8 border border-solid border-borderdefault backdrop-blur-[30px] backdrop-brightness-[100%]";
            default:
                return "";
        }
    };

    return (
        <div
            className={`flex items-center justify-center relative rounded-[500px] ${getSizeClasses()} ${getStyleClasses()} ${className}`}
        >
            <Image 
                src={icon}
                alt="Badge Icon"
                width={20}
                height={20}
            />
        </div>
    );
};