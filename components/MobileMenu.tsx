import React from "react";
import { MobileMenuProps } from "@/models/MobileMenuProps";

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) return null;
  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 fle">
      <ul className="flex flex-col gap-4">
        <li className="px-3 text-center text-white hover:underline">Inicio</li>
        <li className="px-3 text-center text-white hover:underline">Séries</li>
        <li className="px-3 text-center text-white hover:underline">Filmes</li>
        <li className="px-3 text-center text-white hover:underline">
          Bombando
        </li>
        <li className="px-3 text-center text-white hover:underline">
          Minha lista
        </li>
        <li className="px-3 text-center text-white hover:underline">
          Navegar por idiomas
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
