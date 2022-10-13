import { useState } from "react";

function TrueFalse(){

    const [btn, setBtn] = useState(true);//state, btn - value(false), setBtn - updates based on whatever
    console.log(btn);
    return(
        <>
        {new Date().toISOString()}
        <p>Value:</p>
        {
            //condition ? valueIfTrue : valueIfFalse
            btn?<p>TRUE</p>:<p>FALSE</p>
        }
        <button onClick={()=>setBtn(current=>!current)}>CLICK</button>
        </>
    )
}

export default TrueFalse;