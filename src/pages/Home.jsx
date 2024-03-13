import CardCpt from "../components/Card";
import Mission from "../components/Mission";
import { Link } from "react-router-dom";
import fleurs2024 from "../assets/images/fleurs2024.jpg";
const Home = () => {
  return (
    <div className="">
      <section className="bg-gradient-to-tr from-indigo-100 via-purple-50 to-teal-100 dark:from-black dark:via-gray-900 dark:to-black dark:text-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full shadow-2xl">
              <img
                alt=""
                src={fleurs2024}
                className="absolute inset-0 h-full w-full object-cover "
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl text-center">
                Fleurs Eveillées Madagascar
              </h2>

              <p className="mt-4 text-gray-600 dark:text-slate-200">
                Nous sommes une association à but non lucratif de jeunes
                bénévoles qui répond à un contexte de délinquances, violences ,
                décrochages scolaire ,grossesses précoces et d’entrepreneuriat
                des jeunes dans tous les milieux défavorisés de Madagascar.
              </p>
              <div className="flex justify-center">
                <Link
                  to="don"
                  className="mt-8   rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400 flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                    <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                    <path d="m2 16 6 6" />
                    <circle cx="16" cy="9" r="2.9" />
                    <circle cx="6" cy="5" r="3" />
                  </svg>
                  Faire un Don
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-20 px-10 bg-gradient-to-r from-transparent via-slate-100 to-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center lg:py-32">
            <CardCpt />
          </div>
          <div className="hidden md:block">
            <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
              <img src="https://ucarecdn.com/6a461b3b-d0d9-41c5-8d53-9542eaec4be1/379991501_697976652370521_87416033472943335_n.jpg" />
              <img src="https://ucarecdn.com/240c84dc-06a9-4215-a7d0-a08980ca90d0/428663288_794704089364443_4371765461367499783_n.jpg" />
              <img src="https://ucarecdn.com/a869e2e2-b337-471c-af3f-46d55ab9c925/293925524_555193896307577_3190252578071650627_n.jpg" />
              <img src="https://source.unsplash.com/wfalq01jJuU" />
              <img src="https://source.unsplash.com/rMHNK_skwwU" />
              <img src="https://ucarecdn.com/44e6746c-4c1b-42fe-b532-4e1c06b29a60/290576935_541618390998461_1944208382539668004_n.jpg" />
              <img src="https://source.unsplash.com/nCUZ5BYBL_o" />
              <img src="https://source.unsplash.com/3u4fzMQZhjc" />
              <img src="https://ucarecdn.com/51f8c77c-6d46-49ee-a4fb-5ac789e119c2/362264889_668860691948784_5759050224946212956_n.jpg" />
              <img src="https://ucarecdn.com/ba6b11ae-d6db-4f11-a5d2-4a77740e8c3e/viv01.jpg" />
              <img src="https://ucarecdn.com/22643de2-1547-4745-8efb-a181c63a799e/374917353_689489396552580_6850989698149604694_n.jpg" />
            </div>
          </div>
        </div>
      </div>

      <Mission />
      <div className=" w-full px-10 py-24">
        <h4 className="text-xl font-bold lg:text-3xl px-8">Nos Activités</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
          <div className="">
            <h4 className="text-xl font-bold lg:text-3xl my-10">
              Projet “Femme éveillées”
            </h4>
            <p className="text-center lg:text-start">
              Une formation professionnelle dans l’objectif principal est de
              donner une autonomie financière aux femmes. Cette activité
              consiste à former 5 femmes par quartier, donnant une totalité de
              690 femmes dans 138 quariers dans toutr la Province.{" "}
            </p>
          </div>
          <div className="">
            <img
              src="https://ucarecdn.com/ffa84594-f8ac-4d0c-af43-fd1f7efe3b1f/291980167_550384146788552_1607992717069793645_n.jpg"
              className="w-full max-w-full rounded shadow-2xl max-h-full m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
