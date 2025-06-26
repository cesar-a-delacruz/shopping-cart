import "../../../styles/main/shop/Product.css";

function Product({ data, addToCart }) {
  return (
    <div className="product">
      <img src={data.image} alt={data.title} />

      <p>{data.title}</p>
      <p>{data.category}</p>
      <p>
        Price: <span>${data.price}</span>
      </p>

      <form
        method="post"
        onSubmit={(e) => {
          e.preventDefault();

          const amountInput = document.getElementById(`amount-${data.id}`);
          let amount = parseInt(amountInput.value);
          if (!amount) {
            amountInput.value = 1;
            amount = 1;
          }

          addToCart(data.id, amount);
        }}
      >
        <div>
          <label htmlFor={`amount-${data.id}`}>Amount:</label>
          <input
            type="number"
            name=""
            id={`amount-${data.id}`}
            placeholder="1"
            min={1}
          />
        </div>
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
}

export default Product;
