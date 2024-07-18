import React from "react";
import { Card } from "./Card";

export const CardGrid: React.FC = () => {
    const cardData = [
        {
            number: "01",
            title: "WEB DESIGN",
            description: "Creating visually stunning and user-friendly websites that captivate your audience and drive engagement.",
            buttonText: "ABOUT WEBDESIGN"
        },
        {
            number: "02",
            title: "DEVELOPMENT",
            description: "Building robust and scalable web applications that enhance your online presence.",
            buttonText: "ABOUT FRAMER"
        },
        {
            number: "03",
            title: "CONTENT & SEO",
            description: "Crafting compelling content and implementing SEO strategies to boost your website.",
            buttonText: "ABOUT SEO"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    number={card.number}
                    title={card.title}
                    description={card.description}
                    buttonText={card.buttonText}
                />
            ))}
        </div>
    );
};