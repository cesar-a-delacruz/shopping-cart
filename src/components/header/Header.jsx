import { useLocation, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const butCart = (
    <button onClick={() => document.querySelector("dialog#cart").showModal()}>
      Cart<span></span>
    </button>
  );
  const currrenPath = useLocation().pathname;
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
      </nav>
      {currrenPath === "/shop" && butCart}
    </header>
  );
}

export default Header;
