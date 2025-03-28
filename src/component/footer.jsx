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
                <img src={logo} alt="logo" className="logo_ftr" />
                <p className="slogon_ftr"> payer avant de consommer ; soyer polit meme si le client est roi :)<br/>
                                           payer avant de consommer ; soyer polit meme si le client est roi :)<br/>
                                           payer avant de consommer ; soyer polit meme si le client est roi :)<br/>
                                           payer avant de consommer ; soyer polit meme si le client est roi :) </p>
                </div>
                <hr />
                <button className="bouton_ftr">
                  <img src={icon_Facebook}  className="icon_ftr" />
                         <span className="texte_ftr">: facebook</span>
                         </button>
                <button className="bouton_ftr">
                  <img src={icon_mail}  className="icon_ftr" />
                         <span className="texte_ftr">: mail</span>
                          </button>
                <button className="bouton_ftr">
                  <img src={icon_lieu}  className="icon_ftr" />
                         <span className="texte_ftr">: lieu</span>
                          </button>
                <button className="bouton_ftr">
                  <img src={icon_contact}  className="icon_ftr" />
                         <span className="texte_ftr">: contact</span>
                          </button>
            </div>    
        </footer>
    );
}
export default Foot