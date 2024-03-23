const About = () => {
  return (
    <div>
      <div className="sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-4 py-2 md:py-6">
          <section className="min-h-14 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-4 shadow-lg md:py-10 xl:py-14">
            <img
              src="https://ucarecdn.com/f4a73fd9-38fb-4015-86d4-70f106d6f5b3/432236047_419953117354135_4056228899176807043_n.jpg"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gray-500 mix-blend-multiply"></div>

            <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
              <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
                A propos
              </h1>
            </div>
          </section>
        </div>
      </div>

      <section className="bg-white">
        <main className="flex items-center justify-center px-6 py-4 sm:px-8 ">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className=" text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Cours fanomanana ireo BACC sy BEPC
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Ezaka ataon'ny{" "}
              <span className="text-blue-400 font-medium">iorenala</span> mba
              hofanomezana fampianarana maimaimpoana ireo mpianatra hanala
              fanadinana Bacc sy Bepc eto Morondava ny.
            </p>
          </div>
        </main>
      </section>
    </div>
  );
};

export default About;
