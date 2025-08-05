import "./Cart.module.css";

function Cart({ data }) {
  let total = 0;
  return (
    <dialog id="cart">
      <button onClick={(e) => e.currentTarget.parentElement.close()}>X</button>
      {data.size === 0 ? (
        <p>The cart is empty</p>
      ) : (
        <>
          <ul>
            {data.items.map((value) => {
              const subtotal = value.price * value.amount;
              total = total + subtotal;
              return (
                <li key={value.id}>
                  <img src={value.image} alt="" />
                  <div className="description">
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
                      Subtotal: <span>${subtotal.toFixed(2)}</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="bottom">
            <p>
              Total: <span>${total.toFixed(2)}</span>
            </p>
            <button>Checkout</button>
          </div>
        </>
      )}
    </dialog>
  );
}

export default Cart;
