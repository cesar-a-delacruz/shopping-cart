function Product({ data }) {
  return (
    <div className="product">
      <img src={data.image} alt={data.title} />
      <p>{data.title}</p>
      <p>{data.category}</p>
      <p>{data.price}</p>
      <p>{data.price}</p>
    </div>
  );
}

export default Product;
