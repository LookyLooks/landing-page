import React from "react";
import { ImageWrapper } from "./ImageWrapper";

interface Props {
    className?: string;
}

export const SectionHero: React.FC<Props> = ({ className = "" }) => {
    return (
        <section className={`flex justify-center items-center w-full -mt-48 ${className}`}>
            <ImageWrapper />
        </section>
    );
};