import CardList from "../components/CardList";
import { SectionHeader } from "../components/SectionHeader";
import data from "../assets/data/data";
import { useState } from "react";

const Association = () => {
  const [datas] = useState(data);

  const content = {
    image:
      "https://ucarecdn.com/ea33992e-5874-4704-ae18-37cd02ee9903/Sanstitre1.jpg",
    title: "Les Associations Fleurs éveillées ",
    texta:
      " L'Association Fleurs éveillées Madagascar est une organisation à but non lucratif qui œuvre sans relâche pour promouvoir l'équité et la justice sociale à Madagascar. Face aux nombreuses inégalités qui persistent dans le pays, que ce soit sur le plan économique, éducatif ou des droits fondamentaux, l'association se donne pour mission d'apporter son soutien aux populations les plus vulnérables et marginalisées. Ses actions visent à améliorer leurs conditions de vie et à leur offrir de meilleures perspectives d'avenir. Grâce à des programmes ciblés dans les domaines de la formation, de la création d'activités génératrices de revenus ou de la défense des droits, l'association ambitionne de réduire les écarts de développement et de favoriser l'inclusion de tous les citoyens malgaches. Mouvement de terrain engagé, Fleurs éveillées Madagascar se bat pour faire reculer la pauvreté et toute forme de discrimination à travers l'île.",
  };
  return (
    <div>
      <SectionHeader
        image={content.image}
        title={content.title}
        texta={content.texta}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  gap-6 xl:gap-8 px-4 lg:px-10 py-16">
        {datas.map((item) => (
          <div key={item.id} className="flex justify-center">
            <CardList
              city={item.city}
              name={item.name}
              logo={item.logo}
              id={item.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Association;
