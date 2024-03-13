export default function Mission() {
  return (
    <>
      {/* Features Section: Boxes with Icons */}
      <div className="bg-gradient-to-tr from-indigo-100 via-purple-50 to-teal-100 dark:from-indigo-900 dark:via-purple-700 dark:to-teal-900 dark:text-gray-100">
        <p className="px-4 lg:px-20 pt-10 text-xl sm:text-3xl font-bold">
          Nos missions
        </p>
        <div className="container mx-auto px-4 py-6 lg:px-8 lg:pt-10 lg:pb-20 xl:max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-white bg-white p-5 shadow-sm transition hover:border-warning dark:border-gray-800 dark:bg-gray-800 dark:shadow-none dark:hover:border-yellow-400 md:p-7 xl:p-10">
              <svg
                className="hi-outline hi-cube mb-5 inline-block sm:size-12 size-8  text-warning dark:text-warning"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
                <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                <path d="m2 15 6 6" />
                <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
              </svg>
              <p className="leading-relaxed text-gray-600 dark:text-slate-200">
                Faire dimunier le taux de grossesse précoce en offrant des
                outils de prévention et une éducation sexuelle, et faciliter
                l’accès à la santé et au planning familial.
              </p>
            </div>
            <div className="rounded-lg border border-white bg-white p-5 shadow-sm transition hover:border-warning dark:border-gray-800 dark:bg-gray-800 dark:shadow-none dark:hover:border-yellow-400 md:p-7 xl:p-10">
              <svg
                className="hi-outline hi-cube mb-5 inline-block sm:size-12 size-8  text-warning dark:text-warning"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                <path d="m21 3 1 11h-2" />
                <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                <path d="M3 4h8" />
              </svg>

              <p className="leading-relaxed text-gray-600 dark:text-slate-200">
                Participer à la promotion des jeunes en les intégrant dans
                l’entrepreunariat.
              </p>
            </div>
            <div className="rounded-lg border border-white bg-white p-5 shadow-sm transition hover:border-warning dark:border-gray-800 dark:bg-gray-800 dark:shadow-none dark:hover:border-yellow-400 sm:col-span-2 md:p-7 lg:col-span-1 xl:p-10">
              <svg
                className="hi-outline hi-cube mb-5 inline-block sm:size-12 size-8  text-warning dark:text-warning"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                <path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7" />
              </svg>
              <p className="leading-relaxed text-gray-600 dark:text-slate-200">
                Eradiquer toutes formes de violances. Contribuer à la
                consolidation de la paix et à l’éducation environnementale.
              </p>
            </div>
          </div>
        </div>

        <p className="px-4 lg:px-20 pt-10 text-xl sm:text-3xl font-bold">
          Nos visions
        </p>
        <div className="container mx-auto px-4 py-6 lg:px-8 lg:pt-10 lg:pb-20 xl:max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
            <div className="rounded-lg border border-white bg-white p-5 shadow-sm transition hover:border-warning dark:border-gray-800 dark:bg-gray-800 dark:shadow-none dark:hover:border-yellow-400 md:p-7 xl:p-10">
              <svg
                className="hi-outline hi-cube mb-5 inline-block sm:size-12 size-8 text-warning dark:text-warning"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                <path d="M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z" />
              </svg>
              <p className="leading-relaxed text-gray-600 dark:text-slate-200">
                Acorder une égalité de chance aux jeunes pour avoir un meilleur
                avenir surtout ceux dans le bas quartiers.
              </p>
            </div>
            <div className="rounded-lg border border-white bg-white p-5 shadow-sm transition hover:border-warning dark:border-gray-800 dark:bg-gray-800 dark:shadow-none dark:hover:border-yellow-400 md:p-7 xl:p-10">
              <svg
                className="hi-outline hi-cube mb-5 inline-block sm:size-12 size-8  text-warning dark:text-warning"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
              </svg>

              <p className="leading-relaxed text-gray-600 dark:text-slate-200">
                Promouvoir et faciliter l’intégration sociale et économique des
                femmes.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* END Features Section: Boxes with Icons */}
    </>
  );
}
