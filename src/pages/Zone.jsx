import { SectionHeader } from "../components/SectionHeader";
import data from "../assets/data/data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Aperture, Pickaxe, CloudSun, Construction } from "lucide-react";
const Zone = () => {
  const [zone, setZone] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (data) {
      const resp = data.filter((item) => item.id === id);
      setZone(resp);
    }
  }, []);

  return (
    <div>
      <SectionHeader
        title={`Fleurs Eveillées ${zone[0]?.name}`}
        texta={zone[0]?.description}
        image={zone[0]?.logo}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 px-4 lg:px-10 gap-8 py-8">
        <div className="order-last lg:order-first">
          <h2 className="text-xl sm:text-3xl font-bold  flex justify-center items-center">
            <Aperture color="rgb(251 146 60)" size={28} />
            bjectifs
          </h2>
          <ul className="list-disc list-inside px-4 lg:px-10 space-y-4 mt-8 ">
            {zone[0]?.objectifs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src="https://ucarecdn.com/3631796a-2658-4487-8303-e47188e4746b/Scopebro.png"
            alt="az"
            className="w-40 -m-[50px] mt-3 sm:m-0 sm:block sm:w-96 rounded-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-4 lg:px-10 gap-8 py-8">
        <div className="order-last ">
          <h2 className="text-xl sm:text-3xl font-bold  flex justify-center items-center">
            <Pickaxe color="rgb(251 146 60)" size={28} />
            activitées
          </h2>
          <ul className="list-disc list-inside px-4 lg:px-10 space-y-4 mt-8 ">
            {zone[0]?.activities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src="https://ucarecdn.com/bc7c4595-c084-484d-a7a4-92400108d830/Taskbro.png"
            alt="az"
            className="w-40 -m-[50px] mt-3 sm:m-0 sm:block md:w-96 rounded-lg "
          />
        </div>
      </div>
      {zone[0]?.perspectives.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 px-4 lg:px-10 gap-8 py-8">
          <div className="order-last lg:order-first">
            <h2 className="text-xl sm:text-3xl font-bold  flex justify-center items-center">
              <CloudSun color="rgb(251 146 60)" size={28} />
              perspectives
            </h2>
            <ul className="list-disc list-inside px-4 lg:px-10 space-y-4 mt-8 ">
              {zone[0]?.perspectives.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src="https://ucarecdn.com/26611bf2-7c0e-45ea-8f8b-3f3f3f835481/20824336_6365294removebgpreview.png"
              alt="az"
              className="w-40 -m-[50px] mt-3 sm:m-0 sm:block sm:w-96 rounded-lg "
            />
          </div>
        </div>
      ) : (
        ""
      )}

      {zone[0]?.perspectives.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 px-4 lg:px-10 gap-8 py-8">
          <div className="order-last ">
            <h2 className="text-xl sm:text-3xl font-bold  flex justify-center items-center">
              <Construction color="rgb(251 146 60)" size={28} />
              blocage
            </h2>
            <p>{zone[0]?.blocage}</p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://ucarecdn.com/b63d7c47-0948-4f84-bc13-554010ecfb8c/Stormbro.png"
              alt="az"
              className="w-40 -m-[50px] mt-3 sm:m-0 sm:block sm:w-96 rounded-lg"
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 px-4 lg:px-10 gap-8 py-8">
          <div className="order-last lg:order-first">
            <h2 className="text-xl sm:text-3xl font-bold  flex justify-center items-center">
              <Construction color="rgb(251 146 60)" size={28} />
              blocage
            </h2>
            <p>{zone[0]?.blocage}</p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://ucarecdn.com/b63d7c47-0948-4f84-bc13-554010ecfb8c/Stormbro.png"
              alt="az"
              className="w-40 -m-[50px] mt-3  sm:m-0 sm:block sm:w-96 rounded-lg"
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 px-4 lg:px-10 gap-8 py-8">
        <div className="order-last lg:order-first">
          <h2 className="text-xl sm:text-3xl font-bold flex justify-center items-center">
            <Construction color="rgb(251 146 60)" size={28} />
            Coordonnées
          </h2>

          {zone[0]?.coordata.map((item) => (
            <div key={item.name} className="py-4 lg:px-8 px-4">
              <h4 className="text-lg font-medium text-gray-800 dark:text-slate-100">
                {item.function}{" "}
              </h4>
              <p className="dark:text-slate-200">
                {item.lastName} {item.name}
              </p>
              <p className="dark:text-slate-200">{item.tel}</p>
              <p className="dark:text-slate-200">{item.mail}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <img
            src="https://ucarecdn.com/ed013b21-d51b-4004-80df-b234ea698799/indoorplantsbro.png"
            alt="az"
            className="w-40 -m-[50px]  sm:m-0 sm:block sm:w-96 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Zone;
