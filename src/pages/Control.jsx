import { Input, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import localforage from "localforage";
import { useNavigate } from "react-router-dom";
const Control = () => {
  const navigate = useNavigate();

  const [pwd, setPwd] = useState("");
  const [error, setError] = useState(false);
  const [refused, setRefused] = useState(false);

  const handleAccess = async () => {
    const resp = await localforage.setItem("pwd", pwd);
    if (resp) return navigate("/admin");
    setError(true);
  };

  const checkPwd = (e) => {
    e.preventDefault();

    if (pwd === "mazzika") return handleAccess();
    setRefused(true);
  };

  useEffect(() => {
    const fetchPwd = async () => {
      const respPwd = await localforage.getItem("pwd");
      if (respPwd) return navigate("/admin");
    };
    fetchPwd();
  }, []);

  return (
    <div className="flex justify-center max-w-sm mx-auto h-screen items-center">
      <form onSubmit={checkPwd} className="w-full space-y-2">
        {pwd}
        <h1 className="text-xl font-semibold">Code d'Accèes</h1>
        {error && (
          <h1 className="text-xsm px-4 py-5 text-center rounded-md border-2 border-red-300 bg-red-100 text-red-400 font-semibold">
            Misy erreur. Averino indray hoe!
          </h1>
        )}
        {refused && (
          <h1 className="text-xsm px-4 py-5 text-center rounded-md border-2 border-red-300 bg-red-100 text-red-400 font-semibold">
            Tandremo diso ny mot de passe!!
          </h1>
        )}

        <Input
          type="password"
          variant="bordered"
          placeholder="Veuillez entrer le mot magique"
          className="max-w-sm"
          isRequired
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <Button type="submit" fullWidth={true} color="primary" variant="shadow">
          Enter
        </Button>
      </form>
    </div>
  );
};

export default Control;
