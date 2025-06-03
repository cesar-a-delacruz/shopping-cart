import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <button onClick={() => document.querySelector("dialog#cart").showModal()}>
        Cart<span>(0)</span>
      </button>
    </nav>
  );
}

export default Navigation;
