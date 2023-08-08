import Input from "@/components/input";
import Image from "next/image";
import { useState } from "react";

const Auth = () => {
  const [userIdent, setUserIdent] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-auto">
      <div className="bg-black w-full h-full bg-opacity-50">
        <nav className="px-12 py-5">
          <Image
            src="/images/logo.png"
            alt="Logo da Netflix com letras de cor vermelho"
            width={200}
            height={12}
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Entrar</h2>
            <div>
              <Input
                label="Email ou número de telefone"
                id="userIdent"
                onChange={(event: any) => setUserIdent(event.target.value)}
                value={userIdent}
              />
              <Input
                label="Senha"
                id="password"
                onChange={(event: any) => setPassword(event.target.value)}
                value={password}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
