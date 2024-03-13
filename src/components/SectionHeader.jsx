export const SectionHeader = ({ image, texta, title }) => {
  return (
    <section className="bg-gradient-to-tr from-indigo-100 via-purple-50 to-teal-100 dark:from-black dark:via-gray-900 dark:to-black dark:text-gray-100 gradient-mask-b-90">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src={image}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>

            <p className="mt-4 text-gray-600 dark:text-slate-100 text-justify">
              {texta}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
