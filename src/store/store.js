import localforage from "localforage";
import { proxy } from "valtio";

/*
 *#initial state
 */

const getInitialTheme = async () => {
  const themeInit = await localforage.getItem("theme");
  return themeInit;
};

/*
 *#state
 */
export const stateStore = proxy({
  theme: getInitialTheme(),
});

/*
 *#action
 */

export const toggleTheme = async (param) => {
  const thema = await localforage.setItem("theme", param);
  stateStore.theme = thema;
};
