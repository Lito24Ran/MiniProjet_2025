import React from "react";
import "./footer.css";
import iconFacebook from "../image/icon_facebook.png";
import iconmail from "../image/icon_mail.png";
import iconlieu from "../image/icon_lieu.jpg";
import iconcontact from "../image/icon_contact.jpg";

function Footer(){
    return(
        <footer className="StyleFooter">
            
                <div className="Facebook"><img src="" alt="" />
                    <p className="Composant1_footer">Facebook</p>
                    <p className="Composant1_footer">Email</p>
                  
                </div>
                <div className="Style2">
                    <p className="Composant2_footer">Contact</p>
                    <p className="Composant2_footer">Lieu</p>
                    
                </div>
                <img src="bolognaise.png" alt="facebook" />
                <img src="bolognaise.png" alt="gmail" />
                <img src="bolognaise.png" alt="instagrame" />
        </footer>
    );
}
export default Footer;