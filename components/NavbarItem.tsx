import React from "react";
import { NavbarItemProps } from "@/models/NavbarItemProps";

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transiction">
      {label}
    </div>
  );
};

export default NavbarItem;
