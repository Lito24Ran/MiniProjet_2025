import React from 'react';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Home from './page/home.jsx';
import Soupe from './AutreMenu/Soupe.jsx';
import MenuBurger from './AutreMenu/Burger.jsx';
import CarteCrudite from './AutreMenu/Cruditee.jsx';
import Riz from './AutreMenu/Riz.jsx';
import Jus from './AutreMenu/Jus.jsx';
import Panier from './page/Panier.jsx';
import { CartProvider } from './context/CartContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/Soupe",
        element:<Soupe/>
      },
      {
        path:"/Burger",
        element:<MenuBurger/>
      },
      {
        path:"/Cruditee",
        element:<CarteCrudite/>
      },
      {
        path:"/Riz",
        element:<Riz/>
      },
      {
        path:"/Jus",
        element:<Jus/>
      },
      {
        path: '/panier',
        element: <Panier />,
      },
    ]
}
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  </React.StrictMode>,
)
