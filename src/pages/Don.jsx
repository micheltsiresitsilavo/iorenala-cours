const Don = () => {
  return (
    <>
      <section className="bg-gradient-to-tr from-indigo-100 via-purple-50 to-teal-100 dark:from-black dark:via-gray-900 dark:to-black dark:text-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="https://ucarecdn.com/21298d03-8685-47fb-a0b6-c59964292c34/hub_12_18_charityHero1200x900_REV_FRE.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                DEVENIR DONATEUR
              </h2>

              <p className="mt-4 text-gray-600 dark:text-slate-100">
                En devenant donateur et en aidant une cause qui vous tient à
                cœur, vous contribuez à un monde plus juste et solidaire.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className=" h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="https://ucarecdn.com/e7ce6d18-12f8-41ef-b108-5db2d05df6ce/donassociation800x5091.png"
              className=" inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-2 order-first lg:order-last">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Nous avons besoin de vous
            </h2>

            <p className="mt-4 text-gray-600 dark:text-slate-100 indent-10 text-justify leading-relaxed antialiased ">
              Notre association œuvre depuis de nombreuses années pour soutenir
              et renforcer les capacités des personnes les plus vulnérables de
              notre société. Nous aidons les femmes victimes de violences
              conjugales à retrouver confiance et autonomie. Nous accompagnons
              les enfants en difficulté scolaire pour leur redonner goût aux
              apprentissages. Nous formons les personnes en situation de
              handicap à de nouveaux métiers pour favoriser leur insertion
              professionnelle. Mais pour poursuivre et développer ces actions
              indispensables, nous avons besoin de vous. Votre don nous
              permettra d’aider encore plus de bénéficiaires, de mettre en place
              de nouveaux programmes et d’avoir un réel impact sur leurs vies.
              Ensemble, nous pouvons redonner espoir et perspectives d'avenir à
              celles et ceux qui en ont le plus besoin. Je compte sur votre
              générosité pour permettre à notre association de poursuivre sa
              mission d’intérêt général. Merci infiniment pour votre soutien.
              <br />
              Cordialement,
            </p>
            <div className="flex justify-center py-10">
              <img
                src="https://ucarecdn.com/ba393744-665e-4b7b-b433-2f8fa6df2f78/03472396931.png"
                alt="Devenir donateur"
                className="w-48 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Don;
