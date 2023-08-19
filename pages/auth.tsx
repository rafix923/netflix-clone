import Input from "@/components/input";
import axios from "axios";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

const Auth = () => {
  const router = useRouter();
  const [userIdent, setUserIdent] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Função para alternar entre os modos de "login" e "register"
  // A função utiliza o hook useCallback para melhorar a performance e evitar recriações desnecessárias da função durante as renderizações.
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-auto">
      <div className="bg-black h-full w-full  lg:bg-opacity-50">
        <nav className="px-8 py-4">
          <Image
            src="/images/logo.png"
            alt="Logo da Netflix com letras de cor vermelho"
            width={185}
            height={12}
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-4 self-center mt-2 rounded-md">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Entrar" : "Assine agora"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Nome do usuário"
                  id="name"
                  onChange={(event: any) => setName(event.target.value)}
                  value={name}
                />
              )}
              {variant !== "login" && (
                <>
                  <Input
                    label="Email"
                    id="email"
                    onChange={(event: any) => setEmail(event.target.value)}
                    value={email}
                  />
                  <Input
                    label="Senha"
                    id="password"
                    onChange={(event: any) => setPassword(event.target.value)}
                    value={password}
                  />
                </>
              )}
              {variant === "login" && (
                <>
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
                </>
              )}
            </div>
            <button
              style={{ backgroundColor: "rgb(229, 9, 20)" }}
              className="w-full py-3 rounded-md mt-10 text-white font-semibold text-lg"
              type="submit"
              onClick={variant === "login" ? login : register}
            >
              {variant === "login" ? "Entrar" : "Criar Conta"}
            </button>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox"
                className="mr-2 my-4 rounded bg-red-500"
              />
              <div className="flex gap-24">
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
