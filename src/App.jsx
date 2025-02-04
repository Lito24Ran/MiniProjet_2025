import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";
import Header from './component/header'
import Footer from './component/footer'


function App() {
  return (
    <>
      <Outlet/>
    </>
    
  );
}

export default App;
