import React from "react";
import { useState } from "react";
import "./forgotPassword.css";
import { Link } from "react-router-dom";


const ChangePassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulación de envío de correo
        if (email) {
            /* setMessage("Entrer votre email"); */
            setEmail(""); // Limpia el campo de correo
        } else {
            setMessage("Entrer votre email");
        }
    };

    return (
        <div className="ContainerForgot">
            <div style={{
                maxWidth: "400px", margin: "0 auto", height: "400px",
                width: "500px", border: "0.3px solid black", display: "flex",
                alignItems: "center", justifyContent: "center", boxShadow: "0px 0px 1px black",
                backgroundColor:""
            }}>
                <div style={{ height: "200px" }}>


                    <h2 style={{color:"white",position:"relative", bottom:"30px",textAlign:"center"}}>New Password</h2>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: "15px" }}>
                            {/* <label htmlFor="email">Correo Electrónico:</label> */}
                            <input
                        
                                type="password"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Entrer votre email"
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    marginTop: "5px",
                                    borderRadius: "5px",
                                    border: "1px solid #ccc",
                                    outline:"none",
                                    border:"none",
                                    borderBottomColor:"black",
                                    background:"white",
                                   
                                }}
                            />
                            
                        </div>
                        
                        <button
                            type="submit"
                            style={{

                                backgroundColor: "rgb(149, 11, 255, 1)",
                                color: "white",
                                padding: "10px 20px",
                                marginTop: "20px",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                                width: "100%"
                            }}
                        >
                            Submite
                        </button>
                        <p></p><Link to={"/forgotPassword"} style={{color:"white"}}>⬅️Retour</Link>
                    </form>
                    {message && <p style={{ marginTop: "15px", color: "green" }}>{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;



