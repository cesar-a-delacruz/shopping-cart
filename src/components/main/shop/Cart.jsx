function Cart({ data }) {
  let total = 0;
  return (
    <dialog id="cart">
      <button onClick={(e) => e.currentTarget.parentElement.close()}>X</button>
      <ul>
        {data.map((value) => {
          const subtotal = value.price * value.amount;
          total = total + subtotal;
          return (
            <li key={value.id}>
              <img src={value.image} alt="" />
              <p>
                Title: <span>{value.title}</span>
              </p>
              <p>
                Amount: <span>{value.amount}</span>
              </p>
              <p>
                Price: <span>${value.price}</span>
              </p>
              <p>
                Subtotal: <span>${subtotal}</span>
              </p>
            </li>
          );
        })}
      </ul>
      <p>
        Total:<span>${total.toFixed(2)}</span>
      </p>
    </dialog>
  );
}

export default Cart;
