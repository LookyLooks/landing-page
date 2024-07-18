import React from "react";
import { Grid } from "./Grid";
import { Image } from "./Image";

export const ImageWrapper: React.FC = () => {
    return (
        <div className="relative w-full max-w-[1920px] h-[1218px] overflow-hidden">
            <Image className="absolute w-[880px] h-[769px] top-0 left-1/2 -translate-x-1/2" />
            <div className="absolute top-[685px] left-0 right-0 w-full">
                <Grid />
            </div>
        </div>
    );
};