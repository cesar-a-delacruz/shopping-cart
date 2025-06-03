import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <Link to="/">Checkout</Link>
    </nav>
  );
}

export default Navigation;
