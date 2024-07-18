'use client';

import React from "react";
import { NavbarMenuItem } from "./NavbarMenuItem";

export const NavbarMenu: React.FC = () => {
    const menuItems = ['HOME', 'ABOUT', 'SERVICES', 'CONTACT'];

    return (
        <nav className="flex items-center justify-center gap-5">
            {menuItems.map((item, index) => (
                <NavbarMenuItem key={index}>
                    {item}
                </NavbarMenuItem>
            ))}
        </nav>
    );
};