import Root from "../Root";
import ErrorPage from "../ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import Association from "../pages/Association";
import Don from "../pages/Don";
import Benevole from "../pages/Benevole";
import Event from "../pages/Event";
import Zone from "../pages/Zone";

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
        path: "associations",
        element: <Association />,
      },
      {
        path: "don",
        element: <Don />,
      },
      {
        path: "benevole",
        element: <Benevole />,
      },
      {
        path: "event",
        element: <Event />,
      },
      {
        path: "association/:id",
        element: <Zone />,
      },
    ],
  },
];

export default path;
