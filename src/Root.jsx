import { useEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import localforage from "localforage";
import { useSnapshot } from "valtio";
import { stateStore } from "./store/store";

const Root = () => {
  const { theme } = useSnapshot(stateStore);
  const setTheme = async () => {
    try {
      const themeForage = await localforage.getItem("themeLight");
      const themeChoise = await localforage.getItem("theme");

      if (!themeForage) {
        await localforage.setItem("themeLight", "light");
        await localforage.setItem("themeDark", "dark");
      }

      if (!themeChoise) await localforage.setItem("theme", false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDarkMode = async (themeParam) => {
    const rootElem = window.document.documentElement;
    const darkTheme = await localforage.getItem("themeDark");
    const lightTheme = await localforage.getItem("themeLight");
    if (themeParam) {
      rootElem.classList.remove(lightTheme);
      rootElem.classList.add(darkTheme);
    } else {
      rootElem.classList.remove(darkTheme);
      rootElem.classList.add(lightTheme);
    }
  };

  useEffect(() => {
    setTheme();
    handleDarkMode(theme);
  }, [theme]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Root;
