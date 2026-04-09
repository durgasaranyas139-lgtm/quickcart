import "../styles/Header.css";

function Header({ cartItemCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header-container">
        
        {/* LEFT SIDE */}
        <div>
          <h1 className="header-title">🛒 QuickCart</h1>
          <p className="header-subtitle">
            Your one-stop shop for everything
          </p>
        </div>

        {/* RIGHT SIDE (CART BUTTON) */}
        <button className="cart-btn" onClick={onCartClick}>
          🛒
          {cartItemCount > 0 && (
            <span className="cart-badge">{cartItemCount}</span>
          )}
        </button>

      </div>
    </header>
  );
}

export default Header;