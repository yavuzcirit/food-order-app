import React,{ useState } from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
      <h2>Let's get started!</h2>
    </CartProvider>
  );
}

export default App;
