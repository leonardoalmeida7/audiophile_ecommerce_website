import { useState } from 'react'
import { Outlet } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Nav from './components/header/nav/Nav';
import Footer from './components/footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
