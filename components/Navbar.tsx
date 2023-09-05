import Image from "next/image";

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
          width={300}
          height={300}
          className="text-white"
        />
      </div>
      <h1>Navbar Component</h1>
    </nav>
  );
};
export default Navbar;
