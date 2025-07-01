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
    const [data, setData] = useState([]);
    const [existename, setExistname] = useState(false)

    //Eto no nataoko ilay erreur rehetra 
    const [erreur, setErreur] = useState(false);
    const [erreunom, setErreurnom] = useState(false);
    const [errEmail, setErrEmail] = useState(false);
    const [errpassword, setErreurpassword] = useState(false);
    //Eto indray erreur an' ilay hoe ts misy @gmail.com
    const [emailmissing, setEmailmissing] = useState(false);
    const [missingpass, setMissingpass] = useState(false);
    const [incorrectemail, setIncorrectemai] = useState(false);
    const [succesConnect, setSuccesConnect] = useState(false);

    //Staten' le maso @ password iny
    const [eye, seteye] = useState(false)

    //Eto no mi naviguer ilay izy

    const navigate = useNavigate();
    function navigation(path) {


        navigate(path)
    }

    useEffect(() => {
        const dataComparing = async () => {
            try {
                const datafetching = await fetch("http://localhost:1203/dataUser", {
                    method: 'GET'
                });
                const donnefetch = await datafetching.json();
                //console.log(donnefetch[0].name);
                setData(donnefetch)

            } catch (error) {
                console.log("Une erreur c' est produit!");

            }


        }
        dataComparing();
        //console.log(data[0].email);
    }, [data])

    function handleclicLogin() {
        console.log(data);
        //console.log(data[1].email);

        //Eto no manao condition de login 
        let j = 0;

        if (name.trim() === "" && email.trim() === "" && password.trim() === "") {
            /* alert("Entrer les champs") */
            setErreur(true)
        }
        else if (name.trim() == "") {
            setErreurnom(true);
        } else if (email.trim() == "") {
            /* alert("Entrer votre email") */
            setErrEmail(true);
        } else if (password.trim() == "") {
            /*  alert("Entrer votre mot de passe!") */
            setErreurpassword(true);
        } else if (!email.trim().includes("@gmail.com")) {

            setEmailmissing(true)

        } else {
            for (let i = 0; i < data.length; i++) {
                if (data[i].name === name) {
                    setExistname(false)
                    break;
                } else {
                    setExistname(true)
                }
                j++;
                //console.log(j);

            }
            if (existename) {
                /*  alert("Votre compte existe!"); */
                if (data[j].email == email) {

                    if (data[j].password === password) {
                        /*  alert("Votre mot de passe est correcte vous ete connecte") */
                        setConnecte(true)
                    } else {
                        /* alert("Votre mot de passe est incorrecte!") */
                        setMissingpass(true)
                    }
                } else {

                    setIncorrectemai(true)
                }
            }
            else {
                /* alert("compte innexistant creer un compte") */
                setExistname(true)
            }
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
    function eyefunc() {
        seteye(true)
    }

    setTimeout(() => {
        setErreur(false);
        setErrEmail(false);
        setErreurpassword(false);
        setEmailmissing(false);
        setConnecte(false);
        setIncorrectemai(false)
    }, 8000);




    useEffect(() => {
        if (connecte == true) {
            setLoginUser(name);
            setLoginPassword(password);
            SetLoginemail(email);
            const loginBackend = async () => {
                try {
                    const fetchDatalogin = await fetch("http://localhost:1203/login", {
                        method: "POST",
                        mode: "cors",
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify({
                            name: name,
                            password: password,
                            email: email,
                        })
                    })
                } catch (error) {

                }
            }
            loginBackend();
            setSuccesConnect(true);

            //alert("Connexion reussit")
            setTimeout(() => {
                navigation("/home")
            }, 1000);
        }


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
                            {
                                (existename) ? <p className="compte_introuvable"> creer un compte</p> :
                                    (succesConnect) ? <p className="SuccesConnexion"> Connexion reussit</p> :
                                        (erreur) ? <p className="error" title="champ obligatoire ">!</p> :
                                            (erreunom) && <p className="error" title="Entrer votre nom">!</p>



                            }
                            <label htmlFor="nom">Enter your name</label>
                        </div>
                        <br />
                        <div className="inputName">
                            <input type="text   " className="emailLogin"
                                required
                                value={email}
                                onChange={handlechangeEmail}
                                size={700}
                            />

                            <div className="underline"></div>
                            {
                                (erreur) ? <p className="error" title="champ obligatoire ">!</p> :
                                    (errEmail) ? <p className="error" title="Entrer votre email!">!</p> :
                                        (emailmissing) ? <p className="error" title="Votre adresse email doit etre suivis d' un @gmail.com">!</p> :
                                            (incorrectemail) && <p className="error" title="Votre adresse email doit etre suivis d' un @gmail.com">!</p>
                            }
                            <label htmlFor="email">Enter your email</label>
                        </div>

                        <br />
                        <div className="inputName">
                            {/*    <button onClick={eyefunc}><img src="#" alt="" /></button>  */}
                            <input type="password"
                                className="passwordLogin"
                                required
                                value={password}
                                onChange={handlchangepassword}
                                size={700}
                            />


                            <div className="underline"></div>
                            <div className="underline"></div>
                            {
                                (erreur) ? <p className="error" title="champ obligatoire ">!</p> :
                                    (errpassword) ? <p className="error" title="Votre mot de passe est incorrecte">!</p> :
                                        (missingpass) && <p className="error" title="Votre mot de passe est incorrecte">!</p>
                            }
                            <label htmlFor="email">Enter your password</label>
                        </div>
                        <br />
                        <div className="paragraphe">
                            <p>Forgot password?  <Link> click here</Link></p>
                        </div>
                        <button
                            onClick={handleclicLogin}
                            className="btnLogin"
                        >Login</button>
                        <div className="paragraphe">

                            <p>Not registered? <Link to={"/SignUp"}>Create an account</Link></p>

                        </div>
                    </div>

                </div>
                <div className="divImage">
                    <div>
                        <img src="src/image/image_chef.png" alt="imageDechef" id="imgeLogin" />
                    </div>
                    <h2 style={{ color: "white", position: "relative", right: "80px", fontSize: "50px" }}> <strong>Kalico</strong></h2>
                </div>
            </div>


        </>
    )

}
export default Loginpage;