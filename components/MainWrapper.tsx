import React from "react";
import { SectionHero } from "./SectionHero";

export const MainWrapper: React.FC = () => {
    return (
        <div className="flex flex-col items-start w-full relative">
            <SectionHero
                buttonTextBadgeIcon="/ph_arrow-down-light.svg"
                className="!flex-[0_0_auto]"
            />
        </div>
    );
};