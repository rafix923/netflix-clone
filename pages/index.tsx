import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <>
      <div className="bg-black h-screen w-screen text-red-600">
        <h1>Hello World!</h1>
        <button className="bg-red-600 text-black h-10 w-60">Sair</button>
      </div>
    </>
  );
}
