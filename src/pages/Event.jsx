export default function Event() {
  return (
    <>
      {/* CTA Section: Simple With Illustration */}
      <div className="bg-white dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="flex items-center text-center lg:text-left">
            <div className="space-y-8">
              {/* Heading */}
              <div>
                <div className="mb-1 text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-500">
                  Event
                </div>
                <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
                  Plongez au cœur de l'action avec nos événements
                </h2>
                {/* <h3 className="text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                  Title
                </h3> */}
                <p className="text-xs md:text-sm bg-blue-100 text-blue-600 font-medium rounded-md p-4 md:border-3 border-2 border-blue-500 text-justify">
                  Pas d'événement pour le moment <br /> Vous êtes intéressé(e)
                  par nos événements à venir ? Malheureusement, aucun événement
                  n'est prévu dans l'immédiat. <br />
                  Ne vous inquiétez pas, cette page sera mise à jour dès que de
                  nouvelles dates seront fixées. N'hésitez pas à repasser nous
                  voir bientôt !
                  <br /> Merci de votre intérêt pour nos événements. À très vite
                  sur nos prochaines actualités !
                </p>
              </div>
              {/* END Heading */}

              {/* Action */}
              <div>
                <a
                  href="https://web.facebook.com/Fleurs.eveillees.fagnavota"
                  className="inline-flex items-center justify-center space-x-2 rounded-lg border border-blue-700 bg-blue-700 px-6 py-3 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
                >
                  <svg
                    className="hi-mini hi-plus-circle inline-block size-5 opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Visiter nos page facebook</span>
                </a>
              </div>
              {/* END Action */}
            </div>
          </div>
          <div className="flex items-center text-blue-500 justify-center">
            <img
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
      {/* END CTA Section: Simple With Illustration */}
    </>
  );
}
