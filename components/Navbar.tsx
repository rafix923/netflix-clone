import { useCallback, useState } from "react";
import NavbarItem from "@/components/NavbarItem";
import MobileMenu from "@/components/MobileMenu";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import Image from "next/image";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className="
        px-4
        md:px-16
        py6
        flex
        flex-row
        items-center
        transition
        duration-500
        bg-zinc-900
        bg-opacity-90
      "
      >
        <Image
          src="/images/logo.png"
          alt="Logo da Netflix com letras de cor vermelha"
          width={80}
          height={200}
          className="text-white"
        />
        <div
          className="
        flex-row
        ml-8
        gap-7
        lg:flex
        hidden
        "
        >
          <NavbarItem label="Início" />
          <NavbarItem label="Séries" />
          <NavbarItem label="Filmes" />
          <NavbarItem label="Bombando" />
          <NavbarItem label="Minha lista" />
          <NavbarItem label="Navegar por idiomas" />
        </div>

        {/* Navbar para telas mobiles */}
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Navegar</p>
          <BsChevronDown className="text-white transiction" />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          <div className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <Image
                src="/images/default-blue.png"
                alt="Avatar do usuário logado"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
