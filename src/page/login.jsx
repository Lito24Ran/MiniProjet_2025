import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignIn.css";



function Loginpage() {

    const [name, setName] = useState("");
    const [loginUser, setLoginUser] = useState("")
    const [password, setPassword] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loginemail, SetLoginemail] = useState("")
    const [connecte, setConnecte] = useState(false);



    function handleclicLogin() {

        if ((password.trim().length < 8)) {
            alert("Entrer un mot de passe");
        } else if (password.trim().includes(("@")) || (password.trim().includes(("#"))) || (password.trim().includes(("$"))) ||
            (password.trim().includes(("&"))) || (password.trim().includes(("*")))
        ) {
            if (name.trim() == "") {
                alert("Entrer votre nom")
            } else if (password.trim() == "") {
                alert("Entrer votre mot de passe")
            } else if (email.trim() == "") {
                alert("Entrer votre adresse email!")
            }
            else {
                setLoginPassword(password);
                setLoginUser(name);
                SetLoginemail(email);
                setConnecte(true)
            }
        } else {
            alert("Veuillez mettre un caractere specifique au mot de passe")
        }
    }


    function handlchangename(event) {
        setName(event.target.value)
    }

    function handlchangepassword(event) {
        setPassword(event.target.value)
    }

    function handlechangeEmail(event) {
        setEmail(event.target.value)
    }
    useEffect(() => {
        const Userlogin = async () => {
            const dataSend = await fetch("http://localhost:1203/login", {
                method: "POST",
                mode: "cors",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    name: loginUser,
                    password: loginPassword,
                    email: loginemail

                })
            })


            const result = await dataSend.json();
            //console.log("Donne enregistrer : ", result);

        }
        Userlogin();

    }, [loginUser])

    const navigation = useNavigate()

    useEffect(() => {
        (connecte) ? console.log("Vous etes identifier") && navigation("/home") : console.log("Une erreur d' un des entres");

    }, [connecte])

    return (
        <>

            <div className="SignIn_container">
                <div>
                    <div className="inputLogin">
                        <h2 style={{ color: "white", fontSize: "60px", textAlign: "center", marginLeft: "70px", marginBottom: "30px" }}><strong>Login</strong></h2>
                        <div className="inputName">
                            <input type="text" className="nom"
                                value={name}
                                onChange={handlchangename}
                                required
                                size={500} />
                            <div className="underline"></div>
                            <label htmlFor="nom">Enter your name</label>
                        </div>
                        <br />
                        <div className="inputName">
                            <input type="text" className="emailLogin"
                                required
                                value={email}
                                onChange={handlechangeEmail}
                                size={700}
                            />

                            <div className="underline"></div>
                            <label htmlFor="email">Enter your email</label>
                        </div>

                        <br />
                        <div className="inputName">
                            <input type="password" className="passwordLogin"
                                required
                                value={password}
                                onChange={handlchangepassword}
                                size={700}
                            />

                            <div className="underline"></div>
                            <label htmlFor="email">Enter your password</label>
                        </div>
                        <br />
                        <div className="paragraphe">
                            <p>  <Link> mot de passe oublier?</Link></p>
                        </div>
                        <button
                            onClick={handleclicLogin}
                            className="btnLogin"
                        >Login</button>
                    </div>
                    <div className="paragraphe">
                        <p>Not registered? <Link to={"/"}>Create an account</Link></p>
                    </div>
                </div>
                <div className="divImage">
                    <div>
                        <img src="MiniProjet_2025\src\image\image_chef.png" alt="imageDechef" id="imgeLogin" />
                    </div>
                    <h2 style={{ color: "white", position: "relative", right: "80px" }}>Kaly-IT</h2>
                </div>
            </div>


        </>
    )

}
export default Loginpage;