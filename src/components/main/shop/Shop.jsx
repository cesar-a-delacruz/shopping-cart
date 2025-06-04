import { useEffect, useState } from "react";
import Product from "./Product";
import Cart from "./Cart";

function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

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
      const product = {
        ...products.find((value) => value.id === id),
        amount: amount,
      };
      return [...prev, product];
    });
    const cartSize = document.querySelector("nav > button > span");
    cartSize.innerHTML = (parseInt(cartSize.innerHTML) || 0) + amount;
  }
}

export default Shop;
