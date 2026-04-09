import CartSidebar from "./components/CartSidebar.jsx";
import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { products } from './data/products';


function App() {

  // 🔹 STATE (memory of app)
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 🔹 ADD TO CART FUNCTION
  const addToCart = (product) => {
    console.log("Adding:", product);

    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      // increase quantity
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // add new item
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const removeFromCart = (productId) => {
  setCart(cart.filter(item => item.id !== productId));
};

const updateQuantity = (productId, newQuantity) => {
  if (newQuantity <= 0) {
    removeFromCart(productId);
  } else {
    setCart(
      cart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }
};
  const getTotalItems = () => {
  return cart.reduce((total, item) => total + item.quantity, 0);
  };
  const toggleCart = () => {
    console.log("Cart toggled");
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <Header 
        cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(!isCartOpen)}
      />
      <ProductList 
        products={products} 
        onAddToCart={addToCart}
      />
      <CartSidebar 
        isOpen={isCartOpen}
        cart={cart}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
}

export default App;