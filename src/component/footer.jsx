import React from "react";
import "./footer.css";
import icon_Facebook from "../image/icon_facebook.png";
import icon_mail from "../image/icon_mail.png";
import icon_lieu from "../image/icon_lieu.png";
import icon_contact from "../image/icon_contact.png";
import logo from "../image/logo.png";

function Foot(){

    return(
        <footer className="StyleFooter">
            <div className="footer_container">
                <div className="item_ftr">
                <p className="slogon_ftr"> payer avant de consommer ; soyer polit meme si le client est roi :)
                                           payer avant de consommer ; soyer polit meme si le client est roi :) </p>
                </div>
            </div>
            <div className="footer_3D">
            <img src={logo} alt="logo" className="logo_ftr" />
              <h3><div className="item_ftr"><a href="#">
                  <img src={icon_Facebook}  className="icon_ftr" />
                         </a>
                <a href="#">
                  <img src={icon_mail}  className="icon_ftr" />
                          </a>
                <a href="#">
                  <img src={icon_lieu}  className="icon_ftr" />
                          </a>
                <a href="#">
                  <img src={icon_contact}  className="icon_ftr" />
                          </a></div></h3>
            </div>
        </footer>
    );
}
export default Foot