import React from "react";
import { Logo } from "./Logo";
import { NavbarRight } from "./NavbarRight";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  return (
    <header className={`inline-flex items-center gap-8 px-6 py-3 bg-backgroundmuted border border-solid border-borderdefault ${className}`}>
      <Logo />
      <NavbarRight />
    </header>
  );
};