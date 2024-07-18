import React from "react";

interface WorkInfoBarProps {
    title: string;
    category: string;
    className?: string;
}

export const WorkInfoBar: React.FC<WorkInfoBarProps> = ({ title, category, className = "" }) => {
    return (
        <div className={`flex w-full max-w-[620px] items-center justify-between px-4 py-3 bg-[#ffffff0d] border border-solid border-[#ffffff26] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] ${className}`}>
            <div className="relative w-fit mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-textdefault text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] whitespace-nowrap [font-style:var(--heading-h4-font-style)]">
                {title}
            </div>
            <div className="relative w-fit font-text-meta font-[number:var(--text-meta-font-weight)] text-textdefault text-[length:var(--text-meta-font-size)] tracking-[var(--text-meta-letter-spacing)] leading-[var(--text-meta-line-height)] whitespace-nowrap [font-style:var(--text-meta-font-style)]">
                {category}
            </div>
        </div>
    );
};