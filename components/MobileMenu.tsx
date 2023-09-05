import React from "react";
import { MobileMenuProps } from "@/models/MobileMenuProps";

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) return null;
  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 fle">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">
          Inicio
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
