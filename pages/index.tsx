import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
export default function Home() {
  const { data: user } = useCurrentUser();
  return (
    <>
      <div className="bg-black h-screen w-screen text-2xl text-white">
        <h1>Hello World!</h1>
        <p>Entrou como : {user?.name}</p>
        <button
          className="bg-red-600 text-black h-10 w-60"
          onClick={() => signOut()}
        >
          Sair
        </button>
      </div>
    </>
  );
}
