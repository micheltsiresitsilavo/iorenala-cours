import Root from "../Root";
import ErrorPage from "../ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import Mameno from "../pages/Mameno";
import Control from "../pages/Control";
import Admin from "../pages/Admin";
import Thanks from "../pages/Thanks";

const path = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "mameno",
        element: <Mameno />,
      },
      {
        path: "controle",
        element: <Control />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "thanks",
        element: <Thanks />,
      },
    ],
  },
];

export default path;
