import Image from "next/image";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className="w-full fixed z-40">
      <div
        className="px-4
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
        hidden
        lg:flex
        "
        >
          <NavbarItem />
        </div>
      </div>
      <h1>Navbar Component</h1>
    </nav>
  );
};
export default Navbar;
