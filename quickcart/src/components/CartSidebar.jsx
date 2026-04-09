function CartSidebar({ isOpen, cart, onRemoveItem, onUpdateQuantity }) {
    const getTotalPrice = () => {
  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};
    return (
        <div
            style={{
            position: "fixed",
            top: 0,
            right: isOpen ? "0" : "-300px",
            width: "300px",
            height: "100vh",
            background: "white",
            borderLeft: "1px solid #ccc",
            padding: "20px",
            transition: "0.3s",
            overflowY: "auto"
        }}
        >
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} style={{ marginBottom: "15px" }}>
            <h4>{item.name}</h4>

            <p>Qty: {item.quantity}</p>

            {/* 🔴 QUANTITY BUTTONS */}
            <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
              -
            </button>

            <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
              +
            </button>

            {/* 🔴 REMOVE BUTTON */}
            <button onClick={() => onRemoveItem(item.id)}>
              Remove
            </button>
            <button onClick={() => setIsCartOpen(false)}>✕</button>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
      )}
    </div>
  );
}

export default CartSidebar;