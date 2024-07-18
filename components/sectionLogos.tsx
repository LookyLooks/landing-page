import React from "react";
import { LogoWrapper } from "./LogoWrapper";

export const SectionLogos: React.FC = () => {
    return (
        <section className="flex flex-col w-full items-center gap-8 pt-32 pb-0 px-16 relative">
            <div className="w-full max-w-[1200px]">
                <LogoWrapper />
            </div>
        </section>
    );
};