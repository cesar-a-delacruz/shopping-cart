import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <button>
        Cart <span>(0)</span>
      </button>
    </nav>
  );
}

export default Navigation;
