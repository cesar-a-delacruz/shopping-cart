import { createBrowserRouter } from "react-router-dom";
import Main from "./components/main/Main";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import ErrorPage from "./pages/error/Error";

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
