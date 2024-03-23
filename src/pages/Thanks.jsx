const Thanks = () => {
  return (
    <div className="sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 py-4 md:py-8">
        <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
          <img
            src="https://ucarecdn.com/f4a73fd9-38fb-4015-86d4-70f106d6f5b3/432236047_419953117354135_4056228899176807043_n.jpg"
            loading="lazy"
            alt="Photo by Fakurian Design"
            className="absolute inset-0 h-full w-full object-cover object-bottom"
          />

          <div className="absolute inset-0 bg-gray-500 mix-blend-multiply"></div>

          <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
            <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
              Misaotra nisoratra anarana tompoko
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Thanks;
