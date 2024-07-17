import React from "react";
import { Button } from "./Button";
import { NavbarMenu } from "./NavbarMenu";

export const NavbarRight: React.FC = () => {
    return (
        <div className="inline-flex items-center gap-4 relative">
            <NavbarMenu />
            <Button variant="primary" showArrow={false}>
                LET'S TALK
            </Button>
        </div>
    );
};