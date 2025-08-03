import { createBrowserRouter } from "react-router-dom";
import Main from "./components/main/Main";
import Home from "./components/main/Home";
import Shop from "./components/main/shop/Shop";
import ErrorPage from "./ErrorPage";

let router, routes;
function setRouting(app) {
  routes = [
    {
      path: "/",
      element: app,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Main />,
          children: [
            { path: "/", element: <Home /> },
            { path: "shop", element: <Shop /> },
          ],
        },
      ],
    },
  ];
  router = createBrowserRouter(routes);
}

export { setRouting, routes, router };
