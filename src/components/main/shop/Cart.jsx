function Cart() {
  return (
    <dialog id="cart">
      <button onClick={(e) => e.currentTarget.parentElement.close()}>X</button>
      <div>
        <p>
          Total:<span>$0.00</span>
        </p>
      </div>
    </dialog>
  );
}

export default Cart;
