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
            <div className="footer_3D">
              <img src={logo} alt="logo" className="logo_ftr" />
              <h3 className="contact">Contactez Nous:</h3>
                <h3>
                  <div className="item_ftr">
                    <a href="https://www.facebook.com/HaiRunUniversity">
                      <img src={icon_Facebook}  className="icon_ftr" />
                             </a>
                    <a href="contact@grande-ecole-it.com">
                      <img src={icon_mail}  className="icon_ftr" />
                              </a>
                    <a href="https://maps.app.goo.gl/gaSQXBQ5bQrMGUCS8">
                      <img src={icon_lieu}  className="icon_ftr" />
                              </a>
                    <a href="#">
                      <img src={icon_contact}  className="icon_ftr" />
                    </a>
                  </div>
                </h3>
            </div>
            <div className="txt_ftr">
                <h1>Developée par :<> Team<span>Five</span></></h1>
            </div>
        </footer>
    );
}
export default Foot