import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { CartProvider } from "./context/CartContext";

import './App.css'


import Nav from './components/header/nav/Nav';
import ModalCart from './components/modal/ModalCart';
import Footer from './components/footer/Footer';
import ScrollToTop from './ScrollToTop';


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className='app'>
      <CartProvider>
        <ScrollToTop />
        <Nav onCartClick={() => setIsCartOpen(true)} />
        {isCartOpen && <ModalCart onClose={() => setIsCartOpen(false)} />}
        <Outlet />
        <Footer />
      </CartProvider>
    </div>
  )
}

export default App
