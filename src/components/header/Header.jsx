import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {
  const butCart = (
    <button onClick={() => document.querySelector("dialog#cart").showModal()}>
      Cart<span></span>
    </button>
  );
  const currrenPath = useLocation().pathname;
  return (
    <header>
      <Navigation />
      {currrenPath === "/shop" && butCart}
    </header>
  );
}

export default Header;
