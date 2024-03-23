import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import localforage from "localforage";
import { useNavigate } from "react-router-dom";
import Tablaux from "../components/Tablaux";
import MyDocument from "./Pidief";
import { PDFDownloadLink } from "@react-pdf/renderer";
import pb from "../utils/pbClient";
const Admin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(false);
  const navigate = useNavigate();
  const logoutAction = async () => {
    await localforage.removeItem("pwd");
    navigate("/");
  };

  const getMpianatra = async () => {
    setIsLoading(true);
    try {
      const data = await pb.collection("students").getFullList();
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getMpianatra();
  }, []);

  if (isLoading) {
    return (
      <div className="">
        <p className="text-center">Chargement des données....</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-2 px-6">
      <div className="bg-blue-500 md:py-4 py-1 md:px-20 rounded-md flex justify-between px-2 mb-4">
        <h1 className="text-white font-medium text-md md:text-lg flex items-center gap-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="md:w-6 md:h-6 h-5 w-5"
          >
            <path d="M15.6 2.7a10 10 0 1 0 5.7 5.7" />
            <circle cx="12" cy="12" r="2" />
            <path d="M13.4 10.6 19 5" />
          </svg>
          Page d'Admin
        </h1>
        <Button
          onClick={() => logoutAction()}
          color="warning"
          className="text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-5 h-5"
          >
            <path d="m19 5 3-3" />
            <path d="m2 22 3-3" />
            <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
            <path d="M7.5 13.5 10 11" />
            <path d="M10.5 16.5 13 14" />
            <path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" />
          </svg>
          Logout
        </Button>
      </div>
      <div className="mb-4">
        <PDFDownloadLink
          document={<MyDocument data={data || []} />}
          fileName="fiche_cours_iorenala.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              "Loading document..."
            ) : (
              <Button color="success" className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Télécharger
              </Button>
            )
          }
        </PDFDownloadLink>
      </div>
      <Tablaux data={data} />
    </div>
  );
};

export default Admin;
