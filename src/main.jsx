import React from 'react';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Home from './page/home.jsx';
import Soupe from './AutreMenu/Soupe.jsx';
import MenuBurger from './AutreMenu/Burger.jsx';
import CarteCrudite from './AutreMenu/Cruditee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:"/",
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
    ]
}
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
