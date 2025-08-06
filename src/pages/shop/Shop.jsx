import { useState } from "react";
import Product from "../../components/main/product/Product";
import Cart from "../../components/main/cart/Cart";
import styles from "./Shop.module.css";
import useProducts from "../../hooks/useProducts";

function Shop() {
  const { products, loading, error } = useProducts();
  const [cart, setCart] = useState({ items: [], size: 0 });

  return (
    <div id="shop">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>A network error was encountered</p>
      ) : (
        <>
          <div className={styles.products}>
            {products.map((product) => (
              <Product key={product.id} data={product} addToCart={addToCart} />
            ))}
          </div>
          <Cart data={cart} />
        </>
      )}
    </div>
  );

  function addToCart(id, amount) {
    setCart((prev) => {
      const cartSize = document.querySelector("header > button > span");
      cartSize.innerHTML = ` (${prev.size + amount})`;

      let cartItem = prev.items.find((product) => product.id === id);

      if (!cartItem) {
        cartItem = {
          ...products.find((product) => product.id === id),
          amount: amount,
        };
        return { items: [...prev.items, cartItem], size: prev.size + amount };
      } else {
        const newItems = prev.items.map((item) => {
          return item.id === id
            ? { ...item, amount: item.amount + amount }
            : item;
        });
        return { items: newItems, size: prev.size + amount };
      }
    });
  }
}

export default Shop;
