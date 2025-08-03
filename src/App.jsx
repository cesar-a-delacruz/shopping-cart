import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, Outlet } from "react-router-dom";
import * as Routing from "./Routing";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

Routing.setRouting(<App />);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Routing.router} />,
  </StrictMode>,
);

export default App;
