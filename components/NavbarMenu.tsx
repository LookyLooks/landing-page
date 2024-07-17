'use client';

import React from "react";
import { NavbarMenuItem } from "./NavbarMenuItem";

export const NavbarMenu: React.FC = () => {
    const menuItems = ['Home', 'About', 'Services', 'Contact'];

    return (
        <nav className="inline-flex items-center justify-center gap-5 relative">
            {menuItems.map((item, index) => (
                <NavbarMenuItem key={index} className="!flex-[0_0_auto]">
                    {item}
                </NavbarMenuItem>
            ))}
        </nav>
    );
};