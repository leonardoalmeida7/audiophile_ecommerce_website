import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { CartProvider } from "./context/CartContext";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Nav from './components/header/nav/Nav';
import ModalCart from './components/modal/ModalCart';
import Footer from './components/footer/Footer';


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className='app'>
      <CartProvider>
        <Nav onCartClick={() => setIsCartOpen(true)} />
        {isCartOpen && <ModalCart onClose={() => setIsCartOpen(false)} />}
        <Outlet />
        <Footer />
      </CartProvider>
    </div>
  )
}

export default App
