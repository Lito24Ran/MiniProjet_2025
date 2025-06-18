import React, { useContext, useState } from "react";
import './modal.css';

function Modal({ oneclose, condition }) {
    const [showCash, setShowCash] = useState(true);
    //const Supression = useContext(MOdalContext); 
    const [nameCash, setNameCash] = useState('');
    const [takeNameCash, setTakeNameCash] = useState('');
    const [levelModal, setLevelModal] = useState('');
    const [nameMvola, setNameMvola] = useState('');
    const [number, setNumber] = useState('');

    //eto no ataoko ilay state an' le condition

    const [conditionnameCash, setConditionnameCash] = useState(false);

    function inputName(e) {
        setNameCash(e.target.value);
        /* console.log(nameCash); */

    }

    function inputLevel(e) {
        setLevelModal(e.target.value)
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
        } else if (levelModal == "") {
            alert("Entrer votre niveau")
        }
    }


    function conditionMvolaModal() {
        if (nameMvola.trim() == "") {
            alert("Veuillez entrer votre nom dans le Mvola")
        } else if (number.trim() == "") {
            alert("Veuillez entrer votre numeros dans le Mvola")
        }
    }


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

                                (conditionnameCash) ? <p>Enterer un nom</p> :
                                <div className="inputText">
                                    <label htmlFor="">Entrer votre Nom</label>
                                    <br />
                                    <input type="text" size={30}
                                        required
                                        value={nameCash}
                                        onChange={inputName} />
                                    <br />
                                    <label htmlFor="">Entrer votre niveau</label>
                                    <br />
                                    <input type="text" size={30} name="EntreLevel" id="Level"
                                        value={levelModal}
                                        onChange={inputLevel}
                                        required
                                    />
                                    <div className="date">
                                        <h5>expire</h5>
                                        <p>10mn</p>
                                    </div>
                                    <div className="btnSubmit">
                                        <button id="SubmitBtn" onClick={conditionalModal && condition}>Submit</button>
                                    </div>
                                </div>
                                :
                                <div className="inputText">
                                    <label htmlFor="">Entrer votre Nom</label>
                                    <br />
                                    <input type="text" size={30}
                                        value={nameMvola}
                                        onChange={inputnameMvola}
                                        required />
                                    <br />
                                    <label htmlFor="">Entrer votre numero Mvola</label>
                                    <br />
                                    <input type="text" size={30} name="EntreLevel" id="Level"
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
                            <img src="#" alt="logo" />
                            <h3>Kalico</h3>
                        </div>
                        <div className="underlinemoDal"></div>
                        <div className="total">
                            <h4>Total : </h4>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Modal;