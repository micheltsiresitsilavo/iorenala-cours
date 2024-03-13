import logo from "../assets/images/logo.jpg";
import { SectionHeader } from "../components/SectionHeader";
import associations from "../assets/data/associations";

const About = () => {
  const data = {
    image: logo,
    title: "Qui sommes-nous?",
    texta:
      "L’Association Fleurs éveillées Madagascar est une association à but non lucratif créée en 2019 à Toamasina; légalement constittuée et enregistrée au niveau des instances administratives. Elle apporte sa part contributive au développement des concytoyens qui se voient marginalisées sur le plan social et économiques, et faisant face contre toute inégalité dans toutes ses formes.",
  };
  return (
    <div>
      <SectionHeader image={data.image} title={data.title} texta={data.texta} />
      <div className="grid grid-cols-1 sm:grid-cols-2 px-4 lg:px-10 gap-8 py-12">
        <div className="order-last lg:order-first">
          <h2 className="text-xl sm:text-3xl font-bold text-center">
            Nos visions
          </h2>
          <ul className="list-disc list-inside px-4 lg:px-10 space-y-4 mt-8 ">
            <li>
              Acorder une égalité de chance aux jeunes pour avoir un meilleur
              avenir surtout ceux dans le bas quartiers.
            </li>
            <li>
              Promouvoir et faciliter l’intégration sociale et économique des
              femmes,
            </li>
          </ul>
        </div>
        <div>
          <img
            src="https://ucarecdn.com/51f8c77c-6d46-49ee-a4fb-5ac789e119c2/362264889_668860691948784_5759050224946212956_n.jpg"
            alt="az"
            className="w-full object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-4 lg:px-10 gap-8 my-16 ">
        <div className="order-last">
          <h2 className="text-xl sm:text-3xl font-bold text-center">
            Nos missions
          </h2>
          <ul className="px-4 lg:px-10 space-y-4 mt-8 list-disc list-inside">
            <li>
              Faire dimunier le taux de grossesse précoce en offrant des outils
              de prévention et une éducation sexuelle, et faciliter l’accès à la
              santé et au planning familial.
            </li>
            <li>
              Participer à la promotion des jeunes en les intégrant dans
              l’entrepreunariat.
            </li>
            <li>Eradiquer toutes formes de violances.</li>
            <li>
              Contribuer à la consolidation de la paix et à l’éducation
              environnementale.
            </li>
          </ul>
        </div>
        <div>
          <img
            src="https://ucarecdn.com/c11d5055-84cb-432a-b6f9-de5c1fb83e42/363319652_669562465211940_965548441484541275_n.jpg"
            alt="az"
            className="w-full object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-4 lg:px-10 gap-8 my-16 ">
        <div className="order-last lg:order-first">
          <h2 className="text-xl sm:text-3xl font-bold text-center">
            Les activités réalisées
          </h2>
          <ul className="px-4 lg:px-10 space-y-4 mt-8 list-disc list-inside">
            <li>
              L’association a déjà entamé un projet à travers un de ses cebtres,
              une réalisation qui a tout de même été fructueuse. Cette activité
              consiste à former 5 femmes par quartier, donnant une totalité de
              690 femmes dans 138 quariers dans toutr la Province. Cette
              réalisation est connue sous le nom du “Projet Femme éveillées”, et
              donc une formation professionnelle dans l’objectif principal est
              de donner une autonomie financière aux femmes.
            </li>
            <li>
              Les activités de l’Association sont presque focalisées sur les
              Formations - Encadrement- Sensibilisations en vue d’une
              réinsertion. Activités génératrices de revenu « coupe et couture,
              pâtisserie » Action sociale communautaire (distribution de
              nourritures aux enfants sans abris)
            </li>
          </ul>
        </div>
        <div>
          <img
            src="https://ucarecdn.com/5a0c3a3e-d7d5-4d55-85e4-1c73be0c7d9a/410975413_750671860434333_2519688899532029756_n.jpg"
            alt="az"
            className="w-full object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-4 lg:px-10 gap-8 my-16 ">
        <div className="order-last">
          <h2 className="text-xl sm:text-3xl font-bold text-center">
            Nos domaines d’intervations
          </h2>
          <p className="mt-4">
            L’association intervient dans des domaines qui tendent à rendre
            l’équité et l’égalité. Mais cela n’est possible qu’en œuvrant dans
            certains domaines principaux tels que le renforcement de capacités,
            le reseautage féminin et la formation.
          </p>
          <div className="mt-4">
            <h3 className="text-xl font-semibold  mb-2">Zone d’intervation</h3>
            <p>
              L’association intervient surtaout dans les bas quartiers des
              grandes villes, notamment dans les zones où l’inégalité de tout
              genre apparait : violences, famine, maltraitance, insécurité,
              misère.
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://ucarecdn.com/3dd07fe7-fdc8-4a61-b8c1-7ce7b0505686/393404449_714251067409746_8262092405919746670_n.jpg"
            alt="az"
            className="w-full object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>

      <div className="mt-4  flex justify-center bg-gradient-to-tr from-indigo-100 via-purple-50 to-teal-100 dark:from-black dark:via-black dark:to-black dark:text-gray-100 py-12">
        <div className="">
          <h3 className="text-xl sm:text-3xl font-bold   text-center mb-2">
            Une association dynamique
          </h3>
          <p className="text-center">
            L’association présente dans grandes villes du pays:
          </p>
          <ul className="px-10 space-y-4 mt-4 list-disc  ">
            {associations?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
