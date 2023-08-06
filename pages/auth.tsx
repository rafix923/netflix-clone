const Auth = () => {
  return (
    <div className="w-full h-screen bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full bg-opacity-50">
        <nav className="px-12 py-5">
          <img
            src="/images/logo.png"
            alt="Logo Netflix com letras de cor vermelho"
            className="h-12"
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Entrar</h2>
            <div className="flex flex-col gap-4">{/* Form */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
