
import React  from "react";
import useState  from "react";
import ReactDom from "react-dom";

function buttonDecounteur (){

    const [count, setcount] = useState(0);
    const Uneclic = () =>{
        setcount (count + 1) ;
    };
    return(
        <>
        <p>{count}</p>
        <button onClick={Uneclic}>clic moi</button>
        </>
);
};


export default buttonDecounteur;