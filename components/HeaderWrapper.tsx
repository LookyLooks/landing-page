import React from "react";
import { Header } from "./Header";

export const HeaderWrapper: React.FC = () => {
    return (
        <div className="flex flex-col w-full max-w-screen-2xl items-center gap-2.5 pt-8 pb-0 px-10 relative">
            <Header className="!flex-[0_0_auto]" />
        </div>
    );
};