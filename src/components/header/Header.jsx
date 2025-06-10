import Navigation from "./Navigation";

function Header() {
  return (
    <header>
      <Navigation />
      <button onClick={() => document.querySelector("dialog#cart").showModal()}>
        Cart<span></span>
      </button>
    </header>
  );
}

export default Header;
