import React from "react";
import {Route,Routes } from "react-router-dom";
import Inscription from "./page/Singin";
import Home from "./page/home";
import Panier from "./page/Panier";
import Soupe from './AutreMenu/Soupe.jsx';
import MenuBurger from './AutreMenu/Burger.jsx';
import Dessert from './AutreMenu/Dessert.jsx';
import Riz from './AutreMenu/Riz.jsx';
import Jus from './AutreMenu/Jus.jsx';
import Menu from './page/Menu.jsx';
import Loginpage from "./page/login.jsx";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


function App() {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.backgroundImage = "linear-gradient(to top right, rgba(166, 29, 113),rgba(239, 130, 35, 1))" ;
    }else if(location.pathname === "/login"){
      document.body.style.backgroundImage = "linear-gradient(to top right, rgba(166, 29, 113),rgba(239, 130, 35, 1))"
    }
     else {
      document.body.style.backgroundImage = "none";
    }
  }, [location]);
  return(
      <Routes>
          <Route path="/" element={<Inscription/>}/>
          <Route path="/login" element={<Loginpage/>}/> 
          <Route path="/home" element={<Home/>}/>
          <Route path="/panier" element={<Panier/>}/>
          <Route path="/Riz" element={<Riz/>}/>
          <Route path="/Burger" element={<MenuBurger/>}/>
          <Route path="/Dessert" element={<Dessert/>}/>
          <Route path="/Jus" element={<Jus/>}/>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="/Soupe" element={<Soupe/>}/>


      </Routes>
 
  )

   
}

export default App;
