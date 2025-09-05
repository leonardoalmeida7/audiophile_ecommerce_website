import { useState } from 'react'
import { Outlet } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Nav from './components/header/nav/Nav';
import ModalCart from './components/modal/ModalCart';
import Footer from './components/footer/Footer';

function App() {
  const [cartActive, setCartActive] = useState(false)

  return (
    <div className='app'>
      <Nav isOpen={cartActive} setCartActive={setCartActive}/>
      {cartActive && <ModalCart />}
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
