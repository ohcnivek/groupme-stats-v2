import React from "react";
import { NavBar } from "../navigation/NavBar";
import { NavItem } from "../navigation/NavItem";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="flex space-x-4 p-4 border border-b-gray px-8">
        <p className="font-semibold text-gray-700 pr-8">By @ohcnivek</p>
        <NavItem href="/docs">Docs</NavItem>
        <NavItem href="https://github.com/ohcnivek/groupme-stats-v2">
          Source
        </NavItem>
        <NavItem href="/">Home</NavItem>
      </div>
      {children}
      <footer className="p-4 absolute inset-x-0 bottom-0 h-16 rounded-lg items-center">
        <NavBar></NavBar>
      </footer>
    </div>
  );
};
