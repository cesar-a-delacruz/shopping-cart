function Product({ data, addToCart }) {
  return (
    <div className="product">
      <img src={data.image} alt={data.title} />

      <p>
        Title: <span>{data.title}</span>
      </p>
      <p>
        Category: <span>{data.category}</span>
      </p>
      <p>
        Price: <span>${data.price}</span>
      </p>

      <form
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          const amount = parseInt(
            document.getElementById(`amount-${data.id}`).value,
          );
          addToCart(data.id, amount);
        }}
      >
        <label htmlFor={`amount-${data.id}`}>Amount:</label>
        <input
          type="number"
          name=""
          id={`amount-${data.id}`}
          placeholder="1"
          min={1}
        />
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
}

export default Product;
