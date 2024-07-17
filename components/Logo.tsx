import React from "react";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`inline-flex items-center gap-4 relative ${className}`}>
      <div className="relative w-fit mt-[-1.00px] font-light text-textdefault text-[28px] tracking-[1.00px] leading-[33.6px] whitespace-nowrap">
        logo.
      </div>
    </div>
  );
};