import React from "react";
import "./footer.css";
import iconFacebook from "../image/icon_facebook.png";
import iconmail from "../image/icon_mail.png";
import iconlieu from "../image/icon_lieu.jpg";
import iconcontact from "../image/icon_contact.jpg";

function Footer(){
    return(
        <footer className="StyleFooter">
            <div className="footer_container">
                <div className="item_ftr">
                       <img src={iconFacebook} alt="facebook" className="footer_image" />
                         <span className="texte_ftr">: ikally mada</span>
                </div>
                <div className="item_ftr">
                       <img src={iconmail} alt="mail" className="footer_image" /> 
                         <span className="texte_ftr">: ikally mada@gmail.com</span>
                </div>          
                <div className="item_ftr">         
                       <img src={iconlieu} alt="lieu" className="footer_image" /> 
                         <span className="texte_ftr">: ikally mada centre</span>
                </div>
                <div className="item_ftr">          
                       <img src={iconcontact} alt="contact" className="footer_image" /> 
                        <span className="texte_ftr">: 0344576523</span>
                    
                </div>
                <button className="bouton_ftr">: about us </button>
        
            </div>    
        </footer>
    );
}
export default Footer;