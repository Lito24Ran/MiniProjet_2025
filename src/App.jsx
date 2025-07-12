 
import { Route, Routes } from "react-router-dom";
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
import AppAdmin from "./admin/AppAdmin.jsx";
import ForgotPassword from "./page/forgotPass.jsx";
import ChangePassword from "./page/forgotPassword2.jsx";


function App() {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/SignUp" || location.pathname === "/forgotPassword" || location.pathname === "/ChangePassword/:id") {
      document.body.style.backgroundImage =  `{url ("src/image/backgroundLogin.png")}`/*src/image/backgroundSignUp1.gif/* "linear-gradient(to top right, rgba(166, 29, 113),rgba(239, 130, 35, 1))" */;
    } /* else if (location.pathname === "/SignUp") {
      document.body.style.backgroundImage = `{ url("src/image/backgroundLogin.png");}`
    }else if (location.pathname === "/forgotPassword") {
      document.body.style.backgroundImage = `{url ("src/image/backgroundSignUp1.png")}`
    } */
    else {
      document.body.style.backgroundImage = "none";
    }
  }, [location]); 
  return (
    <Routes>
       <Route path="/" element={<Loginpage />} /> 
      <Route path="/SignUp" element={<Inscription />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/ChangePassword/:id" element={<ChangePassword />} />
      <Route path="/home" element={<Home />} />
      <Route path="/panier" element={<Panier />} />
      <Route path="/Riz" element={<Riz />} />
      <Route path="/Burger" element={<MenuBurger />} />
      <Route path="/Dessert" element={<Dessert />} />
      <Route path="/Jus" element={<Jus />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Soupe" element={<Soupe />} />
      <Route path="/admin/*" element={<AppAdmin />} />


    </Routes>

  )


}

export default App;
