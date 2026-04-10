import React from 'react';
import { Link } from 'react-router-dom';

function CartPage({ cart, onUpdateQuantity, onRemoveItem }) {

  // Calculate total price
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty</p>
          <Link to="/">Continue Shopping</Link>
        </div>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>

              <button onClick={() => 
                onUpdateQuantity(item.id, item.quantity + 1)
              }>
                +
              </button>

              <button onClick={() => 
                onUpdateQuantity(item.id, item.quantity - 1)
              }>
                -
              </button>

              <button onClick={() => 
                onRemoveItem(item.id)
              }>
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>

          <Link to="/">Continue Shopping</Link>
        </div>
      )}
    </div>
  );
}

export default CartPage;