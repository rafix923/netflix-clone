import Input from "@/components/input";
import Image from "next/image";
import { useCallback, useState } from "react";

const Auth = () => {
  const [userIdent, setUserIdent] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

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
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 rounded-md">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Entrar" : "Assine agora"}
            </h2>
            <div className="flex flex-col gap-4">
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
            <button
              style={{ backgroundColor: "rgb(229, 9, 20)" }}
              className="w-full py-3 rounded-md mt-10 text-white font-semibold text-lg"
              type="submit"
              onClick={() => {}}
            >
              {variant === "login" ? "Entrar" : "Criar Conta"}
            </button>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox"
                className="mr-2 my-4 rounded bg-red-500"
              />
              <div className="flex gap-22">
                <label
                  htmlFor="checkbox"
                  style={{ color: "rgb(156, 153, 153)" }}
                >
                  Lembre-se de mim
                </label>
                <p style={{ color: "rgb(156, 153, 153)" }}>Precisa de ajuda?</p>
              </div>
            </div>
            <div className="mt-12">
              <p
                className="text-lg font-semibold"
                style={{ color: "rgb(115, 115, 115)" }}
              >
                Novo por aqui?
                <span
                  onClick={toggleVariant}
                  className="text-white ml-1 text-xl font-normal"
                >
                  <a href="#" className="hover:underline">
                    Assine agora
                    {/* Create an account */}
                  </a>
                </span>
                .
              </p>
              <p
                style={{ color: "rgb(115, 115, 115)" }}
                className=" mt-2.5 leading-tight pb-32"
              >
                Esta página é protegida pelo Google reCAPTCHA
                <br /> para garantir que você não é um robô.
                <a href="#" className="ml-1 text-blue-500 hover:underline">
                  Saiba mais.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
