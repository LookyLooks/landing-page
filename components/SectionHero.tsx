import React from "react";
import { Button } from "./Button";
import { ImageWrapper } from "./ImageWrapper";

interface Props {
    buttonTextBadgeIcon?: string;
    className?: string;
}

export const SectionHero: React.FC<Props> = ({
    buttonTextBadgeIcon = "/ph_arrow-down-light.svg",
    className = "",
}) => {
    return (
        <section className={`flex flex-col items-center justify-center gap-4 py-16 px-4 relative w-full max-w-screen-2xl mx-auto ${className}`}>
            <div className="relative w-full h-auto flex flex-col items-center">
                <div className="flex flex-col items-center gap-12">
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="text-center text-[160px] leading-[160px] text-textdefault font-light">
                            <span className="text-[#dac5a7] font-bold">
                                Web Designer <br />
                            </span>
                            <span className="italic text-[#dac5a7]">
                                &amp; Developer
                            </span>
                        </h1>
                        <p className="text-center text-textmuted text-[length:var(--text-xlarge-font-size)] leading-[var(--text-xlarge-line-height)]">
                            Premium web design, development, and SEO services to help your business stand out.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button
                            variant="text"
                            showArrow={false}
                            badgeIcon={buttonTextBadgeIcon}
                            className="!flex-[0_0_auto]"
                        >
                            SERVICES
                        </Button>
                    </div>
                </div>
                <ImageWrapper />
            </div>
        </section>
    );
};