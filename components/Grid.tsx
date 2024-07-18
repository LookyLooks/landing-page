import React from "react";
import { Button } from "./Button";

export const Grid: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-12 w-full max-w-[1015px] mx-auto">
            <div className="flex flex-col items-center gap-4 w-full">
                <p className="w-full text-center [font-family:'Satoshi-Light',Helvetica] font-normal text-textdefault text-[160px] leading-[160px]">
                    <span className="font-[number:var(--heading-xlarge-font-weight)] text-[#dac5a7] font-heading-xlarge [font-style:var(--heading-xlarge-font-style)] tracking-[var(--heading-xlarge-letter-spacing)] leading-[var(--heading-xlarge-line-height)] text-[length:var(--heading-xlarge-font-size)]">
                        Web Designer <br />
                    </span>
                    <span className="font-heading-xlarge-italic font-[number:var(--heading-xlarge-italic-font-weight)] [font-style:var(--heading-xlarge-italic-font-style)] text-[#dac5a7] tracking-[var(--heading-xlarge-italic-letter-spacing)] leading-[var(--heading-xlarge-italic-line-height)] text-[length:var(--heading-xlarge-italic-font-size)]">
                        &amp; Developer
                    </span>
                </p>
                <p className="w-full max-w-[600px] text-center font-text-xlarge font-[number:var(--text-xlarge-font-weight)] text-textmuted text-[length:var(--text-xlarge-font-size)] tracking-[var(--text-xlarge-letter-spacing)] leading-[var(--text-xlarge-line-height)] [font-style:var(--text-xlarge-font-style)]">
                    Premium web design, development, and SEO services to help your business stand out.
                </p>
            </div>
            <div className="flex items-center justify-center">
                <Button
                    variant="text"
                    showArrow={false}
                    badgeIcon="/ph_arrow-down-light.svg"
                    className="flex-[0_0_auto]"
                >
                    SERVICES
                </Button>
            </div>
        </div>
    );
};