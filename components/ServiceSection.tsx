import React from "react";
import { CardContainer } from "./CardContainer";

export const ServiceSection: React.FC = () => {
    return (
        <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1920px] mx-auto">
                <CardContainer />
            </div>
        </section>
    );
};