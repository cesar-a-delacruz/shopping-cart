import { useEffect, useState } from "react";
import Product from "./Product";
import Cart from "./Cart";

function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((json) => {
        const newProducts = [];
        json.forEach((item) => {
          const product = {
            id: item.id,
            title: item.title,
            price: item.price,
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
      <Product />
      <Cart />
    </div>
  );
}

export default Shop;
