import React from "react";
import { CardGrid } from "./CardGrid";

export const CardContainer: React.FC = () => {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <CardGrid />
        </div>
    );
};