import { useEffect, useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
import "../../../styles/main/shop/Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ items: [], size: 0 });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((json) => {
        const newProducts = [];
        json.forEach((item) => {
          const product = {
            id: item.id,
            title: item.title,
            price: parseFloat(item.price.toFixed(2)),
            category: item.category,
            image: item.image,
          };
          newProducts.push(product);
        });
        setProducts(newProducts);
      });
  }, []);

  return (
    <div id="shop">
      <div id="products">
        {products.map((product) => (
          <Product key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart data={cart} />
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
