import React from "react";
import { Button } from "./Button";
import { NavbarMenu } from "./NavbarMenu";

export const NavbarRight: React.FC = () => {
    return (
        <div className="flex items-center gap-4">
            <div className="relative z-10"> {/* Added relative and z-10 */}
                <NavbarMenu />
            </div>
            <div className="relative z-10"> {/* Added relative */}
                <Button variant="primary" showArrow={false}>
                    LET'S TALK
                </Button>
            </div>
        </div>
    );
};