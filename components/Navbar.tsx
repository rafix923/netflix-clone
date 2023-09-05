import Image from "next/image";
import NavbarItem from "@/components/NavbarItem";
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
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
        <div className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Navegar</p>
          <BsChevronDown className="text-white transiction" />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
