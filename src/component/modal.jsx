import React, { useContext, useEffect, useState } from "react";
import './modal.css';

function Modal({ oneclose, condition, totalCommande }) {
    const [showCash, setShowCash] = useState(true);
    //const Supression = useContext(MOdalContext); 
    const [nameCash, setNameCash] = useState('');
    //Reto no mandray makany @ ny db

    const [takeNameCash, setTakeNameCash] = useState('');
    const [takelevelCash,setTakelevelCash] = useState('');
    const [takenameMvola,setTakenameMvola] = useState('');
    const [takenumMvola,setTakenumMvola] = useState('');

    //atreto no farany ah
    const [levelCash, setLevelCash] = useState('');
    const [nameMvola, setNameMvola] = useState('');
    const [number, setNumber] = useState('');

    //eto no ataoko ilay state an' le condition

    const [conditionnameCash, setConditionnameCash] = useState(false);
    const [conditionlevelCash, setConditionlevelCash] = useState(false);
    const [conditionnameMvola, setConditionnameMvola] = useState(false);
    const [conditionnumMvola, setConditionnumMvola] = useState(false);


    function inputName(e) {
        setNameCash(e.target.value);
        /* console.log(nameCash); */

    }
    function inputLevel(e) {
        setLevelCash(e.target.value)
    }

    function inputnameMvola(e) {
        setNameMvola(e.target.value)
    }
    function inputNumber(e) {
        setNumber(e.target.value)

    }
    /* console.log(takeNameCash); */

    function conditionalModal(params) {
        if (nameCash.trim() == "") {
            setConditionnameCash(true);
        } else if (levelCash == "") {
            /* alert("Entrer votre niveau"); */
            setConditionlevelCash(true);
        } else {
            if ((!levelCash.trim().includes("L1")) && (!levelCash.trim().includes("L2")) && (!levelCash.trim().includes("L3"))) {
                setConditionlevelCash(true);
            } else {
                setTakeNameCash(nameCash);
                setTakelevelCash(levelCash)
                condition();

            }

        }
    }
    useEffect(() => {
        const payementCash = async() => {
            const payerCash = await fetch("http://localhost:1203/payement", {
                method: "POST",
                mode: "cors",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    name: takeNameCash,
                    level: takelevelCash,
                })
            })
             const donneU = await payerCash.json();

        }

        payementCash()
    }, [takeNameCash])


    function conditionMvolaModal() {
        if (nameMvola.trim() == "") {
            /* alert("Veuillez entrer votre nom dans le Mvola"); */
            setConditionnameMvola(true)
        } else if (number.trim() == "") {
            setConditionnumMvola(true)
            /*  alert("Veuillez entrer votre numeros dans le Mvola") */
        }
        else {
            if ((!number.trim().includes("034")) && (!number.trim().includes("038"))) {
                setConditionnumMvola(true)

            } else {
                if ((number.trim().length <= 9) && (number.trim().length >= 9)) {
                    setConditionnumMvola(true)
                } else {
                    condition();
                    setTakenameMvola(nameMvola);
                    setTakenumMvola(number);
                }

            }

        }
    }

        useEffect(() => {
        const payementCash = async() => {
            const payerMvola = await fetch("http://localhost:1203/payementMvola", {
                method: "POST",
                mode: "cors",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    name: takenameMvola,
                    level: takenumMvola,
                })
            })
             const donneU = await payerMvola.json();

        }

        payementCash()
    }, [takenameMvola])

    //Eto no mila le erreur 
    setTimeout(() => {
        setConditionnameCash(false);
        setConditionlevelCash(false);
        setConditionnameMvola(false);
        setConditionnumMvola(false);
    }, 8000);

    return (
        <>

            <div className="Container_MOdal">
                <h2>Page de payement</h2>

                <div >
                    <h1 title="Annuler" onClick={oneclose}>x</h1>
                    <div className="butonPayment">
                        <button onClick={() => setShowCash(true)} className={`cashPay ${showCash === true ? 'active' : ''}`}> <img src="src/image/imageMoney.png" alt="imageCash" /> | Cash</button>
                        <button onClick={() => setShowCash(false)} className={`MvolaPay ${showCash === false ? 'active' : ''}`}> <img src="src/image/MvolaImage.png" alt="imageMvola" /> | Mvola</button>
                        {
                            (showCash) ?

                                /*  (conditionnameCash) ? <p>Enterer un nom</p> : */
                                <div className="inputText">
                                    {
                                        (conditionnameCash) && <p className="erreurModal" title="Entrer un nom">!</p>
                                    }
                                    <label htmlFor="">Entrer votre Nom</label>
                                    <br />
                                    <input type="text" size={30}
                                        required
                                        value={nameCash}
                                        onChange={inputName} />
                                    <br />
                                    <label htmlFor="">Entrer votre niveau</label>
                                    {
                                        (conditionlevelCash) && <p className="erreurModal2" title="Entrer votre niveau">!</p>
                                    }
                                    <br />

                                    <input type="text" size={30} name="EntreLevel" id="Level"
                                        value={levelCash}
                                        onChange={inputLevel}
                                        required
                                    />
                                    <div className="date">
                                        <h5>expire</h5>
                                        <p>10mn</p>
                                    </div>
                                    <div className="btnSubmit">
                                        <button id="SubmitBtn" onClick={conditionalModal}>Submit</button>
                                    </div>
                                </div>
                                :
                                <div className="inputText">
                                    {
                                        (conditionnameMvola) && <p className="erreurModal" title="Entrer un nom">!</p>
                                    }
                                    <label htmlFor="">Entrer votre Nom</label>
                                    <br />
                                    <input type="text" size={30}
                                        value={nameMvola}
                                        onChange={inputnameMvola}
                                        required />
                                    <br />
                                    {
                                        (conditionnumMvola) && <p className="erreurModal2" title="Entrer votre numero">!</p>
                                    }
                                    <label htmlFor="">Entrer votre numero Mvola</label>
                                    <br />
                                    <input type="Tel" size={30} name="EntreLevel" id="Level"
                                        onChange={inputNumber}
                                        value={number}
                                        required />
                                    {/* <div className="date">
                                        <h5>expire</h5>
                                        <p>10mn</p>
                                    </div> */}
                                    <div className="btnSubmit">
                                        <button id="SubmitBtn" onClick={conditionMvolaModal}>Submit</button>
                                    </div>
                                </div>
                        }


                    </div>
                    <div className="price">
                        <div className="title">
                            <img src="src/image/kalico.png" alt="logo" />
                            {/* <h3>Kalico</h3> */}
                        </div>
                        <div className="underlineModal"></div>
                        <div className="total">
                            <h4>Total : {totalCommande} Ariary</h4>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Modal;