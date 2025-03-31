import React from 'react';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Home from './page/home.jsx';
import Soupe from './AutreMenu/Soupe.jsx';
import MenuBurger from './AutreMenu/Burger.jsx';
import Dessert from './AutreMenu/Dessert.jsx';
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
        path:"/Riz",
        element:<Riz/>
      },
      {
        path:"/Burger",
        element:<MenuBurger/>
      },
      {
        path:"/Dessert",
        element:<Dessert/>
      },
      {
        path:"/Jus",
        element:<Jus/>
      },
      {
        path:"/Soupe",
        element:<Soupe/>
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
