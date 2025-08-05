import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
}
