import React from "react";
import { Button } from "./Button";

interface CardProps {
    number: string;
    title: string;
    description: string;
    buttonText: string;
}

export const Card: React.FC<CardProps> = ({ number, title, description, buttonText }) => {
    return (
        <div className="flex flex-col items-start justify-center gap-8 p-12 relative bg-backgroundmuted border border-solid border-borderdefault">
            <div className="flex gap-2 self-stretch w-full flex-col items-start relative flex-[0_0_auto]">
                <div className="inline-flex gap-1 flex-col items-start relative flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-1.00px] font-text-meta font-[number:var(--text-meta-font-weight)] text-textmuted text-[length:var(--text-meta-font-size)] tracking-[var(--text-meta-letter-spacing)] leading-[var(--text-meta-line-height)] [font-style:var(--text-meta-font-style)]">
                        {number}
                    </div>
                    <div className="relative w-[349px] font-heading-h4-uppercase font-[number:var(--heading-h4-uppercase-font-weight)] text-textdefault text-[length:var(--heading-h4-uppercase-font-size)] tracking-[var(--heading-h4-uppercase-letter-spacing)] leading-[var(--heading-h4-uppercase-line-height)] [font-style:var(--heading-h4-uppercase-font-style)]">
                        {title}
                    </div>
                </div>
                <p className="relative self-stretch font-text-default font-[number:var(--text-default-font-weight)] text-textmuted text-[length:var(--text-default-font-size)] tracking-[var(--text-default-letter-spacing)] leading-[var(--text-default-line-height)] [font-style:var(--text-default-font-style)]">
                    {description}
                </p>
            </div>
            <Button
                variant="text"
                showArrow={false}
                badgeIcon="/ph_arrow-up-right-light.svg"
                className="!flex-[0_0_auto]"
                isCardButton={true}
            >
                {buttonText}
            </Button>
        </div>
    );
};