import React,{useState} from "react";


function FunctionCounter () {
    const [num , Number]= useState(0);

    function Addfive () {
        Number(num + 5);
    };

    function Reset()  {
        Number(0);
    };
    return(
        <>
        <h2 id="func">{num}</h2>
        <button onClick={Reset} className="funcBTN">Reset(0)</button>
        <button onClick={Addfive} className="funcBTN">AddFive(+5)</button>
        <h1>FunctionCounter</h1>

        </>
    );
}

export default FunctionCounter;