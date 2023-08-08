import Input from "@/components/input";
import Image from "next/image";

const Auth = () => {
  return (
    <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-auto">
      <div className="bg-black w-full h-full bg-opacity-50">
        <nav className="px-12 py-5">
          <Image src="/images/logo.png" alt="" width={200} height={12} />
        </nav>
      </div>
    </div>
  );
};
export default Auth;
