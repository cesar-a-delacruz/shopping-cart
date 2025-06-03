function Product({ data }) {
  return (
    <div className="product">
      <img src={data.image} alt={data.title} />

      <p>{data.title}</p>
      <p>{data.category}</p>
      <p>{data.price}</p>

      <form method="post">
        <label htmlFor="amount">Amount:</label>
        <input type="number" name="" id="amount" placeholder="1" min={1} />
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
}

export default Product;
