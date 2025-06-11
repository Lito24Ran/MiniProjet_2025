import { useState } from "react";
import React , {useState} from 'react';

function Login() {

    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const handleSubmit = (e) => { e.preventDefault()};

     console.log ('Email', email);
     console.log ('Password', password);

    return (
        <div className="login-contener">
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >Email :</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={ (e) =>  setEmail(e.target.value)} required/>
                </div>
                <div>
                    <label>mot de passe :</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) =>  setPassword(e.target.value)} required />
                </div>
                <button type="submit">se connecter</button>
            </form>
        </div>
    );
}

export default Login ;