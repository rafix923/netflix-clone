import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Image from "next/image";

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

const Profiles = () => {
  return (
    <div className=" flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-white text-3xl md:text-6xl text-center">
          Quem está assistindo?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={() => {}}>
            <div className="group flex-row w-44 mx-auto">
              <div
                className="
              flex items-center 
              justify-center 
              h-44 
              w-44 
              rounded-md 
              border-2 
              border-transparent 
              group-hover:cursor-pointer 
              group-hover:border-white 
              overflow-hidden"
              >
                <Image
                  src="/images/default-blue.png"
                  alt="Logo da Netflix com letras de cor vermelha"
                  width={300}
                  height={300}
                  className="text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;