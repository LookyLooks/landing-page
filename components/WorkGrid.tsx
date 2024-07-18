import React from "react";
import { WorkImageWrapper } from "./WorkImageWrapper";

interface WorkItem {
    imageSrc: string;
    title: string;
    category: string;
}

const workItems: WorkItem[] = [
    {
        imageSrc: "/image.png",
        title: "Space",
        category: "WEBDESIGN"
    },
    {
        imageSrc: "/image-2.png",
        title: "Nova",
        category: "WEBDESIGN"
    },
    // Add more work items as needed
];

export const WorkGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workItems.map((item, index) => (
                <WorkImageWrapper
                    key={index}
                    imageSrc={item.imageSrc}
                    title={item.title}
                    category={item.category}
                    className="w-full h-[513px]"
                />
            ))}
        </div>
    );
};