import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { createHashRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Home from './pages/home/Home.jsx';
import Headphones from './pages/headphones/Headphones.jsx';
import Speakers from './pages/speakers/Speakers.jsx';
import Earphones from './pages/earphones/Earphones.jsx';
import ProductFeatures from './pages/product/ProductFeature.jsx';
import Checkout from './pages/checkout/Checkout.jsx';

const router = createHashRouter(
  [
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element: <Home />},
      {path: '/headphones', element: <Headphones />},
      {path: '/speakers', element: <Speakers />},
      {path: '/earphones', element: <Earphones />},
      {path: '/product/:id', element: <ProductFeatures />},
      {path: '/checkout', element: <Checkout />},
    ]
  },
 ],
  /* {
    basename: '/audiophile_ecommerce_website',
  } */
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
