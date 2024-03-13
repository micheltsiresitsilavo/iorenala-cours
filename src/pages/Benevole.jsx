import { SectionHeader } from "../components/SectionHeader";
import { Download, Info, Pin } from "lucide-react";
import { Divider } from "@nextui-org/react";
const Benevole = () => {
  // Plongez au cœur de l'action avec nos événements
  // Pas d'événement pour le moment

  // Vous êtes intéressé(e) par nos événements à venir ? Malheureusement, aucun événement n'est prévu dans l'immédiat.

  // Ne vous inquiétez pas, cette page sera mise à jour dès que de nouvelles dates seront fixées. N'hésitez pas à repasser nous voir bientôt !

  // En attendant, vous pouvez toujours vous tenir au courant en vous abonnant à notre newsletter. Vous serez ainsi averti(e) dès qu'un nouvel événement sera programmé.

  // Merci de votre intérêt pour nos événements. À très vite sur nos prochaines actualités !

  //BENE

  // Vous pouvez également nous laisser vos coordonnées si vous souhaitez être tenu(e) informé(e) en priorité lorsque nous rechercherons des bénévoles. Il vous suffira de remplir le formulaire ci-dessous.

  return (
    <div>
      <SectionHeader
        image="https://ucarecdn.com/9d6476f5-9796-40c7-b825-4a76e9642a72/volunteershero.jpg"
        title="Bénévolat : un engagement citoyen et solidaire"
        texta="Le bénévolat est un acte profondément citoyen et solidaire. En devenant bénévole au sein de notre association, vous faites le choix de vous engager concrètement pour le bien commun et d'apporter votre aide à ceux qui en ont le plus besoin. Participer à l'amélioration de votre communauté et tendre la main aux plus démunis, voilà un engagement généreux qui contribue à créer une société plus juste, inclusive et fraternelle. "
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 px-4 lg:px-10 gap-8 py-12">
        <div className="order-last lg:order-first">
          <h2 className="text-xl sm:text-3xl font-bold text-center">
            Rejoignez notre équipe de bénévoles
          </h2>
          <p className="indent-10 text-justify leading-relaxed antialiased mt-8">
            Notre association a besoin de vous ! Nous sommes constamment à la
            recherche de bénévoles motivés et engagés pour rejoindre notre
            équipe et nous aider dans nos actions. Que vous ayez beaucoup ou peu
            de temps à consacrer, vos compétences et votre enthousiasme sont les
            bienvenus. En tant que bénévole chez nous, vous aurez l'opportunité
            de vous impliquer sur le terrain et de participer concrètement à nos
            projets, tout en rencontrant des personnes passionnées ayant la même
            envie d'agir que vous. Selon vos disponibilités et vos intérêts,
            vous pourrez par exemple distribuer des repas, tenir compagnie à des
            personnes isolées, animer des ateliers, organiser des collectes ou
            encore nous aider lors de nos événements. Alors si vous avez envie
            de donner un peu de votre temps libre pour une cause qui vous tient
            à cœur, rejoignez dès maintenant notre équipe de bénévoles !
            Ensemble, nous pouvons accomplir de grandes choses
          </p>
        </div>
        <div>
          <img
            src="https://ucarecdn.com/28d4d02d-1f05-478f-af5b-3a4e3e3559c2/perrygronelbLgFFlADrYunsplash.jpg"
            alt="az"
            className="w-full object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
      <Divider className="my-4" />
      <div className="my-14 mx-4">
        {/* <h4 className="text-xl md:text-2xl font-bold px-2">
          Appel au Bénévolat
        </h4> */}
        <div className="max-w-4xl mx-auto bg-blue-100 text-blue-600 font-medium rounded-md p-4 md:border-3 border-2 border-blue-500 text-justify relative">
          <p className="text-xs md:text-sm">
            Aucun appel au bénévolat ouvert pour le moment
            <br /> Nous n'avons malheureusement aucune opportunité de bénévolat
            à vous proposer en ce moment. Nos besoins en bénévoles sont
            actuellement couverts. <br />
            Cependant, n'hésitez pas à revenir consulter cette page
            régulièrement. De nouveaux appels au bénévolat seront publiés dès
            que des missions se présenteront à nouveau. <br />
            Nous remercions chaleureusement toutes les personnes intéressées
            pour leur engagement solidaire et leur patience. <br />
            Les bénévoles sont essentiels à la poursuite de nos actions sur le
            terrain. <br /> N'hésitez pas à également consulter la rubrique
            "Faire un don" si vous souhaitez nous soutenir d'une autre manière
            en attendant.
          </p>
          <div className="absolute -top-5 left-5 z-10">
            <Info
              color="rgb(79 130 239)"
              size={35}
              className="bg-blue-100 rounded-full"
            />
          </div>
        </div>

        {/* <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="border border-slate-400 rounded-lg p-2 grid grid-cols-1  gap-2 bg-gray-900 text-slate-100">
            <img
              src="http://localhost:5173/src/assets/images/logo.jpg"
              alt=""
              className="w-full  object-cover rounded-lg border border-gray-800 p-1 shadow-xl bg-gray-950 "
            />
            <div className="">
              <div className="flex items-center space-x-2 ">
                <div className="bg-orange-100 p-2 rounded-full">
                  <Pin color="rgb(249 115 22)" size={15} />
                </div>
                <h4 className="text-xl text-center font-bold antialiased">
                  Responsable techniue et financier
                </h4>
              </div>
              <p className="text-slate-200 border-l-3 border-l-orange-100 ml-4 px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, debitis! Molestiae quaerat iure corrupti voluptatem
                sapiente qui.{" "}
              </p>
              <div className="flex items-center space-x-1 cursor-pointer ml-2">
                <Download color="rgb(59 130 246)" size={17} />
                <span className="text-blue-500 font-medium">
                  Download le TDDR
                </span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Benevole;
