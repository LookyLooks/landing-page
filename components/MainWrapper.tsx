import React from "react";
import { SectionHero } from "./SectionHero";
import { SectionLogos } from "./sectionLogos";

export const MainWrapper: React.FC = () => {
    return (
        <main className="flex flex-col items-start w-full relative">
            <SectionHero className="w-full" />
            <SectionLogos />
        </main>
    );
};