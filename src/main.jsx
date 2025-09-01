import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Headphones from './pages/headphones/Headphones.jsx';
import Speakers from './pages/speakers/Speakers.jsx';
import Earphones from './pages/earphones/Earphones.jsx';

const router = createBrowserRouter(
  [
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element: <Home />},
      {path: '/headphones', element: <Headphones />},
      {path: '/speakers', element: <Speakers />},
      {path: '/earphones', element: <Earphones />},
    ]
  },
 ],
  {
    basename: '/audiophile_ecommerce_website',
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
